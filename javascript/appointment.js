const doctors = [
  {
    name: "Dr. Amina Rahman",
    specialty: "Cardiologist",
    rating: 4.8,
    location: "Colombo",
    description: "Expert in heart care",
    image: "../images/Dr. Amina Rahman.png"
  },
  {
    name: "Dr. Daniel Foster",
    category: "cardio",
    specialty: "Cardiologist",
    rating: 4.7,
    location: "Colombo",
    description: "Experienced cardiologist specializing in heart disease prevention and treatment.",
    image: "../images/Dr. Daniel Foster.png"
},
{
    name: "Dr. Henry Collins",
    category: "cardio",
    specialty: "Cardiologist",
    rating: 4.6,
    location: "Kandy",
    description: "Focused on advanced cardiac diagnostics and patient-centered care.",
    image: "../images/Dr. Henry Collins.png"
},
{
    name: "Dr. James Walker",
    category: "cardio",
    specialty: "Cardiologist",
    rating: 4.8,
    location: "Galle",
    description: "Specialist in interventional cardiology with over 12 years of experience.",
    image: "../images/Dr. James Walker.png"
},
{
    name: "Dr. William Turner",
    category: "cardio",
    specialty: "Cardiologist",
    rating: 4.9,
    location: "Negombo",
    description: "Renowned for expertise in heart rhythm disorders and patient care.",
    image: "../images/Dr. William Turner.png"
},
{
    name: "Dr. Amelia Brooks",
    category: "dentist",
    specialty: "Dentist",
    rating: 4.8,
    location: "Colombo",
    description: "Specialist in cosmetic dentistry and smile enhancement treatments.",
    image: "../images/Dr. Amelia Brooks.png"
},
{
    name: "Dr. Charlotte Hayes",
    category: "dentist",
    specialty: "Dentist",
    rating: 4.7,
    location: "Kandy",
    description: "Experienced in restorative dentistry and preventive oral care.",
    image: "../images/Dr. Charlotte Hayes.png"
},
{
    name: "Dr. Olivia Bennett",
    category: "dentist",
    specialty: "Dentist",
    rating: 4.9,
    location: "Galle",
    description: "Focused on pediatric dentistry and patient-friendly dental care.",
    image: "../images/Dr. Olivia Bennett.png"
},
{
    name: "Dr. Oliver Scott",
    category: "dentist",
    specialty: "Dentist",
    rating: 4.6,
    location: "Negombo",
    description: "Expert in oral surgery and advanced dental procedures.",
    image: "../images/Dr. Oliver Scott.png"
},
{
    name: "Dr. Kavitha Rajan",
    category: "dentist",
    specialty: "Dentist",
    rating: 4.8,
    location: "Jaffna",
    description: "Dedicated to comprehensive dental care and patient education.",
    image: "../images/Dr. Kavitha Rajan.png"
},
{
    name: "Dr. Ishara Jayasinghe",
    category: "pediatric",
    specialty: "Pediatrician",
    rating: 4.9,
    location: "Colombo",
    description: "Dedicated pediatrician providing compassionate care for infants and children.",
    image: "../images/Dr. Ishara Jayasinghe.png"
},
{
    name: "Dr. Anjali Sharma",
    category: "pediatric",
    specialty: "Pediatrician",
    rating: 4.7,
    location: "Kandy",
    description: "Experienced in child health, growth monitoring, and preventive care.",
    image: "../images/Dr. Anjali Sharma.png"
},
{
    name: "Dr. Nivetha Kumar",
    category: "pediatric",
    specialty: "Pediatrician",
    rating: 4.8,
    location: "Jaffna",
    description: "Focused on pediatric nutrition and early childhood development.",
    image: "../images/Dr. Nivetha Kumar.png"
},
{
    name: "Dr. Tharushi Silva",
    category: "pediatric",
    specialty: "Pediatrician",
    rating: 4.6,
    location: "Galle",
    description: "Provides child-friendly care with a focus on long-term wellness.",
    image: "../images/Dr. Tharushi Silva.png"
},
{
    name: "Dr. Sanduni Perera",
    category: "pediatric",
    specialty: "Pediatrician",
    rating: 4.8,
    location: "Negombo",
    description: "Specialist in childhood illnesses and immunization programs.",
    image: "../images/Dr. Sanduni Perera.png"
},

 {
    name: "Dr. Kasun Perera",
    category: "ortho",
    specialty: "Orthopedic Specialist",
    rating: 4.8,
    location: "Colombo",
    description: "Specialist in bone and joint treatments with expertise in sports injuries.",
    image: "../images/Dr. Kasun Perera.png"
},
{
    name: "Dr. Suresh Kumar",
    category: "ortho",
    specialty: "Orthopedic Specialist",
    rating: 4.7,
    location: "Kandy",
    description: "Experienced in fracture management and orthopedic surgeries.",
    image: "../images/Dr. Suresh Kumar.png"
},
{
    name: "Dr. Ravi Chandran",
    category: "ortho",
    specialty: "Orthopedic Specialist",
    rating: 4.6,
    location: "Jaffna",
    description: "Focused on joint replacement and rehabilitation therapies.",
    image: "../images/Dr. Ravi Chandran.png"
},
{
    name: "Dr. Tharindu Jayawardena",
    category: "ortho",
    specialty: "Orthopedic Specialist",
    rating: 4.9,
    location: "Galle",
    description: "Expert in spinal disorders and advanced orthopedic care.",
    image: "../images/Dr. Tharindu Jayawardena.png"
},
{
    name: "Dr. Niroshan Silva",
    category: "ortho",
    specialty: "Orthopedic Specialist",
    rating: 4.7,
    location: "Negombo",
    description: "Dedicated to treating musculoskeletal conditions and injuries.",
    image: "../images/Dr. Niroshan Silva.png"
},   
{
    name: "Dr. Ayesha Khan",
    category: "neuro",
    specialty: "Neurologist",
    rating: 4.9,
    location: "Colombo",
    description: "Expert in neurological disorders with a focus on brain and nerve health.",
    image: "../images/Dr. Ayesha Khan.png"
},
{
    name: "Dr. Fatima Zahra",
    category: "neuro",
    specialty: "Neurologist",
    rating: 4.8,
    location: "Kandy",
    description: "Specializes in treating migraines, epilepsy, and nervous system conditions.",
    image: "../images/Dr. Fatima Zahra.png"
},
{
    name: "Dr. Zainab Ali",
    category: "neuro",
    specialty: "Neurologist",
    rating: 4.7,
    location: "Galle",
    description: "Focused on patient-centered care for neurological and cognitive disorders.",
    image: "../images/Dr. Zainab Ali.png"
},
{
    name: "Dr. Maryam Hassan",
    category: "neuro",
    specialty: "Neurologist",
    rating: 4.8,
    location: "Negombo",
    description: "Experienced in diagnosing and managing complex neurological conditions.",
    image: "../images/Dr. Maryam Hassan.png"
},
{
    name: "Dr. Li Xiaoyan",
    category: "neuro",
    specialty: "Neurologist",
    rating: 4.9,
    location: "Colombo",
    description: "Renowned for expertise in stroke care and neurological rehabilitation.",
    image: "../images/Dr. Li Xiaoyan.png"
},
{
    name: "Dr. Emily Carter",
    category: "general",
    specialty: "General Physician",
    rating: 4.8,
    location: "Colombo",
    description: "Provides comprehensive primary care and general health consultations.",
    image: "../images/Dr. Emily Carter.png"
},
{
    name: "Dr. Dilani Fernando",
    category: "general",
    specialty: "General Physician",
    rating: 4.7,
    location: "Galle",
    description: "Experienced in diagnosing and managing a wide range of medical conditions.",
    image: "../images/Dr. Dilani Fernando.png"
},
{
    name: "Dr. Dharshini Suresh",
    category: "general",
    specialty: "General Physician",
    rating: 4.6,
    location: "Jaffna",
    description: "Focused on preventive healthcare and long-term patient wellness.",
    image: "../images/Dr. Dharshini Suresh.png"
},
{
    name: "Dr. Anjali Subramaniam",
    category: "general",
    specialty: "General Physician",
    rating: 4.8,
    location: "Kandy",
    description: "Specialist in family medicine and routine health checkups.",
    image: "../images/Dr. Anjali Subramaniam.png"
},
{
    name: "Dr. Hannah Clarke",
    category: "general",
    specialty: "General Physician",
    rating: 4.7,
    location: "Negombo",
    description: "Dedicated to providing accessible and patient-centered healthcare.",
    image: "../images/Dr. Hannah Clarke.png"
}
  
];

function displayDoctors(list) {

    let container = document.getElementById("doctor-list");
    container.innerHTML = "";

    list.forEach(doc => {

        let card = `
            <div class="doctor-card">

                <img src="${doc.image}" alt="${doc.name}">

                <h3>${doc.name}</h3>
                <p class="specialty">${doc.specialty}</p>

                <p class="desc">${doc.description}</p>

                <div class="doctor-info">
                    <span>⭐ ${doc.rating}</span>
                    <span>📍 ${doc.location}</span>
                </div>

                <button>View Profile</button>

            </div>
        `;

        container.innerHTML += card;
    });
}
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}



function filterDoctors() {

    let category = document.getElementById("category").value;
    let doctorSelect = document.getElementById("doctor");

    doctorSelect.innerHTML = "<option>Select a doctor</option>";

    let filtered = doctors.filter(d => d.category === category);

    filtered.forEach(doc => {
        let option = document.createElement("option");
        option.textContent = doc.name;
        doctorSelect.appendChild(option);
    });
}

function applyFilter() {

    let checkboxes = document.querySelectorAll(".filters input:checked");

    let selectedCategories = [];
    let selectedRatings = [];
    let selectedLocations = [];

    checkboxes.forEach(cb => {

        if (["cardio","dentist","pediatric","ortho","neuro","general"].includes(cb.value)) {
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