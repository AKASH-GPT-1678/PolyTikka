fetch("newssection/newsheader.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;



        document.getElementById("btn1").addEventListener("click", () => {
            window.location.href = "signup.html";
        })
    });

fetch("newssection/newscategory.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-category").innerHTML = data;
    });


fetch("newssection/movies.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("movies-info").innerHTML = data;
    });

fetch("newssection/latest-news.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("latest-news").innerHTML = data;
    });

fetch("newssection/mostread.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("most-read").innerHTML = data;
    });