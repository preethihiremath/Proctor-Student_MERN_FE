import * as actionType from '../constants/actionTypes';
export default (users=[],action)=>{
  switch(action.type){
      case actionType.FETCH_ALL_STUDENTS:
           return action.payload;  
      default:
              return users;
          }
  }