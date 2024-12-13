import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.3.29:3333",
  //baseURL: "http://10.128.160.164:3333",
  //baseURL: "http://localhost:3333",
  //baseURL: process.env.API_URL,
  timeout: 700,
});

/*
The following packages should be updated for best compatibility with the installed expo version:
  expo@52.0.17 - expected version: ~52.0.18
  expo-splash-screen@0.29.16 - expected version: ~0.29.18
  expo-system-ui@4.0.5 - expected version: ~4.0.6
  react-native@0.76.3 - expected version: 0.76.5
Your project may not work correctly until you install the expected versions of the packages.
*/
