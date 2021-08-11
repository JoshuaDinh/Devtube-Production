const CLIENT_ID =
  "1000714961087-2ull2c9faemgm689tgi3ja45voj481nf.apps.googleusercontent.com";
const redirectUri = "http://localhost:3000";
const scope = "https://www.googleapis.com/auth/youtube.force-ssl";

export const getTokenFromUrl = () => {
  const URL = window.location.href;
  const params = new URLSearchParams(URL);
  return params.get("access_token");
};
export const API_KEY = "AIzaSyDhH1Pv_8hlOVJr0dFrkngzaMLkU9JzXGE";

export const loginUrl = `
https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=${redirectUri}&client_id=${CLIENT_ID}`;
