import FormInputOffer from '../../../components/realhostComponenets/forminputOffer/form.offer';
import ImageSlider from '../../../components/realhostComponenets/slider/image.slider';
import './home.css';

function HomePageTouriste() {
    const showForm = ()=>{
        document.querySelector('.offer-input-home').classList.toggle('active')
    }
    const isEmpty = false;
    return ( <>
        {
            !isEmpty ? 
            
            <div className="home-container-pre">
                <div className="left-container-pre">
                    <
                        ImageSlider
                        slides={[
                            {image :"src/assets/image1.jpg"},
                            {image :"src/assets/image2.jpg"},
                            {image :"src/assets/offer-image.jpg"},
                            {image :"src/assets/offer-image1.jpg"},
                            ]}
                    />
                </div>
                <div className="right-container-pre">
                    <div className="offer-title">Unforgettable Adventures Await! Join us now !</div>
                    <div className='offer-description'>Escape the ordinary and indulge in a truly exceptional family vacation at our exquisite home. We extend a warm invitation to families seeking a remarkable stay, where comfort, privacy, and cherished memories are guaranteed.</div>
                    <div className='offer-date-from'>
                        <p>From : </p> <input type="date" defaultValue={"2024-03-12"} />
                    </div>
                    <div className='offer-date-to'>
                        <p>To : </p> <input type="date" defaultValue={"2024-03-19"} />
                    </div>
                    <div className='offer-services'>
                        <p>Included : </p>
                    <ul className='offer-services-items'>
                        <li className='offer-service-item'>Sport</li>
                        <li className='offer-service-item'>Food</li>
                    </ul>
                </div>
                </div>
            </div>
            : <div className='add-new-offer'>
                <div className='image' onClick={showForm} ><img src="src/assets/plus.png" alt="" srcset="" /></div>
                <div className='info'>You have no offers try to add one !</div>
                <div className="offer-input-home">
                <FormInputOffer/>
                </div>
            </div>
        }
    </> );
}

export default HomePageTouriste;