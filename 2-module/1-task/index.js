let salaries = {
  John: Infinity,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}
function sumSalary(salaries) {
  let sum = 0
  for (const key in salaries) {
    if (isNaN(salaries[key])) {
      continue
    }
    if (salaries[key] != Infinity && salaries[key] != -Infinity && typeof salaries[key] == "number") {
      sum += salaries[key]
    }
  }
  return sum
}


