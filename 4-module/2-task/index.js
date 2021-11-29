function makeDiagonalRed(table) {
  let element = document.querySelectorAll(`td`);
  for (let i = 0; i < element.length; i++) {
    if (i === 0 || i % 6 === 0) {
      element[i].style.backgroundColor = 'red'
    }
  }
}





