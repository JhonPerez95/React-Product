import axios from 'axios';

const baseUrl = process.env.REACT_APP_API;

export const getProduct = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/products`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
