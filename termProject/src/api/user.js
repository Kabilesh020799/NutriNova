import { apiEndpoint, apiGateway } from "./constants";

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

  const res = await fetch(`${apiEndpoint}/signup`, {
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

  let res = await fetch(`${apiEndpoint}/login`, {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(body),
  });

  if(res.status === 200) {
    res = await res.json();
    localStorage.setItem("topicArn", JSON.stringify(res.topicArn));

    return res;
  }
  return false;
}

const getLogo = async() => {
  const user = JSON.parse(localStorage.getItem("user"));

  let res = await fetch(`${apiEndpoint}/get-image`, {
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
    stateMachineArn: "arn:aws:states:us-east-1:339712989702:stateMachine:UploadS3StateMachine-OdiysWad3MF8",
    name: 'Execution' + new Date(),
    input: JSON.stringify({
      email,
      base64Image: image,
      filename: 'logo' + email + '.jpg'
    })
  }
  let res = await fetch(`${apiGateway}/upload-s3`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'no-cors',
    body: JSON.stringify(body)
  });
  res = res.json();
}

const createTopic = async(email, name) => {
  const body = {
    stateMachineArn: "arn:aws:states:us-east-1:339712989702:stateMachine:CreateTopicSNSStateMachine-y7UasFCrAbmY",
    name: `MyExecution-${Date.now()}`,
    input: JSON.stringify({
      email,
      name: "Reminder" + name,
    })
  };

  let res = await fetch(`${apiGateway}/create-topic-sns`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'no-cors',
    body: JSON.stringify(body)
  });
  res = await res.json();
};

const sendReminder = async(message) => {
  const topicArn = JSON.parse(localStorage.getItem('topicArn'));
  const body = {
    stateMachineArn: "arn:aws:states:us-east-1:339712989702:stateMachine:SendMsgSNSStateMachine-bGkUf4DZNchp",
    name: `MyExecution-${Date.now()}`,
    input: JSON.stringify({
      topicArn,
      message,
    })
  };

  let res = await fetch(`${apiGateway}/send-msg-sns`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'no-cors',
    body: JSON.stringify(body)
  })
};

export {
  signup,
  login,
  getLogo,
  uploadLogo,
  createTopic,
  sendReminder,
};