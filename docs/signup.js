const signUp = document.getElementById("signup-button");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const phoneNumber = document.getElementById("phone");




async function handleFormSubmit(name, email, password, phoneNumber) {
  try {
    const response = await fetch("https://polytikka-production.up.railway.app/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        contact: phoneNumber
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }

}


signUp.addEventListener("click", async () => {
  handleFormSubmit(nameInput.value, emailInput.value, passwordInput.value, phoneNumber.value);



})