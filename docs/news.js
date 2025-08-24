let activeCatgory = "Business";


fetch("newssection/newsheader.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        // document.getElementById("btn1").addEventListener("click", () => {
        //     window.location.href = "signup.html";
        // });
    });


fetch("newssection/newscategory.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-category").innerHTML = data;

        const categoryItems = document.querySelectorAll('.categories p');
        categoryItems.forEach((item) => {
            item.addEventListener('click', () => {
                console.log('You clicked:', item.textContent);
                activeCatgory = item.textContent;
                const options = { weekday: 'long', day: 'numeric', month: 'long' };
                const today = new Date().toLocaleDateString('en-GB', options);
                document.getElementById('date-info').textContent = today;
                displayNews(activeCatgory);
            });
        });


        displayNews(activeCatgory);
        getMostRead(activeCatgory);
    });




async function getNewsByCategory(category) {
    try {
        const response = await fetch(`https://polytikka-production.up.railway.app/api/getByCategory/${category}`);
        const data = await response.json();
        console.log("Fetched Data:", data);
        return data;
    } catch (error) {
        console.error("Failed to fetch news by category:", error);
        return null;
    }
};


async function displayNews(activeCatgory) {
    const collectNews = await getNewsByCategory(activeCatgory);
    const template = document.getElementById('latest-news');
    const container = document.getElementById('latest-display');

    if (!template || !container) {
        alert("Template not found");
        return;
    }

    container.innerHTML = '';

    if (!collectNews || !collectNews.data || collectNews.data.length === 0) {
        container.innerHTML = `<p style="text-align:center; color: gray;">No news available for "${activeCatgory}".</p>`;
        return;
    };

    collectNews.data.forEach(news => {
        const clone = template.cloneNode(true);
        clone.style.display = "flex"; // Make it visible

        clone.querySelector(".news-meta").textContent = `${news.category} • ${news.date}`;
        clone.querySelector(".news-link").textContent = news.title;
        clone.querySelector(".news-link").href = news.url;
        clone.querySelector(".news-snippet").textContent = news.content + news.content + news.content;
        clone.querySelector(".read-more").textContent = "Read More";
        clone.querySelector(".read-more").href = "https://chatgpt.com/";
        clone.querySelector(".news-snippet").style.fontSize = "16px";

        container.appendChild(clone);
    });
}


setInterval(() => {
    console.log("Active Category:", activeCatgory);
}, 3000);

const mostRead = document.getElementById("most-read");

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
        url.searchParams.append("limit", limit);
        if (category) url.searchParams.append("category", category);

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Status ${response.status}`);

        const result = await response.json();
        const topNews = result.data;

        // Reset container with heading
        container.innerHTML = '<h2>Most Read</h2>';

        if (!topNews || topNews.length === 0) {
            container.innerHTML += `<p style="text-align:center; color: gray;">No top reads for "${category}".</p>`;
            return;
        }

        topNews.forEach(news => {
            const clone = template.cloneNode(true);
            clone.style.display = "flex";

            // Format date from ISO to readable (e.g., July 27, 2025)
            const date = new Date(news.publishedAt);
            const formattedDate = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            // Inject data
            clone.querySelector(".most-read-category").textContent = news.category;
            clone.querySelector(".most-read-date").textContent = formattedDate;
            clone.querySelector(".most-read-title").textContent = news.content;
            clone.querySelector(".most-read-title").href = news.url;
            clone.querySelector(".most-read-image").src = news.imageUrl || "https://via.placeholder.com/100";

            container.appendChild(clone);
        });

    } catch (error) {
        console.error("Error loading most read:", error);
        alert("Could not load top news.");
    }
};

function populateMovieBlock(videoUrl, headline, description, readMoreUrl) {
    const videoIframe = document.querySelector(".movie-video");
    const headlineEl = document.querySelector(".movie-headline");
    const descriptionEl = document.querySelector(".movie-description");
    const readMoreLink = document.querySelector(".movie-readmore");

    if (videoIframe) videoIframe.src = videoUrl;
    if (headlineEl) headlineEl.textContent = headline;
    if (descriptionEl) descriptionEl.textContent = description;
    if (readMoreLink) readMoreLink.href = readMoreUrl;
};


async function loadBottomNews() {
    const endpoint = 'https://polytikka-production.up.railway.app/api/topReads';
    const limit = 10;
    const container = document.getElementById("movie-section-container");
    const template = document.getElementById("most-read-template");

    if (!template || !container) {
        console.warn("Template or container not found for Most Read section.");
        return;
    }

    try {
        const url = new URL(endpoint);
        url.searchParams.append("limit", limit);
        url.searchParams.append("category", "Business");

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Status ${response.status}`);

        const result = await response.json();
        const topNews = result.data;
        console.log("Mai naach raha hoon")

   

        if (!topNews || topNews.length === 0) {
            container.innerHTML += `<p style="text-align:center; color: gray;">No top reads for "${category}".</p>`;
            return;
        }

        topNews.forEach(news => {
            const clone = template.cloneNode(true);
            clone.style.display = "flex";

            const date = new Date(news.publishedAt);
            const formattedDate = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            // Inject data
            clone.querySelector(".most-read-category").textContent = news.category;
            clone.querySelector(".most-read-date").textContent = formattedDate;
            clone.querySelector(".most-read-title").textContent = news.content;
            clone.querySelector(".most-read-title").href = news.url;
            clone.querySelector(".most-read-image").src = news.imageUrl || "https://via.placeholder.com/100";

            container.appendChild(clone);
        });

    } catch (error) {
        console.error("Error loading most read:", error);
        alert("Could not load top news.");
    }

}

function checkScreenSize() {
    if (window.innerWidth < 800) {
        loadBottomNews();
    }
}
checkScreenSize();

// run again if user resizes
window.addEventListener("resize", checkScreenSize);


loadMovieNews();

