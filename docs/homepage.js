// const button = document.getElementById("button");
// button.addEventListener("click", () => {
//     window.location.href = "politicians.html";
// });
const data = [
    {
        title: "Namaste",
        content: "Mumbra locals start their day peacefully. Streets are calm and shops are slowly opening for business."
    },
    {
        title: "Rainfall",
        content: "Delhi records its heaviest rain this year. Waterlogging affects traffic in major city zones."
    },
    {
        title: "Markets",
        content: "Stock market sees a new all-time high. Investors are optimistic about upcoming reforms."
    },
    {
        title: "Traffic",
        content: "Heavy congestion in Bandra this morning. Commuters face long delays during peak hours."
    },
    {
        title: "YogaNow",
        content: "A new yoga trend is taking off fast. Fitness lovers are joining local morning sessions."
    },
    {
        title: "Results",
        content: "Election results expected by tomorrow noon. Supporters gather in anticipation outside party offices."
    }
];



function populateContent(data) {
    for (let i = 0; i < data.length; i++) {
        const title = document.getElementById(`title${i}`);
        const content = document.getElementById(`content${i}`);

        if (title && content) {
            title.innerHTML = data[i].title;
            content.innerHTML = data[i].content;
        }
    }
}

// document.getElementById("button").addEventListener("click", () => {
//     populateContent(data);
// });



const politicianButton = document.getElementById("pol");
politicianButton.addEventListener("click", function () {
    window.location.href = "politicians.html";
}
)

const news = document.getElementById("news-page");
news.addEventListener("click", () => {
    window.location.href = "news.html";
})


document.addEventListener('DOMContentLoaded', function () {

    populateContent(data);
    const headlines = [
        "https://res.cloudinary.com/dffepahvl/image/upload/v1750468483/xg0l2hdmzggjdvyg3wor.jpg",
        "https://res.cloudinary.com/dffepahvl/image/upload/v1750109399/i5jhrcdg8ywmohmcybws.png",
        "https://res.cloudinary.com/dffepahvl/image/upload/v1750699353/mxgjxnlow8psctxamuo9.png"
    ];

    const image = document.getElementById("news");

    // Check if image element exists
    if (image) {
        console.log("Image element found, starting slideshow...");

        setInterval(() => {
            let index = Math.floor(Math.random() * headlines.length);
            console.log("Changing to image index:", index);
            image.src = headlines[index];
        }, 3000);
    } else {
        console.error("Image element with id 'news' not found!");
    }
});





async function collectTrendingNews() {
    try {
        const response = await fetch("http://localhost:3402/api/getTrendingNews");
        const data = await response.json();
        console.log(data);

        const template = document.querySelector(".news"); // This gets one element

        const container = document.getElementById("trending");

        for (let i = 0; i < 10; i++) {
            const clone = template.cloneNode(true);
            clone.className = "news";

            clone.style.display = "block";

            clone.querySelector("img").src = data[i].imageUrl;
            clone.querySelector(".description").textContent = data[i].title.substring(0, 50) + "...";
            clone.querySelector(".category").textContent = data[i].category;
            clone.querySelector("#content").textContent = data[i].content.substring(0, 100) + "...";
            clone.querySelector(".read").textContent = "5 Min Read";
            clone.querySelector

            container.appendChild(clone);
        }
    } catch (error) {
        console.error("Failed to fetch trending news:", error);
    }
};



collectTrendingNews();
const allNews = document.querySelectorAll(".news");
allNews.forEach(news => {
    news.addEventListener("click", () => {
        alert("clicked");
        window.location.href = "www.google.com";
    });
});



fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });


