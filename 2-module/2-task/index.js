function isEmpty(obj) {
  let count = 0
  for (const key in obj) {
    count += 1
  }
  return count === 0;
}
