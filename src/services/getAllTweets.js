import axios from "axios";

export const getTweets = async () => {
  try {
    const response = await axios.get(
      "https://ai-agent-tawny.vercel.app/get-mytweets"
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
