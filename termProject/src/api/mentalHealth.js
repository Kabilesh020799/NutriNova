import { isUserLogged } from "@/utils/commonUtils";
import { apiEndpoint } from "./constants";

const userLogged = isUserLogged();

const saveMentalHealth = async(params) => {
  const body = {
    ...params,
    user: userLogged,
  };

  const res = await fetch(`${apiEndpoint}/add-mental-health`, {
    method: 'POST',
    headers: {  "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if(res.status === 200) {
    return true;
  }
  return false;
};

const getAllMentalHealth = async() => {
  let res = await fetch(`${apiEndpoint}/mental-health?email=${userLogged}`, {
    method: 'GET',
    headers: {  "Content-Type": "application/json" },
  })
  if(res.status) {
    res = await res.json();
    return res?.map((resItem) => ({
      title: resItem.heading,
      content: resItem?.description,
      date: resItem?.date,
    }));
  }
  return false;
};

export {
  saveMentalHealth,
  getAllMentalHealth,
};
