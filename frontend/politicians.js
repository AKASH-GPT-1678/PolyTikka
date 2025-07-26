

let bottom = document.getElementsByClassName("bottom");

Array.from(bottom).forEach(element => {
    fetch('individual.html')
        .then(response => response.text())
        .then(data => {
            element.innerHTML = data;

            // Now safely query inside this element only
            const image = element.querySelector("#politician-name");
            if (image) {
                image.addEventListener("click", () => {
                    window.location.href = "politicianprofile.html";
                });
            }
        });
});

const searchByName = document.getElementById("searchByName");
const options = document.getElementById("options");

async function getPoliticiansByName(name) {
    try {
        const response = await fetch(`http://localhost:3402/api/getPoliticiansByName/${name}`);
        const data = await response.json(); // Await here!
        console.log(data); // This will log the array of objects
        return data;
    } catch (error) {
        console.log(error);
    }
}
searchByName.addEventListener("change", async function () {
    const inputValue = searchByName.value;
    const length = inputValue.length;

    if (length > 0 && length % 2 === 0) {
        const polyInfo = await getPoliticiansByName(inputValue);

        const filterInfo = polyInfo.map((item) => ({
            name: item.name,
            party: item.party,
            position: item.position,
            profileImage: item.profileImage
        }));

        console.log("Filtered Info:", filterInfo);

        filterInfo.map((item) => {
            const newDiv = document.createElement("div")
            newDiv.setAttribute("class", "short")
            const profile = document.createElement("img");
            profile.setAttribute("class", "simage")

            const name = document.createElement("h3");
            name.setAttribute("class", "sname");

            const party = document.createElement("p");
            party.setAttribute("class", "sparty")

            profile.src = item.profileImage;
            name.innerHTML = item.name;
            party.innerHTML = item.party;
            // position.innerHTML = item.position;
            newDiv.append(profile, name, party);

            options.appendChild(newDiv);

            newDiv.addEventListener("click", () => {
                window.location.href = "politicianprofile.html";
            });


        });





    } else {
        console.log("Invalid: Either empty or not divisible by 2");
    }
});



const shorts = document.querySelectorAll(".short");

shorts.forEach((short) => {
    short.addEventListener("click", () => {
        window.location.href = "politicianprofile.html";
    });
});



const topRated = document.getElementById("top-rated");
async function getTopPoliticians() {

    try {
        const mostRating = document.getElementById("most-rated");

        const topPoliticians = await fetch('http://localhost:3402/api/topPoliticians');
        const json = await topPoliticians.json();
        console.log(json);
        const data = json.data;
        // console.log(topPoliticians);
        // console.log(data.length);

        for (let i = 0; i < data.length; i++) {
            const newDiv = document.createElement("div");

            // Create and set up the image
            let img = document.createElement("img");
            img.src = data[i].profileImage;
            img.alt = data[i].name + " Image";
            img.style.width = "100%";
            img.style.height = "200px";
            img.style.objectFit = "cover";

            // Create and set text elements
            let name = document.createElement("h2");
            name.textContent = data[i].name;

            let party = document.createElement("p");
            party.textContent = "Party: " + data[i].party;

            let position = document.createElement("p");
            position.textContent = "Position: " + (data[i].position || "N/A");

            let ratings = document.createElement("p");
            ratings.textContent = "Rating: " + data[i].avgRatings;

            // Append all to newDiv
            newDiv.appendChild(img);
            newDiv.appendChild(name);
            newDiv.appendChild(party);
            newDiv.appendChild(position);
            newDiv.appendChild(ratings);

           

            mostRating.appendChild(newDiv);
        }



    } catch (error) {
        console.log(error);

        

    }

};
const mostSearched = document.getElementById("most-searched");

async function getMostSearchedPoliticians() {
    try {
        const response = await fetch('http://localhost:3402/api/mostSearchedPoliticians');
        const json = await response.json();
        const data = json.data;
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const newDiv = document.createElement("div");

            // Create and set up the image
            let img = document.createElement("img");
            img.src = data[i].profileImage;
            // img.alt = data[i].name + " Image";
            // img.style.width = "100%";
            // img.style.height = "200px";
            // img.style.objectFit = "cover";

            // Create and set text elements
            let name = document.createElement("h2");
            name.textContent = data[i].name;

            let party = document.createElement("p");
            party.textContent = "Party: " + data[i].party;

            let position = document.createElement("p");
            position.textContent = "Position: " + (data[i].position || "N/A");

            let numSearches = document.createElement("p");
            numSearches.textContent = "Searched: " + data[i].numOfSearched + " times";

            // Append all to newDiv
            newDiv.appendChild(img);
            newDiv.appendChild(name);
            newDiv.appendChild(party);
            newDiv.appendChild(position);
            newDiv.appendChild(numSearches);

            mostSearched.appendChild(newDiv);
        }
    } catch (error) {
        console.log("Error fetching most searched politicians:", error);
    }
}


getTopPoliticians();