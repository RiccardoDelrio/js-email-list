
const images = [
    {
        image: 'assets/img/dadi.png',

    },
    {
        image: 'assets/img/email.png',

    }]


const imageContainerEl = document.querySelector(".imageContainer")
console.log(imageContainerEl);
const nextEl = document.querySelector(".next")
const prevEl = document.querySelector(".prev")
const autoEl = document.querySelector(".auto")
const stopEl = document.querySelector(".stop")
const thumbnailsEl = document.querySelector(".thumbnails")
//declare counter and auto(variable for set interval)
let counter = 0
let auto
//create a markup Function
addMarkup(images)

nextEl.addEventListener("click", () => {
    play()

})
prevEl.addEventListener("click", () => {
    preview()
})

autoEl.addEventListener("click", () => {
    auto = setInterval(play, 3000)
})
stopEl.addEventListener("click", () => {
    clearInterval(auto)
})

//funcion

//add markup in page
function addMarkup(arr) {
    for (let i = 1; i < arr.length; i++) {
        imageContainerEl.insertAdjacentHTML('beforeend', `<img src="${arr[i].image}" alt="">`)

    }

}

//remove and add class "active"
const play = () => {
    imageContainerEl.children[counter].classList.remove("active")
    counter++
    if (counter >= images.length) {
        counter = 0
    }
    imageContainerEl.children[counter].classList.add("active")

}
const preview = () => {
    imageContainerEl.children[counter].classList.remove("active")
    counter--
    if (counter <= 0) {
        counter = images.length - 1
    }

    imageContainerEl.children[counter].classList.add("active")
}

