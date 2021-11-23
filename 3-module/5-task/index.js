function getMinMax(inputData) {
  let inputDataString = inputData.split(" ")
    .filter(el => +el)
    .map(el=>+el)
  return {
    min: Math.min(...inputDataString),
    max: Math.max(...inputDataString)
  }
}
