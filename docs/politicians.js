

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
        const response = await fetch(`https://polytikka-production.up.railway.app/api/getPoliticiansByName/${name}`);
        const data = await response.json(); // Await here!
        // console.log(data); // This will log the array of objects
        return data;
    } catch (error) {
        console.log(error);
    }
};

const searchIcon = document.getElementById("search-icon");
searchIcon.addEventListener("click", async function () {
    const inputValue = searchByName.value;
    const length = inputValue.length;
    console.log("Input Value:", inputValue);

    if (length > 0) {
        const polyInfo = await getPoliticiansByName(inputValue);
        console.log("Poly Info:", polyInfo);

        const filterInfo = polyInfo.map((item) => ({
            name: item.name,
            party: item.party,
            position: item.position,
            profileImage: item.profileImage
        }));

        console.log("Filtered Info:", filterInfo);
        if (filterInfo.length > 0) {
            options.style.visibility = "visible";

        }

        filterInfo.map((item) => {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "shortdetails");

            const profile = document.createElement("img");
            profile.setAttribute("class", "simage")

            const name = document.createElement("h3");
            name.setAttribute("class", "sname");

            const party = document.createElement("p");
            party.setAttribute("class", "sparty");


            profile.src = item.profileImage;
            name.innerHTML = item.name;
            party.innerHTML = item.party;
            // position.innerHTML = item.position;
            newDiv.append(profile, name, party);

            options.appendChild(newDiv);

            newDiv.addEventListener("click", () => {
                window.location.href = `politicianprofile.html?name=${encodeURIComponent(item.name)}`;
            });


        });





    } else {
        console.log("Invalid: Either empty or not divisible by 2");
    }
});

// Select all shortdetails containers
const shortDetailsElements = document.querySelectorAll(".shortdetails");

// Loop and add event listeners
shortDetailsElements.forEach((detail) => {
    detail.addEventListener("click", () => {
        // Find the .sname element inside THIS shortdetails
        const snameElement = detail.querySelector(".sname");
        if (snameElement) {
            const snameText = snameElement.textContent.trim();
            console.log("Clicked politician name:", snameText);

            // Do whatever you want with the name here
        }
    });
});



// const shorts = document.querySelectorAll(".short");

// shorts.forEach((short) => {
//     short.addEventListener("click", () => {
//         window.location.href = "politicianprofile.html";
//     });
// });



const topRated = document.getElementById("top-rated");
async function getTopPoliticians() {

    try {
        const mostRating = document.getElementById("most-rated");

        const topPoliticians = await fetch('https://polytikka-production.up.railway.app/api/topPoliticians');
        const json = await topPoliticians.json();
        console.log(json);
        const data = json.data;

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

            newDiv.addEventListener("click", () => {
                window.location.href = `politicianprofile.html?name=${name.textContent}`;
            })



            mostRating.appendChild(newDiv);
        }



    } catch (error) {
        console.log(error);



    }

};
const mostSearched = document.getElementById("most-searched");

async function getMostSearchedPoliticians() {
    try {
        const response = await fetch('https://polytikka-production.up.railway.app/api/mostSearchedPoliticians');
        const json = await response.json();

        const data = json.data;
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const newDiv = document.createElement("div");

            // Create and set up the image
            let img = document.createElement("img");
            img.src = data[i].profileImage;
            img.style.width = "100%";
            img.style.height = "200px";
            img.style.objectFit = "cover";
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


            newDiv.addEventListener("click", () => {
                window.location.href = `politicianprofile.html?name=${name.textContent}`;
            })

            mostSearched.appendChild(newDiv);
        }
    } catch (error) {
        console.log("Error fetching most searched politicians:", error);
    }
};

let newsData = [];
async function getPoliticalNews() {

    try {
        const response = await fetch('https://polytikka-production.up.railway.app/api/politicalNews', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log("I am ready");
        const data = json.data;
        console.log(data);

        newsData = data;
        console.log("Hey i am news data", newsData);


        return data;


    } catch (error) {
        console.log("Error fetching political news:", error);

    }

};




const changeNews = async () => {
    console.log(" i staretd running");
    if (newsData.length == 0) {
        console.log("Its Empty")
    }


    const mainSection = document.getElementById("main-section");
    // mainSection.style.backgroundImage = "url('" + newsData[0].imageUrl + "')";
    mainSection.style.backgroundSize = "cover";
    mainSection.style.backgroundPosition = "center";



};





async function getData() {
    await getPoliticalNews();


    changeNews()

};
getData();


let indexPosition = 0;

async function updateNews() {
    const mainSection = document.getElementById("main-section");
    mainSection.style.backgroundImage = "url('" + newsData[indexPosition].imageUrl + "')";
    mainSection.style.backgroundSize = "cover";

    mainSection.style.backgroundPosition = "center";
    const newsDescription = document.getElementById("news-description");
    newsDescription.innerHTML = newsData[indexPosition].title;


    indexPosition = (indexPosition + 1) % newsData.length;
}


setInterval(updateNews, 5000);


getTopPoliticians();
getMostSearchedPoliticians();
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });



async function getMostRead(category) {
    const endpoint = 'https://polytikka-production.up.railway.app/api/topReads';
    const limit = 10;
    const container = document.getElementById("most-read");
    const template = document.getElementById("most-read-template");

    if (!template || !container) {
        console.warn("Template or container not found for Most Read section.");
        return;
    }

    try {
        const url = new URL(endpoint);
        if (limit) url.searchParams.append("limit", limit);
        if (category) url.searchParams.append("category", category);

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Server responded with status ${response.status}`);

        const result = await response.json();
        const topNews = result.data;

        // Clear the container first
        container.innerHTML = "";

        if (!topNews || topNews.length === 0) {
            container.innerHTML = `<p style="text-align:center; color: gray;">No top reads for "${category}".</p>`;
            return;
        }

        // Append each news item
        topNews.forEach(news => {
            const clone = template.cloneNode(true);
            clone.style.display = "flex"; // Make it visible

            clone.querySelector(".most-read-meta").textContent = `${news.category} • ${news.date}`;
            clone.querySelector(".most-read-title").textContent = news.title;
            clone.querySelector(".most-read-title").href = news.url;

            container.appendChild(clone);
        });

    } catch (error) {
        console.error("❌ Error fetching most read news:", error);
        alert("Failed to load most read news. Please try again later.");
    }
}
