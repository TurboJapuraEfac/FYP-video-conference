const fetch = require("node-fetch");

const API_KEY = "exhibitit_default_secret";
// change this after the deployment
const EXHIBITIT_URL = "https://exhibitit.up.railway.app/api/v1/meeting";

function getResponse() {
  return fetch(EXHIBITIT_URL, {
    method: "POST",
    headers: {
      authorization: API_KEY,
      "Content-Type": "application/json",
    },
  });
}

getResponse().then(async (res) => {
  console.log("Status code:", res.status);
  const data = await res.json();
  console.log("meeting:", data.meeting);
});
