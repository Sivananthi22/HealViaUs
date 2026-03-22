function validateStep2() {

    let category = document.getElementById("category").value;
    let doctor = document.getElementById("doctor").value;

    //let selectedDate = document.querySelector(".calendar span.selected");
    //let selectedTime = document.querySelector(".time-slot.active");

    let date = selectedDate ? selectedDate.textContent : "";
    let time = selectedTime ? selectedTime.textContent : "";

    let form = document.querySelector("form");

    // create hidden inputs
    let dateInput = document.createElement("input");
    dateInput.type = "hidden";
    dateInput.name = "date";
    dateInput.value = date;

    let timeInput = document.createElement("input");
    timeInput.type = "hidden";
    timeInput.name = "time";
    timeInput.value = time;

    form.appendChild(dateInput);
    form.appendChild(timeInput);

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

window.onload = function () {

    const dates = document.querySelectorAll(".calendar span");

    dates.forEach(date => {

        if (date.classList.contains("disabled")) return;

        date.onclick = () => {

            document.querySelectorAll(".calendar span").forEach(d => d.classList.remove("selected"));
            date.classList.add("selected");

            // ✅ SHOW TIME SECTION
            document.getElementById("timeSection").style.display = "block";

            let container = document.getElementById("timeSlots");
            container.innerHTML = "";

            (window.currentSlots || []).forEach(time => {

                let btn = document.createElement("button");
                btn.className = "time-slot";
                btn.textContent = time;
                btn.type = "button";

                btn.onclick = () => {
                    document.querySelectorAll(".time-slot").forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                };

                container.appendChild(btn);
            });
        };
    });
    const params = new URLSearchParams(window.location.search);

    const doctor = params.get("doctor");
    const specialty = params.get("specialty");

    if (doctor) {
        document.getElementById("doctor").value = doctor;
    }

    if (specialty) {
        document.getElementById("category").value = specialty;
    }

};

function filterDoctors() {

    let category = document.getElementById("category").value;
    let doctorSelect = document.getElementById("doctor");

    doctorSelect.innerHTML = "<option>Select a doctor</option>";

    let filtered = doctors.filter(d => d.category === category);

    filtered.forEach(doc => {
        let option = document.createElement("option");
        option.value = doc.name;
        option.textContent = doc.name;
        doctorSelect.appendChild(option);
    });
}

function updateTimeSlots() {

    let doctor = document.getElementById("doctor").value;

    // ✅ SHOW DATE SECTION
    document.getElementById("dateSection").style.display = "block";

    // store slots for later
    window.currentSlots = doctorSlots[doctor] || [];

}
function goBackWithData() {

    const params = new URLSearchParams(window.location.search);

    window.location.href = "appointment1.html?" + params.toString();
}