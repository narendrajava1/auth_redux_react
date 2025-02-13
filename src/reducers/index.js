import { combineReducers } from 'redux'
import { authReducer } from './authReducer';
import { cattleManageReducer } from './cattle-manage-reducer';

const rootReducers=combineReducers({
  // auth:authReducer
  cattleManage:cattleManageReducer
});
/*const rootReducers = combineReducers({
  employees: employeeReducer,
    export default combineReducers({
    registerReducer,
    loginReducer
  });
  Remember that this syntax:

  {
    registerReducer,
    loginReducer
  }
  is equivalent to this:

  {
    registerReducer: registerReducer,
    loginReducer: loginReducer
  }
})*/
export default rootReducers;
