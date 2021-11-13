function ucFirst(str) {
  if (str) {
    return str[0].toUpperCase() + str.split("").splice(1, 5).join("")
  } else
    return ""
}
