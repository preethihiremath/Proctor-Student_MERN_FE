import * as actionType from '../constants/actionTypes';

export default (meets=[],action)=>{
    switch(action.type){
        case actionType.ALL_SCHEDULE:
             return action.payload;
        case actionType.CREATE_SCHEDULE:
                return [...meets,action.payload];       
        default:
                return meets;
            }
}