const animeGif = document.getElementById("anime-gif");
const animeGifButton = document.getElementById("gif-button");
const actionSelect = document.getElementById("anime-action");

let action = "kiss";

let gifData = null;

async function getAnimeGif() {
    const response = await fetch(`https://api.otakugifs.xyz/gif?reaction=${action}`);
    gifData = await response.json()
    console.log(gifData["url"])
    animeGif.setAttribute("src", gifData["url"])
    animeGif.setAttribute("alt", "anime people")
}

actionSelect.addEventListener('change', () => {
    action = actionSelect.value;
    console.log(action);
    getAnimeGif();
})

animeGifButton.addEventListener('click', () => {
    getAnimeGif()
})