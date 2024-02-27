
import './user.item.css'

function UserItem({username, status, lastmessage, date, image}) {
    return ( 
    <div className='user-item-container'>
        
        <div className="user-item-info">
            <div className="user-item-image"><img src={image} alt="" srcset="" /></div>
            <div>
                <div className="user-item-username">{username}</div>
                <div className="user-item-last-message">{lastmessage}</div>
            </div>
        </div>
        <div className="user-date-status">
            <div className='user-item-status'>{status}</div>
            <div className="user-item-date">{date}</div>
        </div>

    </div> );
}

export default UserItem;