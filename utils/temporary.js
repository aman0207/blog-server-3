// [DUMMY FUNCTION]
// returns the tags that can be applied to an article.
export function getListOfTags() {
  return ["Important", "Technology", "Fiction", "Life", "Exclusive", "Author"];
}

// [DUMMY FUNCTION]
// mocking a user login session, whose username is being used.
export function getAuthorName() {
  const userLoggedIn = true;

  if (userLoggedIn) return "Aman";
  else return "Guest";
}

// [DUMMY FUNCTION]
// enables or disables the 'author' field depending on...
// whether a user is logged in or not.
export function ifNoLogin() {
  const activeUser = getAuthorName();
  return activeUser === "Guest" ? false : true;
}
