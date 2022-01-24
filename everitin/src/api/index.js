import axios from 'axios';

const url ='https://proctor-student.herokuapp.com/posts';

const url2="https://proctor-student.herokuapp.com/api/user";

const url_meet="https://proctor-student.herokuapp.com/meet";

export const fetchPosts=()=>axios.get(url);
export const createPost=(newPost)=>axios.post(url,newPost);
export const updatePost=(id,updatedPost) =>axios.patch(`${url}/${id}`,updatedPost);
export const deletePost=(id)=>axios.delete(`${url}/${id}`);


export const fetchAllStudents=()=>axios.get(url2);

//Scheduled Meeting
export const fetchScheduledMeeting=()=>axios.get(url_meet);
export const createScheduledMeet=(newScheduledMeetings)=>axios.post(url_meet,newScheduledMeetings);

//Requests
