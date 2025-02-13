const INIT_STATE = {
  isFetching:false,
  status:null,
  value:undefined
}
export const cattleManageReducer=(state=INIT_STATE,action)=>{
  switch (action.type) {
    case "GET_ALL_CATTLES":
      return {
        ...state,
        value: action.getAllCattlesResponse,
        status: action.status,
        isFetching:false
      }
    default:
      return state;
  }
}