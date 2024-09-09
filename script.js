const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signb = document.querySelector(".stn")

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


signb.addEventListener("click", ()=>{
    event.preventDefault();
    console.log("sign in button clicked");
    window.location.href = "/Hospital/patientdash.html"
     
})


