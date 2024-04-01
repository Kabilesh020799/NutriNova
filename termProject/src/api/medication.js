import { isUserLogged } from "@/utils/commonUtils";

const endpoint = "http://54.91.190.113:8080/api";
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
  let res = await fetch(`${endpoint}/get-medication?email=${userLogged}`, {
    method: 'GET',
    headers: {  "Content-Type": "application/json" },
  })
  if(res.status) {
    res = await res.json();
    return res?.map((resItem) => ({ ...resItem,medication: resItem?.name  }));
  }
  return false;
};

export {
  saveMedication,
  getAllMedication,
};
