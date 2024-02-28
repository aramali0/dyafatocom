import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessagePage from "./messagingpage/MessagePage";
import HomePageTouriste from "./homepage/home.page";
import Layout from "./layoutpage/layout.page";
import NotificationPage from "./notificationpage/notifications.page";
import ProfilePage from "./profilepage/profile.page";


function AppTouriste() {
    return ( 
        
        <Route path="/othmane" element={<Layout />}>
          <Route index element={<HomePageTouriste />} />
          <Route path="messages" element={<MessagePage />} />
          <Route path="notifications" element={<NotificationPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
     );
}

export default AppTouriste;