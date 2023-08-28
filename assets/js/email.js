const validEmail = [];

let userEmail = document.querySelector(".email");

let verifyBtn = document.querySelector(".verify");

verifyBtn.addEventListener("click", function () {

    if (validEmail.includes(`${userEmail}`)) {
        const html = `L'indirizzo è valido!`;
        verifyBtn.insertAdjacentHTML("afterend", html);
    }

    else {
        const html = (`<div>L'indirizzo non è valido!</div>`);
        verifyBtn.insertAdjacentHTML("afterend", html);
    }
});