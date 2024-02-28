package fsts.mrurespect.dyafatocom.seviceImp;

import fsts.mrurespect.dyafatocom.Enums.City;
import fsts.mrurespect.dyafatocom.Enums.Service;
import fsts.mrurespect.dyafatocom.entity.Offer;
import fsts.mrurespect.dyafatocom.repository.OfferRepo;
import fsts.mrurespect.dyafatocom.service.OfferService;
import lombok.AllArgsConstructor;

import java.util.List;

@org.springframework.stereotype.Service
@AllArgsConstructor
public class OfferServiceImp implements OfferService {
    private final OfferRepo offerRepo;
    public List<Offer> getOffers(String service, String city) {
        Service serviceEnum = null;
        if (service != null && !service.isEmpty()) {
            try {
                serviceEnum = Service.valueOf(service.toUpperCase());
            } catch (IllegalArgumentException e) {
                // Handle the case where the provided value for service doesn't match any enum constant
                // If the provided value is not recognized, set serviceEnum to null
            }
        }

        City cityEnum = null;
        if (city != null && !city.isEmpty()) {
            try {
                cityEnum = City.valueOf(city.toUpperCase());
            } catch (IllegalArgumentException e) {
                // Handle the case where the provided value for city doesn't match any enum constant
                // If the provided value is not recognized, set cityEnum to null
            }
        }

        return offerRepo.findByServiceAndCityIgnoreCase(serviceEnum, cityEnum);
    }






}
