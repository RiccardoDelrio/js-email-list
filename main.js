const containerEl = document.querySelector(".container")

for (let i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => response.json())
        .then(data => {

            const email = data.response
            containerEl.innerHTML += `<div>${email}</div>`


        })
}

