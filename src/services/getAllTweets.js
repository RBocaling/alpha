import axios from "axios";

export const getListings = async () => {
  try {
    const response = await axios.get(
      "https://ai-agent-tawny.vercel.app/get-listings"
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
//tests
