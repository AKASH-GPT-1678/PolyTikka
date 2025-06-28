// const button = document.getElementById("button");
// button.addEventListener("click", () => {
//     window.location.href = "screenpage.html";
// });
const data = [
    { title: "Namaste", content: "Mumbra" },
    { title: "Breaking News", content: "Delhi sees record rain" },
    { title: "Update", content: "Stock market hits all-time high" },
    { title: "Alert", content: "Heavy traffic in Bandra" },
    { title: "Health", content: "New Yoga trend emerging" },
    { title: "Politics", content: "Election results tomorrow" },

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

document.getElementById("button").addEventListener("click", () => {
    populateContent(data);
});



document.addEventListener('DOMContentLoaded', function () {
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
})
