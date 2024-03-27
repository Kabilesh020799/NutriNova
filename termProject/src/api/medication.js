import { isUserLogged } from "@/utils/commonUtils";

const endpoint = "http://localhost:8080/api";
const userLogged = isUserLogged();

const saveMedication = async(params) => {
  const {
    medication,
    time,
  } = params;

  const body = {
    name: medication,
    user: userLogged,
    time,
  };

  const res = await fetch(`${endpoint}/save-medication`, {
    method: 'POST',
    headers: {  "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if(res.status === 200) {
    return true;
  }
  return false;
};

const getAllMedication = async() => {
  let res = await fetch(`${endpoint}/get-medication/${userLogged}`, {
    method: 'POST',
    headers: {  "Content-Type": "application/json" },
  })
  if(res.status) {
    res = res.json();
    return res;
  }
  return false;
};

export {
  saveMedication,
  getAllMedication,
};
