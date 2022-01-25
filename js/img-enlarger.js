var modal = document.getElementById("img-enlarger-modal");
var modalImg = document.getElementById("img-enlarger-img");

modal.onclick = function () {
    this.classList.remove("img-enlarger-model-shown");
}

document.querySelectorAll(".expandable").forEach(img => {
    img.onclick = function () {
        modal.classList.add("img-enlarger-model-shown");
        modalImg.src = this.src;
    }
});
