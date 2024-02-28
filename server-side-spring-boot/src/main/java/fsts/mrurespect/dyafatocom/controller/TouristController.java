package fsts.mrurespect.dyafatocom.controller;

import fsts.mrurespect.dyafatocom.entity.Offer;
import fsts.mrurespect.dyafatocom.entity.Tourist;
import fsts.mrurespect.dyafatocom.service.OfferService;
import fsts.mrurespect.dyafatocom.service.TouristServive;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tourist")
@CrossOrigin
@AllArgsConstructor
public class TouristController {

    private final OfferService offerService;
    private final TouristServive touristServive;

    @GetMapping("/offers")
    public List<Offer> getOffersByServiceAndCity(
            @RequestParam(name = "service", defaultValue = "") String service,
            @RequestParam(name = "city", defaultValue = "") String city) {

        return offerService.getOffers(service, city);
    }
    @GetMapping("/{id}")
    public Tourist getTourist(@PathVariable Long id) {
        return touristServive.getUser(id); // returning the result
    }

}
