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
    stateMachineArn: "arn:aws:states:us-east-1:339712989702:stateMachine:MyStateMachine-886e15yu3",
    name: 'Execution' + new Date(),
    input: JSON.stringify({
      email,
      base64Image: image,
      filename: 'logo' + email + '.jpg'
    })
  }
  let res = await fetch('https://ufmz3o7fdb.execute-api.us-east-1.amazonaws.com/dev/upload-logo', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials' : true,
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