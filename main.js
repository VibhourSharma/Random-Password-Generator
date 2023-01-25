const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", function () {
    createPassword();
})

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#+=!$%^)_(-";
    const passwordLength = 12;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1); //password += password + randomnumber
    }
    inputEl.value = password;
}

copyIconEl.addEventListener("click", function () {
    if (inputEl.value) {
        copyPassword(inputEl.value);
        alertContainerEl.classList.remove("active");

        setTimeout(function () {
            alertContainerEl.classList.add("active");
        }, 2000);
    }
})

function copyPassword(value) {
    // inputEl.select();
    inputEl.setSelectionRange(0, 9999); //for mobile phones
    navigator.clipboard.writeText(value);
    alertContainerEl.innerText = value + " copied!"
}
