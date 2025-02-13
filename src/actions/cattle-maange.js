export const getAllCattles = (response) => {
  return {
    type: 'GET_ALL_CATTLES',
    getAllCattlesResponse:response.data|| {},
    status:response.status
  }
}

/*export const getCattleById = (cattle) => {
  return {
    type: 'GET_CATTLE_BY_ID',
    payload: id,
  }
}*/
