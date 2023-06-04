const dogButton = document.getElementById("dog-button");
const catButton = document.getElementById("cat-button");
const dogImage = document.getElementById("dog-image");
const catImage = document.getElementById("cat-image")

let dogData = null
async function getDogImage() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    dogData = await response.json();
    console.log(dogData)
    dogImage.setAttribute("src", dogData["message"])
    dogImage.setAttribute("alt", "Dog picture")
}

let catData = null;

async function getcatImage() {
    const response = await fetch("https://cataas.com/cat");
    catData = await response;
    console.log(catData)
    catImage.setAttribute("src", catData["url"])
    catImage.setAttribute("alt", "cat picture")
}

dogButton.addEventListener('click', () => {
    getDogImage();
    catImage.setAttribute("src", "")
    catImage.setAttribute("alt", "")
})

catButton.addEventListener('click', () => {
    getcatImage();
    dogImage.setAttribute("src", "")
    dogImage.setAttribute("alt", "")
})