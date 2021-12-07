function initCarousel() {
  let rightArrow = document.querySelector(".carousel__arrow_right")
  let leftArrow = document.querySelector(".carousel__arrow_left")
  let transform = document.querySelector(".carousel__inner")
  let trans = 0
  leftArrow.style.display = 'none'
  leftArrow.addEventListener("click", (event) => {
    trans = trans + 500
    if (trans === 0) {
      leftArrow.style.display = 'none'
    }
    transform.style.transform = `translateX(${trans}px)`
  })
  rightArrow.addEventListener("click", (event) => {
    leftArrow.style.display = ''
    trans = trans - 500
    if (trans === -1500) {
      rightArrow.style.display = 'none'
    }
    transform.style.transform = `translateX(${trans}px)`
  })
}
