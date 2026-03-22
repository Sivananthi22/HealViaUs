document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault(); // stop page reload

    // GET VALUES
    let name = document.querySelector("input[type='text']").value.trim();
    let email = document.querySelector("input[type='email']").value.trim();
    let message = document.querySelector("textarea").value.trim();

    // VALIDATION
    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    // EMAIL FORMAT CHECK
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email!");
        return;
    }

    // SUCCESS
    alert("Message sent successfully! 🎉");

    // RESET FORM
    document.getElementById("contactForm").reset();

});