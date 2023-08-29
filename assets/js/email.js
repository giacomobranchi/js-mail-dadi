const validEmail = ["ex1@mail.com", "ex2@mail.com", "ex3@mail.com", "ex4@mail.com",];

let userEmail = document.querySelector(".email");

let verifyBtn = document.querySelector(".verify");


verifyBtn.addEventListener("click", function () {
    let check = false;

    console.log(validEmail.length)

    for (let i = 0; i < validEmail.length; i++) {

        console.log(validEmail[i])

        console.log(userEmail.value)

        if (validEmail[i] === userEmail.value) {
            check = true
        }


    }

    if (check) {
        const html = (`<div>L'indirizzo è valido!</div>`);
        verifyBtn.insertAdjacentHTML("afterend", html);
    } else {
        const html = (`<div>L'indirizzo non è valido!</div>`);
        verifyBtn.insertAdjacentHTML("afterend", html);
    }
});



/*else {
            const html = (`<div>L'indirizzo non è valido!</div>`);
            verifyBtn.insertAdjacentHTML("afterend", html);
        }*/