const wellcomPage = document.querySelector(".wellcom-page");
const wellcomPageForm = document.querySelector(".wellcom-page__form");
const wellcomPageGreeting = document.querySelector(".wellcom-page__h1");
const userName = document.querySelector("#wellcom-page__username");

const HIDDEN = "hidden"
const USERNAME = "username"

function loginSubmit(event){
    event.preventDefault();
    const username = userName.value;
    localStorage.setItem(USERNAME, username);
    greeting(username);
}

function greeting(username){
    wellcomPageForm.classList.add(HIDDEN);
    wellcomPageGreeting.classList.remove(HIDDEN);
    wellcomPageGreeting.innerHTML = `HELLO ${username} </br> VON VOYAGE`
    wellcomPage.classList.add(HIDDEN);
}

const savedUserName = localStorage.getItem(USERNAME);

if(savedUserName === null){
    wellcomPageForm.classList.remove(HIDDEN);
    wellcomPageForm.addEventListener("submit",loginSubmit);
}
else{
    greeting(savedUserName);
}




