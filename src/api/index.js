import axios from "axios";
import { baseUrl, apiKey } from "../constans";

export const getUkNews = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/uk-news?api-key=${apiKey}`);
    if (data?.response?.status === "ok") {
      return data?.response?.results;
    }
  } catch (e) {
    console.log(e);
  }
};
export const getTravel = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/travel?api-key=${apiKey}`);
    if (data?.response?.status === "ok") {
      return data?.response?.results;
    }
  } catch (e) {
    console.log(e);
  }
};
export const getFootball = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/football?api-key=${apiKey}`);
    if (data?.response?.status === "ok") {
      return data?.response?.results;
    }
  } catch (e) {
    console.log(e);
  }
};
