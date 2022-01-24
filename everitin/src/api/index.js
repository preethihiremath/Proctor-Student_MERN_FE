import axios from 'axios';

const url ='http://localhost:5000/posts';

const url2="http://localhost:5000/api/user";

const url_meet="http://localhost:5000/meet";

export const fetchPosts=()=>axios.get(url);
export const createPost=(newPost)=>axios.post(url,newPost);
export const updatePost=(id,updatedPost) =>axios.patch(`${url}/${id}`,updatedPost);
export const deletePost=(id)=>axios.delete(`${url}/${id}`);


export const fetchAllStudents=()=>axios.get(url2);

//Scheduled Meeting
export const fetchScheduledMeeting=()=>axios.get(url_meet);
export const createScheduledMeet=(newScheduledMeetings)=>axios.post(url_meet,newScheduledMeetings);

//Requests
