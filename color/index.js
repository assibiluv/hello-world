function changeColor() {
    let color = document.querySelector("#colorInputColor").value;
    document.body.style.backgroundColor = color;
    document.querySelector("#colorInputText").value = color;
}