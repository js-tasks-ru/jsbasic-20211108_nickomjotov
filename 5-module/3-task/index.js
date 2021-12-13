
function initCarousel() {
  let transform = document.querySelector(".carousel__inner")
  const start = transform.offsetWidth
  let trans = transform.offsetWidth
  let rightArrow = document.querySelector(".carousel__arrow_right")
  let leftArrow = document.querySelector(".carousel__arrow_left")
  leftArrow.style.display = 'none'
  leftArrow.addEventListener("click", (event) => {
    if (trans === start * (-1)) {
      leftArrow.style.display = 'none'
    }
    trans = trans + start
    transform.style.transform = `translateX(${trans}px)`
  })
  rightArrow.addEventListener("click", (event) => {
    leftArrow.style.display = ''
    if (trans === start) {
      trans = start * (-1)
    } else {
      trans = trans - start
    }
    if (trans === start * (-3)) {
      rightArrow.style.display = 'none'
    }
    transform.style.transform = `translateX(${trans}px)`
  })
}
