async function submitRating(politicianId, rating, email) {
    const payload = {
        politicianId: politicianId,
        rating: rating,
        email: email
    };

    const response = await fetch(`http://localhost:3402/api/ratePoliticians/${politicianId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    console.log(payload);
    const result = await response.json();
    console.log(result);
    if(result.existing === true){
        alert("You have already rated this politician");
    }


}

const allStars = document.querySelectorAll(".rating-star");
Array.from(allStars).forEach((star, index) => {
    star.addEventListener("mouseenter", () => {
        const ratingform = document.querySelector("#rating-form");
        let choosen = index; // set directly from hovered index

        // Show the rating form in flex layout
        ratingform.style.display = "flex";

        // Update star colors
        allStars.forEach((item, subindex) => {
            item.style.color = subindex <= choosen ? "pink" : "black";
        });

        const email = document.querySelector("#rating-form #email");
        const submitButton = document.querySelector("#rating-form #submit");
        const politicianId = document.querySelector('.basic-info #userid').textContent;

        submitButton.addEventListener("click", () => {
            if (!email.value) {
                return;
            }


            submitRating(politicianId, choosen + 1, email.value);
        });

        // Update chosen rating if needed
        const ratingDisplay = document.getElementById("rating");
        if (ratingDisplay) {
            ratingDisplay.textContent = choosen + 1;
        }
    });
});






const getPolticianDetails = async () => {

    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('name');


    try {
        ;
        const data = await fetch(`http://localhost:3402/api/getFullDetailsByName/${name}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log(data);
        const response = await data.json();
        console.log("i am here", response.data);
        return response.data;

    } catch (error) {
        console.log(error, "dikkat");


    }
};

let electionDetails = [];
const selectElement = document.getElementById("electionlist");
selectElement.addEventListener("change", function () {
    choosenElection = this.value;  
    console.log("Selected election ID:", choosenElection);
    const collectedResults = electionDetails.find(item => item.id === choosenElection);
    const electionItems = document.querySelectorAll('.election-item');

    electionItems[0].querySelector('span').textContent = collectedResults.year;
    electionItems[1].querySelector('span').textContent = collectedResults.electionType;
    electionItems[2].querySelector('span').textContent = collectedResults.constituency;
    electionItems[3].querySelector('span').textContent = collectedResults.state;
    electionItems[4].querySelector('span').textContent = collectedResults.party;
    electionItems[5].querySelector('span').textContent = collectedResults.result;
    electionItems[6].querySelector('span').textContent = collectedResults.totalVotes.toLocaleString();  // formats like 756,420
    electionItems[7].querySelector('span').textContent = `${collectedResults.voteShare}%`;
    electionItems[8].querySelector('span').textContent = collectedResults.opponentName;
    electionItems[9].querySelector('span').textContent = collectedResults.victoryMargin.toLocaleString();

});



async function updatePoliticainData() {

    const data = await getPolticianDetails();
    console.log("i am uey", data);

    if (!data) return;
    console.log("i am duey", data);
    document.querySelector('.header h1').textContent = data.name;
    document.querySelector('.basic-info .position').textContent = data.position;
    document.getElementById('profile-img').src = data.profileImage;
    document.querySelector('.basic-info p').textContent = data.description;
    document.querySelector('.basic-info h2').textContent = data.name;
    document.getElementById('date-of-birth').innerHTML = data.updatedAt;
    document.getElementById('constituency').innerHTML = data.constituency;
    document.getElementById('education').innerHTML = data.education;
    document.querySelector('.basic-info #userid').textContent = data.id;
    document.querySelector('.rating-text').textContent = data.avgRatings + " / 5";
    document.querySelector('.basic-info #userid').style.display = 'none';

    const section = document.querySelector('.experience-section');


    while (data.workHistory.length > 0) {
        const experienceCard = document.querySelector('.experience-card');

        const experience = experienceCard.cloneNode(true);
        experience.style.display = 'inline-block';

        experience.querySelector('.experience-details h3').textContent = data.workHistory[0].role;
        experience.querySelector('.experience-details p').textContent = data.workHistory[0].startYear + " - " + data.workHistory[0].endYear;
        section.appendChild(experience);
        data.workHistory.shift();

    };


    document.querySelector('.party-info strong').textContent = data.party;

    let shortForm = '';
    if (data.party) {
        const partyshort = data.party.split(" ");
        for (let i = 0; i < partyshort.length; i++) {
            shortForm = shortForm + partyshort[i].charAt(0);
            console.log(shortForm);
        }
    };


    const selectElement = document.getElementById("electionlist");
    const electionList = data.electionResult;
    electionDetails = data.electionResult;




    // Optional: Clear existing options
    selectElement.innerHTML = "";

    // Loop through the array and create option elements
    electionList.forEach(item => {
        const option = document.createElement("option");
        option.style.padding = "10px";
        option.value = item.id;           // Use ID as the value
        option.textContent = item.constituency + "   " + item.year;   // Use name as the visible text
        selectElement.appendChild(option);
    });


    document.querySelector('.party-logo').innerHTML = shortForm;
    let choosenElection = "";
    selectElement.addEventListener("change", function () {
        choosenElection = this.value;  // or: selectElement.value
        console.log("Selected election ID:", choosenElection);
    });
    if (!choosenElection) {
        const collectedResults = data.electionResult[0];


        const electionItems = document.querySelectorAll('.election-item');

        electionItems[0].querySelector('span').textContent = collectedResults.year;
        electionItems[1].querySelector('span').textContent = collectedResults.electionType;
        electionItems[2].querySelector('span').textContent = collectedResults.constituency;
        electionItems[3].querySelector('span').textContent = collectedResults.state;
        electionItems[4].querySelector('span').textContent = collectedResults.party;
        electionItems[5].querySelector('span').textContent = collectedResults.result;
        electionItems[6].querySelector('span').textContent = collectedResults.totalVotes.toLocaleString();  // formats like 756,420
        electionItems[7].querySelector('span').textContent = `${collectedResults.voteShare}%`;
        electionItems[8].querySelector('span').textContent = collectedResults.opponentName;
        electionItems[9].querySelector('span').textContent = collectedResults.victoryMargin.toLocaleString();

    }
    else {

        const collectedResults = data.electionResult.find(item => item.id === choosenElection);
        const electionItems = document.querySelectorAll('.election-item');

        electionItems[0].querySelector('span').textContent = collectedResults.year;
        electionItems[1].querySelector('span').textContent = collectedResults.electionType;
        electionItems[2].querySelector('span').textContent = collectedResults.constituency;
        electionItems[3].querySelector('span').textContent = collectedResults.state;
        electionItems[4].querySelector('span').textContent = collectedResults.party;
        electionItems[5].querySelector('span').textContent = collectedResults.result;
        electionItems[6].querySelector('span').textContent = collectedResults.totalVotes.toLocaleString();  // formats like 756,420
        electionItems[7].querySelector('span').textContent = `${collectedResults.voteShare}%`;
        electionItems[8].querySelector('span').textContent = collectedResults.opponentName;
        electionItems[9].querySelector('span').textContent = collectedResults.victoryMargin.toLocaleString();

    };

    // Select all stat-card elements
    const statCards = document.querySelectorAll('.records-assets .stat-card');

    let totalCases = statCards[0].querySelector('.stat-value').textContent = data.criminalCases;
    let seriousCharges = statCards[1].querySelector('.stat-value').textContent = data.criminalCases;
    // let pendingCases = statCards[2].querySelector('.stat-value').textContent = "60";




    statCards[3].querySelector('.stat-value').textContent = data.assetDetail.totalAssets;
    statCards[4].querySelector('.stat-value').textContent = data.assetDetail.movableAssets;
    statCards[5].querySelector('.stat-value').textContent = data.assetDetail.immovableAssets;

    // Allot test values

    // movableAssets.textContent = "₹45 Cr";
    // immovableAssets.textContent = "₹54 Cr";

    // Console log the updated values

    const familyCards = document.querySelectorAll('.family-section .stat-card');

    // Assign test values
    familyCards[0].querySelector('.stat-value').textContent = data.familyDetail.familyProfession;
    familyCards[1].querySelector('.stat-value').textContent = data.familyDetail.economicStatus;
    familyCards[2].querySelector('.stat-value').textContent = data.familyDetail.familyOrigin;
    familyCards[3].querySelector('.stat-value').textContent = data.familyDetail.community;
    familyCards[4].querySelector('.stat-value').textContent = data.familyDetail.politicalLegacy;

    const cardsGrid = document.querySelector('.cards-grid');

    // Clear existing cards (optional, if you want to replace all cards)
    cardsGrid.innerHTML = '';

    // Loop through each news article and create cards
    data.newsArticles.forEach(article => {
        // Create news card element
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';

        // Create card content
        newsCard.innerHTML = `
            <div class="card-content">
                ${article.headline}
            </div>
            <a href="${article.url}" class="read-more" target="_blank">Continue Reading →</a>
        `;

        // Append the card to the grid
        cardsGrid.appendChild(newsCard);
    });

    const profile = data.PublicProfile;

    // Populate text content
    document.getElementById('coreIdeologyTitle').textContent = profile.coreIdeology;
    document.getElementById('visionStatement').textContent = profile.visionStatement;
    document.getElementById('publicPerception').textContent = profile.publicPerception;
    document.getElementById('leadershipStyle').textContent = profile.leadershipStyle;

    // Populate focus areas
    const focusAreasContainer = document.getElementById('focusAreas');
    focusAreasContainer.innerHTML = '';
    profile.focusAreas.forEach(area => {
        const tag = document.createElement('span');
        tag.className = 'focus-tag';
        tag.textContent = area;
        focusAreasContainer.appendChild(tag);
    });

    // Populate key strengths
    const keyStrengthsContainer = document.getElementById('keyStrengths');
    keyStrengthsContainer.innerHTML = '';
    profile.keyStrengths.forEach(strength => {
        const tag = document.createElement('span');
        tag.className = 'strength-tag';
        tag.textContent = strength;
        keyStrengthsContainer.appendChild(tag);
    });





};

updatePoliticainData();