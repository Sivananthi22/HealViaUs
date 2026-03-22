function filterDoctors(category) {

    console.log("Clicked category:", category); // ✅ check button click

    fetch("../xml/services.xml?v=" + new Date().getTime())
        .then(res => res.text())
        .then(data => {

            console.log("XML loaded successfully"); // ✅ check fetch

            const xml = new DOMParser().parseFromString(data, "application/xml");

            const services = xml.getElementsByTagName("service");
            console.log("Total services found:", services.length); // ✅ should be 6

            let title = "";
            let output = "<ul>";

            for (let i = 0; i < services.length; i++) {

                let cat = services[i]
                    .getElementsByTagName("category")[0]
                    .textContent.trim();

                console.log("Checking category from XML:", cat); // ✅ check each category

                if (cat === category) {

                    console.log("MATCH FOUND:", cat); // ✅ important

                    title = services[i]
                        .getElementsByTagName("name")[0]
                        .textContent;

                    let itemsParent = services[i]
                        .getElementsByTagName("items")[0];

                    console.log("Items parent:", itemsParent); // ✅ check exists

                    let items = itemsParent.getElementsByTagName("item");

                    console.log("Items found:", items.length); // ✅ should be 6

                    for (let j = 0; j < items.length; j++) {
                        console.log("Item:", items[j].textContent); // ✅ print each item
                        output += `<li>✔ ${items[j].textContent}</li>`;
                    }

                    break;
                }
            }

            output += `</ul>
                <a href="../html/doctors.html?category=${category}" class="service-action-btn">
                    Explore Doctors
                </a>`;

            document.getElementById("popup-title").innerText = title;
            document.getElementById("popup-body").innerHTML = output;

            document.getElementById("popup").style.display = "flex";
        })
        .catch(error => {
            console.log("ERROR LOADING XML:", error);
        });
}

/* CLOSE POPUP */
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

window.onclick = function (event) {
    let popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
}