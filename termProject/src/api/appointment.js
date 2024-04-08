import { isUserLogged } from "@/utils/commonUtils";
import { apiEndpoint } from "./constants";

const userLogged = isUserLogged();

const saveAppointment = async(params) => {
  const {
    appointment,
    time,
  } = params;

  const body = {
    name: appointment,
    user: userLogged,
    time,
  };

  const res = await fetch(`${apiEndpoint}/set-appointment`, {
    method: 'POST',
    headers: {  "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if(res.status === 200) {
    return true;
  }
  return false;
};

const getAllAppointment = async() => {
  let res = await fetch(`${apiEndpoint}/appointment?email=${userLogged}`, {
    method: 'GET',
    headers: {  "Content-Type": "application/json" },
  })
  if(res.status) {
    res = await res.json();
    return res?.map((resItem) => ({ ...resItem,appointment: resItem?.name  }));
  }
  return false;
};

export {
  saveAppointment,
  getAllAppointment,
};
