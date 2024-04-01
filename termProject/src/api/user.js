const endpoint = "http://54.91.190.113:8080/api";

const signup = async(params) => {
  const {
    email,
    name,
    password,
  } = params;

  const body = {
    name,
    email,
    password,
  };

  const res = await fetch(`${endpoint}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(body),
  });

  if(res.status === 200) {
    return true;
  }
  return false;
};

const login = async(params) => {
  const {
    email,
    password,
  } = params;

  const body = {
    email,
    password,
  };

  let res = await fetch(`${endpoint}/login`, {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(body),
  });

  if(res.status === 200) {
    res = res.json();
    return res;
  }
  return false;
}

export {
  signup,
  login,
};