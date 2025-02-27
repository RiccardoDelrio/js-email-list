/* const containerEl = document.querySelector(".container")
 */
const emailEl = document.querySelector(".email-list")
for (let i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => response.json())
        .then(data => {

            const email = data.response
            emailEl.innerHTML += `<li class="list-group-item">${email}</li>`


        })
}

