import { FETCH_ALL_STUDENTS} from '../constants/actionTypes';
import * as api from '../api/index.js';


export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllStudents();
    console.log("get Users Actions",data)     
    dispatch({ type: FETCH_ALL_STUDENTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};


