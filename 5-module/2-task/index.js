function toggleText() {
  let hideText = document.querySelector("button")
  hideText.onclick = function () {
    if (document.getElementById("text").hidden === true) {
      document.getElementById("text").hidden = false;
    } else {
      document.getElementById("text").hidden = true;
    }
  }
}


