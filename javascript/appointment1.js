function validateStep1() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value;

    let gender = document.querySelector("input[name='gender']:checked");

    // CLEAR OLD ERRORS
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    let isValid = true;

    // NAME
    if (!name) {
        document.getElementById("nameError").textContent = "Name cannot be empty";
        isValid = false;
    } else if (/\d/.test(name)) {
        document.getElementById("nameError").textContent = "Name should not contain numbers";
        isValid = false;
    }

    // EMAIL
    if (!email) {
        document.getElementById("emailError").textContent = "Email cannot be empty";
        isValid = false;
    } else if (!/^[a-z]/.test(email)) {
        document.getElementById("emailError").textContent = "Must start with lowercase letter";
        isValid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Must contain @";
        isValid = false;
    }

    // PHONE
    // PHONE - ONLY NUMBERS
if (!phone) {
    document.getElementById("phoneError").textContent = "Phone number cannot be empty";
    isValid = false;
}
else if (!/^\d+$/.test(phone)) {
    document.getElementById("phoneError").textContent = "Phone number must contain only digits";
    isValid = false;
}
else if (phone.length !== 10) {
    document.getElementById("phoneError").textContent = "Phone number must be exactly 10 digits";
    isValid = false;
}

    // DOB
    if (dob) {
        let selected = new Date(dob);
        let today = new Date();

        if (selected > today) {
            document.getElementById("dobError").textContent = "DOB cannot be future";
            isValid = false;
        }
    }

    // GENDER
    if (!gender) {
        document.getElementById("genderError").textContent = "Select gender";
        isValid = false;
    }

    return isValid;
}

window.onload = function () {

    const params = new URLSearchParams(window.location.search);

    if (params.get("hiddenName")) {
        document.getElementById("hiddenName").value = params.get("name");
    }

    if (params.get("hiddenEmail")) {
        document.getElementById("hiddenEmail").value = params.get("email");
    }

    if (params.get("hiddenPhone")) {
        document.getElementById("hiddenPhone").value = params.get("phone");
    }

    if (params.get("dob")) {
        document.getElementById("dob").value = params.get("dob");
    }

    if (params.get("gender")) {
        document.querySelector(`input[name="gender"][value="${params.get("gender")}"]`).checked = true;
    }
};