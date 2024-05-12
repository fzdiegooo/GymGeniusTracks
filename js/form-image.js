const imageForm = document.getElementById("img-form")
const btnCreateAccount = document.getElementById("btn-create-account")
const btnSignIn = document.getElementById("btn-sign-in") 
const inputs = document.querySelectorAll(".input-container input")
const containerRegister = document.getElementById("form-register")
const containerLogin = document.getElementById("form-login")
const btnExitContainer = document.getElementById("btn-exit-container")
const btnExit = document.getElementById("btn-exit")
const popUp = document.getElementById("pop-up-background");
const btnEntrar = document.getElementById("btn-entrar")

btnCreateAccount.addEventListener('click',()=>{
    containerRegister.classList.remove('animate-left-to-middle');
    containerLogin.classList.remove('animate-middle-to-right');
    containerLogin.classList.add('animate-right-to-middle');
    containerRegister.classList.add('animate-middle-to-left');
    imageForm.style.left = '400px'; 
    btnExit.style.color = "#fff";
    imageForm.style.transition = "all .4s ease-in-out"
    setTimeout(()=>{
        inputs.forEach(input =>{
            input.value=""
        })
    },"500")
});

btnSignIn.addEventListener('click',()=>{
    containerLogin.classList.remove('animate-right-to-middle');
    containerRegister.classList.remove('animate-middle-to-left');
    containerRegister.classList.add('animate-left-to-middle');
    containerLogin.classList.add('animate-middle-to-right');
    imageForm.style.left = '0'; 
    btnExit.style.color = "#111";
    imageForm.style.transition = "all .4s ease-in-out"
    setTimeout(()=>{
        inputs.forEach(input =>{
            input.value=""
        })
    },"500")
});

btnExitContainer.addEventListener("click", ()=>{
    containerRegister.classList.remove('animate-left-to-middle');
    containerLogin.classList.remove('animate-middle-to-right');
    containerLogin.classList.remove('animate-right-to-middle');
    containerRegister.classList.remove('animate-middle-to-left');
    popUp.style.display = "none";
})

btnEntrar.addEventListener("click", ()=>{
    popUp.style.display = "flex"
})
