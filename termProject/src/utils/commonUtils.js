const isUserLogged = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user : false;
}

export {
  isUserLogged,
};
