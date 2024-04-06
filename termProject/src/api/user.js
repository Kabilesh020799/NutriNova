const endpoint = "http://44.195.124.91:8080/api";
// const endpoint = "http://localhost:8080/api";

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

const getLogo = async() => {
  const user = JSON.parse(localStorage.getItem("user"));

  let res = await fetch(`${endpoint}/get-image`, {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({ email: user })
  });

  if(res.status === 200) {
    res = await res.json();
    return res;
  } else {
    return "image does not exit";
  }
};

const uploadLogo = async(image) => {
  const email = JSON.parse(localStorage.getItem("user"));

  const body = {
    name: 'Execution' + new Date(),
    input: JSON.stringify({
      email,
      base64Image: image,
      filename: 'logo' + email + '.jpg'
    })
  }
  let res = await fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  res = res.json();
  console.log(res);
}

export {
  signup,
  login,
  getLogo,
  uploadLogo,
};