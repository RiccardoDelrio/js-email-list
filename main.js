const containerEl = document.querySelector(".container")
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(data => {
        const email = data.response
        containerEl.innerHTML = email
    })
