function makeFriendsList(friends) {
  let ul = document.createElement('ul')
  document.body.append(ul)
  for (let i = 0; i < friends.length; i++) {
    let li = document.createElement(`li`)
    li.textContent = `${friends[i].firstName} ${friends[i].lastName}`
    const ul = document.querySelector(`ul`)
    ul.append(li)
  }
  return document.body.appendChild(ul)
}
