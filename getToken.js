import { Buffer } from "buffer";

const consumerKey = import.meta.env.VITE_REACT_APP_CONSUMER_KEY;
const consumerSecret = import.meta.env.CONSUMER_SECRET;

export const generateAccessToken = async () => {
  let buf = new Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
    "base64"
  );

  // authentication string
  let auth = `Basic ${buf}`;
  try {
    const response = await fetch(
      "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        // mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: consumerKey + consumerSecret,
        },
        body: JSON.stringify({ cc: consumerKey, coss: consumerSecret }),
      }
    );
    const accessToken = await response.json();
    console.log(accessToken);
    return accessToken;
  } catch (error) {
    console.log({ err: error });
  }
};
