import { sortType } from "../const";


export const sortUsers = (sortedUsers, sort, defaultUsers) => {

  switch (sort) {
    case sortType.FIRST_NAME:
      return sortedUsers.sort((a, b) => (a.name.firstName > b.name.firstName ? 1 : -1));
    case sortType.LAST_NAME:
      return sortedUsers.sort((a, b) => (a.name.lastName > b.name.lastName ? 1 : -1));
    case sortType.ABOUT:
      return sortedUsers.sort((a, b) => (a.about > b.about ? 1 : -1));
    case sortType.EYE_COLOR:
      return sortedUsers.sort((a, b) => (a.eyeColor > b.eyeColor ? 1 : -1));
    default:
      return defaultUsers;
  }
}
