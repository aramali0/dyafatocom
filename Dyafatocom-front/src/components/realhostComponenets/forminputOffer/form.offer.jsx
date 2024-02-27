import './form.input.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function FormInputOffer() {
    const handleSubmition = ()=>{
        document.querySelector('.offer-input-home').classList.toggle('active')
    }
    return ( <div className="offer-container">
            <div className='sub-container-offer'>
                <form>
                    <label  for="titre">Titre</label>
                    <input className='offer-input' type="text" id="titre"  placeholder="A title ..."/>

                    <label for="desc">Description</label>
                    <input className='offer-input' type="text" id="desc" placeholder="Description ..."/>
                    
                    <label for="date-deb">Date debut</label>
                    <input className='offer-input' type="date" id="date-deb" placeholder="Description ..."/>
                    
                    <label for="date-fin">Date fin</label>
                    <input className='offer-input' type="date" id="date-fin" placeholder="Description ..."/>
                    
                    <label for="max-duration">Max duration</label>
                    <input className='offer-input' type="text" id="max-duration" placeholder="Description ..."/>
                    
                    <label for="services">Services</label>
                    <input className='offer-input' type="text" id="services" placeholder="Description ..."/>
                    <div onClick={handleSubmition} className='submit-btn'>Submit</div>
                </form>
            </div>
        </div>
     );
}

export default FormInputOffer;



