function toggleText() {
  let hideText = document.querySelector("button")
  let text = document.getElementById("text")
  hideText.onclick = function () {
    text.hidden = text.hidden !== true;
  }
}
