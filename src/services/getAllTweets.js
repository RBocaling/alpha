import axios from "axios";

export const getTweets = async () => {
  try {
    const response = await axios.get("http://localhost:3001/get-mytweets");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
