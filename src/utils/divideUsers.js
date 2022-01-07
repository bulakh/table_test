export const getPageCount = (users, usersOnPage) => {
  return Math.ceil(users.length/usersOnPage)
}


export const divideUsers = (users, usersOnPage) => {
  users = users.slice();

  const dividedUsers = [];
  const pageCount = getPageCount(users, usersOnPage);

  for (let i=0; i<pageCount; ++i) {
    dividedUsers.push(users.slice(0, usersOnPage));
    users.splice(0, usersOnPage);
  }

  return dividedUsers;
}

