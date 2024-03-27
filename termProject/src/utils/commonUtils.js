const isUserLogged = () => {
  const user = localStorage.getItem("user");
  return user ? user : false;
}

export {
  isUserLogged,
};
