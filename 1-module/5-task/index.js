function truncate(str, maxlength) {
  return(str.length <= maxlength ? str : str.split("").splice(0, maxlength - 1).join("") + "…")
}
