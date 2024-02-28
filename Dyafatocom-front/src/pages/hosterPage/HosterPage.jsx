import React, { useEffect, useState } from 'react'
import Navbar from '../../components/hosterComponents/navBar/NavBar'
import OfferCard from '../../components/hosterComponents/offer-card/OfferCard'
import FilterComponent from '../../components/hosterComponents/filtre/FiltreComponent'
import { cities } from '../../contants'
import { services } from '../../contants'
import styles from "./HosterPage.module.css"
import Footer from '../../components/hosterComponents/footer/Footer'
import axios from 'axios'
function HosterPage() {
  const [selectedCity,setSelectedCity] = useState("");
  const [selectedService,setSelectedService] = useState("");
  const [offers,setOffers] = useState([]);
  const [profile,setProfile] = useState();
  const id = 2;
  const url1 = `http://localhost:8080/api/tourist/offers?city=${selectedCity}&service=${selectedService}`
  const url2 = `http://localhost:8080/api/tourist/${id}`
  
useEffect(()=>{
axios.get(url1)
.then((res) =>{
  setOffers(res.data)
  console.log(res);
})

axios.get(url2)
.then((res) =>{
  setProfile(res.data)
})

},[selectedCity,selectedService])


 const offer = {
  titre:"awesome housing",
  describtion:" something something something something something ",
  dateDebut:new Date(),
  maxDuration: 3,
  services:["food","sleep over","discover city"],
  prix:123,
  rating:6,
 }

 const handleFilter = (selectedCity, selectedService) =>{
  console.log("selectedCity : "+ selectedCity);
  console.log("selectedService : "+ selectedService);
  setSelectedCity(selectedCity);
  setSelectedService(selectedService);
 }

  return (
   <>
   <div className={styles.header}>
    <Navbar profile={profile}/>
   </div>
   <div className={styles.body}>
    <FilterComponent cities={cities} services={services} handleFilter={handleFilter}/>
    <div className={styles.offers}>
    {
      offers.length === 0 ?
      <h2>this service or city doent existe</h2>
      :
      offers.map((offer)=>(
        <OfferCard key={offer.id} offer={offer}/>
      ))
    }
     
    </div>
    <div className={styles.footer}>
      <Footer/>
    </div>
   </div>
   </>
  )
}

export default HosterPage