showSalary = (data, age) => data.filter(el => el.age <= age).map(el => el.name + ", " + el.balance).join("\n")
