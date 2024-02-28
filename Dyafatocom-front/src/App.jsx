import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Main Page changes/Home/Home'
import Login from './components/Main Page changes/login/Login'
import LoginTest from './components/Main Page changes/LoginTest/LoginTest'
import HomePageTouriste from './pages/realhostpages/homepage/home.page'
import HosterPage from './pages/hosterPage/HosterPage'
import AppTouriste from './pages/realhostpages/AppTouriste'
import Layout from './pages/realhostpages/layoutpage/layout.page'
import MessagePage from './pages/realhostpages/messagingpage/MessagePage'
import NotificationPage from './pages/realhostpages/notificationpage/notifications.page'
import ProfilePage from './pages/realhostpages/profilepage/profile.page'



function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/loginLocal" element={<Login/>}/>
            <Route path="/loginTourist" element={<LoginTest/>} />
            <Route path="/touristePage" element={<HosterPage/>} />
            <Route path="/othmane" element={<Layout />}>
              <Route index element={<HomePageTouriste />} />
              <Route path="messages" element={<MessagePage />} />
              <Route path="notifications" element={<NotificationPage />} />
              <Route path="profile" element={<ProfilePage />} />
        </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
