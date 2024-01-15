pwd = document.getElementById("pwd")
pwdc = document.getElementById("pwdc")
pwda = document.getElementById("pwdAlert")

pwda.style.visibility='hidden'

console.log(pwd)

pwd.addEventListener("input", () => {
    if (pwd.value != pwdc.value) {
        pwdc.setAttribute("style", "border: solid red 1px;")
        pwd.setAttribute("style", "border: solid red 1px;")
        pwda.style.visibility='visible'
    } else if (pwd.value == pwdc.value) {
        pwdc.setAttribute("style", "border:;")
        pwd.setAttribute("style", "border:;")
        pwda.style.visibility='hidden'
    }
})

pwdc.addEventListener("input", () => {
    if (pwd.value != pwdc.value) {
        pwdc.setAttribute("style", "border: solid red 1px;")
        pwd.setAttribute("style", "border: solid red 1px;")
        pwda.style.visibility='visible'
    } else if (pwd.value == pwdc.value) {
        pwdc.setAttribute("style", "border:;")
        pwd.setAttribute("style", "border:;")
        pwda.style.visibility='hidden'
    }
})


