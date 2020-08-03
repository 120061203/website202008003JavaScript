function imgChange() {
    const showImg = event.currentTarget;
    showImg.removeEventListener('click', imgChange);

    const firstPhoto = document.querySelector(".firstPhoto");
    const secondPhoto = document.querySelector(".secondPhoto");

    firstPhoto.classList.add("hide");
    secondPhoto.classList.remove("hide");

}
const imgNeedToChange = document.querySelector(".firstPhoto img");
imgNeedToChange.addEventListener('click', imgChange);