import axios from 'axios'


export const getAllCattle=()=>async(dispatch)=>{
  await axios.get("http://localhost:9898/api/cattle").then(res=>{
    console.log(res);
dispatch({})
  });
}