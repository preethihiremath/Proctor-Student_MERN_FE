import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Announcement from './Announcement/Announcement'
import MeetingRequests from './Meeting/MeetingRequests'
import TeacherProfile from './TeacherProfile/TeacherProfile'
import NavBar from './Navbar'
import StudentAnnouncement from './StudentAnnouncement/StudentHome'
import StudentMeeting from './StudentMeeting/StudentMeeting'
import StudentProfile from './StudentProfile/StudentProfile'
import Home from './Home'
import StudentAcademic from './StudentAcademic/StudentAcademic'
import TeacherStudentList from './TeacherStudentList/TeacherStudentList'
function MainComponent() {
    return (
        <div className="Main">
           
            <Router>
            <NavBar />
                <Routes>
                <Route path="/"  element={<Home />} />
                    <Route path="/teacherannouncement"  element={<Announcement />} />
                    <Route path="/meeting" element={<MeetingRequests />}  />
                    <Route path="/students" element={<TeacherStudentList />}  />
                    <Route path="/academic" element={<StudentAcademic />}  />
                    <Route path="/teacherprofile" element={<TeacherProfile />}  />
                    <Route path="/studentannouncement" element={<StudentAnnouncement />}  />
                    <Route path="/request" element={<StudentMeeting />}  />
                    <Route path="/studentprofile" element={<StudentProfile />}  />
                </Routes>
            </Router>
        </div>
    )
}

export default MainComponent