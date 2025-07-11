// const ratings = document.getElementById("rate-neta");
// fetch('ratepopup.html')
//     .then(response => response.text())
//     .then(data => {
//         const newDiv = document.createElement("div");
//         newDiv.innerHTML = data;
//         ratings.appendChild(newDiv);
//         let allStars = newDiv.querySelectorAll(".star-icon");
//         let choosen = 0;
//         Array.from(allStars).forEach((star, index) => {
//             star.addEventListener("mouseenter", () => {
//                 choosen = index;
//                 star.style.color = "yellow"
//                 allStars.forEach((item, subindex) => {
//                     if (subindex <= choosen) {
//                         item.style.color = "pink"

//                     } else {
//                         item.style.color = "black"
//                     }
//                 });

//                 document.getElementById("rating").innerHTML = choosen + 1;
//                 document.getElementById("make-rate").addEventListener("click" , 
//                     submitRating(choosen + 1)
//                 )

//             });


//         });

//     });




const submitRating = async (rating) => {
    try {
        const response = await fetch(`http://localhost:3402/api/ratePoliticians/${rating}`);
        const data = await response.json();
        console.log(data);
        return data;
        
    } catch (error) {
        console.log(error);
        
    }

}