// const email = document.querySelector(".email")
// const name = document.querySelector(".name")
// const password = document.querySelector(".password")
// const error = document.querySelector(".error")
// const register = document.querySelector(".register")

// window.addEventListener("load", () => {
//     if(!localStorage.getItem("users")) {
//         localStorage.setItem("users", JSON.stringify([]))
//     }
// })

// register.addEventListener("click", (e) => {
//     e.preventDefault();
//     if(name.value !== "" && email.value !== "" && password.value !== "") {
//         const allUsers = JSON.parse(localStorage.getItem("users"))
//         localStorage.setItem("users", JSON.stringify(
//             {
//                 name:name.value,
//                 email:email.value,
//                 password:password.value
//             }
//         ))
//     }else{
//         error.innerHTML = "Все поля должны быть заполнены!"
//     }
// })


// localStorage.setItem("user", "Alex")
// const userName = localStorage.getItem("user")
// console.log(userName)
const name = document.querySelector(".name")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const error = document.querySelector(".error")
const register = document.querySelector(".register")

window.addEventListener("load", () => {
    if(!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]))
    }
})
const users = JSON.parse(localStorage.getItem("users"));
console.log("users")
register.addEventListener("click", (e) => {
    e.preventDefault();
    const isUser = !!users.find(item => item.email === email.value)
    console.log(isUser)

    if(name.value !== "" && email.value !== "" && password.value !== "") {
        if(isUser) {
            error.innerHTML = "Данный пользователь уже существует"
        } else {
            const allUsers = JSON.parse(localStorage.getItem("users"))
            localStorage.setItem("users", JSON.stringify(
                [
                    ...allUsers,
                    {  
                       name:name.value,
                       email:email.value,
                       password:password.value
                    }
                ]
            ))

            window.open("../auth.html", "_self")
        }
        name.value = ""
        email.value = ""
        password.value = ""
    }else {
        error.innerHTML = "Все поля должны быть заполнены!"
    }
})
window.addEventListener("load", () => {
    if(localStorage.getItem("access_token") === "true") {
        window.open("../index.html", "_self")
    }
})












