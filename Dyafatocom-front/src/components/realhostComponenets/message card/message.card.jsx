import './message.card.css'

function MessageCard({message, date, isSend}) {
    return ( <>
        <div className="message-container">
            <div className={"second-message-container "  + (isSend ? "send" : "receive")}>
                <div className='message-text' >{message}</div>
                <div className="date">{date}</div>
            </div>
        </div>
    </> );
}

export default MessageCard;