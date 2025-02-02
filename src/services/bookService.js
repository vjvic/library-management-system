import axios from "axios";

//base url
const API_BASE_URL =
  "https://66e0f986c831c8811b536df0.mockapi.io/api/books/books";

// get all books
export const getAllBooks = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
