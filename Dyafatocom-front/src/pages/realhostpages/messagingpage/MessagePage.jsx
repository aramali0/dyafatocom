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
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
                <UserItem username="Otmane" lastmessage="Hi there .." status="online" date="16:20" />
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