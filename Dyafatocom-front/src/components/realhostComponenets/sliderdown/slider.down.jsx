import './sliderdownmenu.css'
function SliderDownMenu() {
    return ( <>
        <div className="slidedown-card">
            <h3>Notifications (2)</h3>
            <hr />
            <div className="slidedown-card-item">
                <div className='image-wrapper'><img src="src/assets/notification.png" height={30} alt="" /></div>
                <div>
                    <div className="slidedown-card-title">New Request</div>
                    <div className="slidedown-card-description">You have received a new booking request from a family looking to stay at your home </div>
                    <div className="slidedown-card-date">2 hours </div>
                </div>
                <hr />
            </div>
            <div className="slidedown-card-item">
            <div className='image-wrapper'><img src="src/assets/notification.png" height={30} alt="" /></div>
                <div>
                    <div className="slidedown-card-title">Positive Guest Review</div>
                    <div className="slidedown-card-description">Congratulations! A guest has left a glowing review of their recent stay at your home.</div>
                    <div className="slidedown-card-date">2 weeks </div>
                </div>
                
            </div>
            {/* <div className="slidedown-card-item">
            <div className='image-wrapper'><img src="src/assets/notification.png" height={30} alt="" /></div>
                <div>
                    <div className="slidedown-card-title">You have a new order</div>
                    <div className="slidedown-card-description">Otmane veut une maison </div>
                    <div className="slidedown-card-date">3 months </div>
                </div>
                
            </div> */}
            
        </div>
    </> );
}

export default SliderDownMenu;