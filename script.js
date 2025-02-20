let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function() {
    nameInput.style.display = "none";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

signUp.onclick = function() {
    nameInput.style.display = "flex";
    title.innerHTML = "Register";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}

signIn.onclick = function() {
    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let password = document.querySelector("input[type='password']").value;

    if (name === "Alex" && email === "alexrubiovelade@gmail.coom" && password === "123") {
        alert("WELCOME");
    } else {
        alert("WRONG");
    }
};
