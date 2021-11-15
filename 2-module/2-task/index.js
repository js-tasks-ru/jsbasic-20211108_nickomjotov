function isEmpty(obj) {
  let count = 0
  for (const key in obj) {
    count += 1
  }
  if (count === 0) {
    return true
  } else {
    return false
  }
}
