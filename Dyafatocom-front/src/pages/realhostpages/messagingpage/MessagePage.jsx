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
                <UserItem image="src/assets/profile.jpg" username="Otmane" lastmessage="Hi there " status="online" date="17:20" />
                <UserItem image="src/assets/profile.jpg" username="Salah" lastmessage="How are you" status="online" date="09:20" />
                <UserItem image="src/assets/profile.jpg" username="Driss" lastmessage="Welcome !" status="offline" date="06:34" />
                <UserItem image="src/assets/profile.jpg" username="Mohamed Fadili" lastmessage="Jib l khobz" status="online" date="17:22" />
                <UserItem image="src/assets/profile.jpg" username="Aramali" lastmessage="Cv bikher" status="away" date="19:29" />
                <UserItem image="src/assets/profile.jpg" username="Soufiane" lastmessage="chat service" status="online" date="12:00" />
                
            </div>
        </div>
        <div className="chat-right-side">
            <div className="conversation-header">
                <div className="image-profile"><img src="src/assets/logo.png" alt="" srcset="" /></div>
                <div className="user-name">Otmane</div>
            </div>
            <div className="conversation-body">
                <div className="messages-list">
                    <MessageCard  date="19:00" isSend={false} message="Hi How are you!" />
                    <MessageCard date="19:00" isSend={true} message="Hi How are you!" />
                    <MessageCard date="17:20" isSend={false} message="  youjs siuas saiusa !" />
                    <MessageCard date="18:11" isSend={false} message="Hi How are youjs siuas saiusa !" />
                    <MessageCard date="14:20" isSend={true} message="Hi How are youjs siuas saiusa !" />
                    <MessageCard date="12:17" isSend={true} message="Hi How are youjs siuas saiusa How are " />
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