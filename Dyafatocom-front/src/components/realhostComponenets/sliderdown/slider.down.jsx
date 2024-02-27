import './sliderdownmenu.css'
function SliderDownMenu() {
    return ( <>
        <div className="slidedown-card">
            <h3>Notifications (3)</h3>
            <hr />
            <div className="slidedown-card-item">
                <div className='image-wrapper'><img src="src/assets/notification.png" height={30} alt="" /></div>
                <div>
                    <div className="slidedown-card-title">You have a new order</div>
                    <div className="slidedown-card-description">Otmane veut une maison </div>
                    <div className="slidedown-card-date">3 months </div>
                </div>
                <hr />
            </div>
            <div className="slidedown-card-item">
            <div className='image-wrapper'><img src="src/assets/notification.png" height={30} alt="" /></div>
                <div>
                    <div className="slidedown-card-title">You have a new order</div>
                    <div className="slidedown-card-description">Otmane veut une maison </div>
                    <div className="slidedown-card-date">3 months </div>
                </div>
                
            </div>
            <div className="slidedown-card-item">
            <div className='image-wrapper'><img src="src/assets/notification.png" height={30} alt="" /></div>
                <div>
                    <div className="slidedown-card-title">You have a new order</div>
                    <div className="slidedown-card-description">Otmane veut une maison </div>
                    <div className="slidedown-card-date">3 months </div>
                </div>
                
            </div>
            
        </div>
    </> );
}

export default SliderDownMenu;