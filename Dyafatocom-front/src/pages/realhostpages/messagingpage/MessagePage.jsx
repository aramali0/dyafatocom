import MessageCard from '../../../components/realhostComponenets/message card/message.card';
import UserItem from '../../../components/realhostComponenets/useritem/user.item';
import './chats.css'
function MessagePage() {
    return ( <div className="chat-container">
        <div className="chat-left-side">
            <div className="search-chat">
                <input type="text" id="search-user" placeholder='Search ..' />
                <label htmlFor="search-user"><img src="src/assets/search.png" alt="" srcset="" /></label>
            </div>
            <div className="users-list">
                <UserItem username="Frank" lastmessage="Hi how are you" status="online" date="17:20" img="src/assets/profile.jpg" />
                <UserItem username="Jimy" lastmessage="Welcome" status="offline" date="11:23" img="src/assets/traveler1.jpg" />
                <UserItem username="John" lastmessage="Best regards" status="offilne" date="15:31" img="src/assets/traveler2.jpg" />
                <UserItem username="Pako" lastmessage="I have 3 childs" status="online" date="06:55" img="src/assets/traveler3.jpg" />
                <UserItem username="Walter" lastmessage="No probleme" status="online" date="19:20" img="src/assets/profile.jpg" />
            </div>
        </div>
        <div className="chat-right-side">
            <div className="conversation-header">
                <div className="image-profile"><img src="src/assets/profile.jpg" alt="" srcset="" /></div>
                <div className="user-name">Frank</div>
            </div>
            <div className="conversation-body">
                <div className="messages-list">
                    <MessageCard date="19:00" isSend={true} message="Welcome to our beautiful home!" />
                    <MessageCard  date="19:00" isSend={false} message="Thank you for having us! The journey was long but worth it. " />
                    
                </div>
                <div className="input-message-container">
                    <div className="message-input">
                        <input type="text" placeholder='New message ... ' />
                    </div>
                    <div className="send-input">Send</div>
                </div>
            </div>
        </div>
    </div> );
}

export default MessagePage;