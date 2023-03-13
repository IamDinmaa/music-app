import { config } from "dotenv";

config();
const base = "https://api.spotify.com/v1";
const baseAuth = "https://accounts.spotify.com";

const endPoint = {
  authorize: `${baseAuth}/authorize`,
  access_token: `${baseAuth}/api/token`,
  track: `${base}/tracks/${process.env.clientID}`,
};

export default endPoint;
