import React, { useState } from 'react';
import styles from './FilterComponent.module.css'; 

const FilterComponent = ({ cities, services, handleFilter }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleSearch = () => {
    handleFilter(selectedCity, selectedService);
  };

  return (
    <div className={styles.filterContainer}>
      <label className={styles.label} htmlFor="city">Select City:</label>
      <select className={styles.select} id="city" value={selectedCity} onChange={handleCityChange}>
        <option value="">All</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <label className={styles.label} htmlFor={styles.service}>Select Service:</label>
      <select className={styles.select} id="service" value={selectedService} onChange={handleServiceChange}>
        <option value="">All</option>
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      <button className={styles.searchButton} onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FilterComponent;
