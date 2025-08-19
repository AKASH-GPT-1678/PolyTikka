    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    async function loginUserFrontend(email, password) {


    try {
        const response = await fetch(`https://polytikka-production.up.railway.app/api/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
        const result = await response.json();
        console.log(result);

        // Optionally show the result on the page
        alert(result.message);
    } catch (error) {
        console.log("Login request failed:", error);
        alert("Something went wrong");
    }
}


    // Example: Access values on form submit
    document.getElementById("submit-button").addEventListener("click", function (e) {
      e.preventDefault(); // prevent form from submitting

       loginUserFrontend(emailInput.value, passwordInput.value);
    });