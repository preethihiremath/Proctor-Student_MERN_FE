import {ALL_SCHEDULE,CREATE_SCHEDULE} from '../constants/actionTypes';
import * as api from '../api/index.js';

//Action Creators
export const getScheduledMeet = () => async (dispatch) => {
  try {
    const { data } = await api.fetchScheduledMeeting();
    dispatch({ type: ALL_SCHEDULE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createScheduledMeet=(newScheduledMeetings)=> async(dispatch)=>{
    try {
        const {data} =await api.createScheduledMeet(newScheduledMeetings);
        dispatch({ type: CREATE_SCHEDULE,payload: data});
    } catch (error) {
        console.log(error);
    }
}

