function showSalary(data, age = 30) {
  let res = []
  for (let i = 0; i < data.length; i++) {
    if (data[i].age <= age) {
      res.push(data[i].name + ", ")
      res.push(data[i].balance)
      res.push("\n")
    }
  }
  res.pop()
  return res.join("")
}
