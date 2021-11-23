function camelize(str) {
  let tempArray = str.split("")
  for (let i = 0; i < tempArray.length - 1; i++) {
    if (tempArray[i] === '-') {
      tempArray[i + 1] = tempArray[i + 1].toUpperCase()
    }
  }
  return tempArray.filter(temp => temp !== '-').join("")
}
