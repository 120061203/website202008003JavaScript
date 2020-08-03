for (let i = 0; i < 3; i++) {
    function showBlack() {
        const _intro = document.getElementsByClassName("intro")[i];
        _intro.classList.remove("hide");
        _intro.removeEventListener('mouseover', showBlack);
        _intro.addEventListener("mouseout", showImg);
    }

    function showImg() {
        const _intro = document.getElementsByClassName("intro")[i];
        _intro.classList.add("hide");
        _intro.removeEventListener('mouseout', showImg);
        _intro.addEventListener("mouseover", showBlack);
    }
    const _img = document.getElementsByClassName("photo")[i];
    _img.addEventListener("mouseover", showBlack);
}