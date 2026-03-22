let doctors = [];

fetch("../xml/doctors.xml")
    .then(res => res.text())
    .then(data => {

        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "text/xml");

        let nodes = xml.getElementsByTagName("doctor");

        for (let i = 0; i < nodes.length; i++) {

            let d = nodes[i];

            let times = d.getElementsByTagName("time");
            let slots = [];

            for (let j = 0; j < times.length; j++) {
                slots.push(times[j].textContent);
            }

            doctors.push({
                name: d.getElementsByTagName("name")[0].textContent,
                category: d.getElementsByTagName("category")[0].textContent,
                specialty: d.getElementsByTagName("specialty")[0].textContent,
                rating: d.getElementsByTagName("rating")[0].textContent,
                location: d.getElementsByTagName("location")[0].textContent,
                description: d.getElementsByTagName("description")[0].textContent,
                image: d.getElementsByTagName("image")[0].textContent,
                slots: slots
            });
        }

        // 🔥 AFTER LOADING ONLY
        displayDoctors(shuffleArray(doctors));
    });

function displayDoctors(list) {

    let container = document.getElementById("doctor-list");

    if (!container) return; // 🔥 prevent crash

    container.innerHTML = "";

    list.forEach(doc => {

        let card = `
        <div class="doctor-card">

            <img src="${doc.image}" alt="${doc.name}">

            <h3>${doc.name}</h3>
            <p class="specialty">${doc.specialty}</p>

            <p class="desc">${doc.description}</p>

            <div class="doctor-info">
                <span>
                    <span class="material-icons icon">star</span>
                    ${doc.rating}
                </span>
                <span>
                    <span class="material-icons icon">location_on</span>
                    ${doc.location}
                </span>
            </div>

            <a href="appointment1.html" class="book-btn-card">
                Book Appointment
            </a>

        </div>
        `;

        container.innerHTML += card;
    });
}
function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}


function applyFilter() {

    let checkboxes = document.querySelectorAll(".filters input:checked");

    let selectedCategories = [];
    let selectedRatings = [];
    let selectedLocations = [];

    checkboxes.forEach(cb => {

        if (["cardio", "dentist", "pediatric", "ortho", "neuro", "general"].includes(cb.value)) {
            selectedCategories.push(cb.value);
        }

        else if (!isNaN(cb.value)) {
            selectedRatings.push(parseFloat(cb.value));
        }

        else {
            selectedLocations.push(cb.value);
        }

    });

    let filtered = doctors.filter(doc => {

        let matchCategory = selectedCategories.length === 0 || selectedCategories.includes(doc.category);

        let matchRating = selectedRatings.length === 0 || selectedRatings.some(r => doc.rating >= r);

        let matchLocation = selectedLocations.length === 0 || selectedLocations.includes(doc.location);

        return matchCategory && matchRating && matchLocation;
    });

    displayDoctors(filtered);
}

displayDoctors(shuffleArray(doctors));

function validateStep2() {

    let category = document.getElementById("category").value;
    let doctor = document.getElementById("doctor").value;

    let selectedDate = document.querySelector(".calendar span.selected");
    let selectedTime = document.querySelector(".time-slot.active");

    let terms = document.getElementById("terms").checked;

    // CLEAR OLD ERRORS
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    let isValid = true;

    // SPECIALTY
    if (!category) {
        document.getElementById("categoryError").textContent = "Please select a specialty";
        isValid = false;
    }

    // DOCTOR
    if (!doctor || doctor === "Select a doctor") {
        document.getElementById("doctorError").textContent = "Please select a doctor";
        isValid = false;
    }

    // DATE
    if (!selectedDate) {
        document.getElementById("dateError").textContent = "Please select a date";
        isValid = false;
    }

    // TIME
    if (!selectedTime) {
        document.getElementById("timeError").textContent = "Please select a time slot";
        isValid = false;
    }

    // TERMS
    if (!terms) {
        document.getElementById("termsError").textContent = "You must accept terms";
        isValid = false;
    }

    return isValid;
}