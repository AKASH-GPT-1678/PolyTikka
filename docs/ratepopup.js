let allStars = document.querySelectorAll(".star-icon");
let choosen = 0;
Array.from(allStars).forEach((star, index) => {
    star.addEventListener("mouseenter", () => {
        choosen = index;
        star.style.color = "yellow"
        allStars.forEach((item, subindex) => {
            if (subindex <= choosen) {
                item.style.color = "pink"

            } else {
                item.style.color = "black"
            }
        });

        document.getElementById("rating").innerHTML = choosen +1;

    });


});
