import axios from 'axios'

export const getAllCattles=async ()=>{
  return await axios.get(`${process.env.REACT_APP_API_URL}/api/cattle`)
  .then(response=>response)
  .catch(error=>{
    throw error;
  });
}