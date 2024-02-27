package fsts.mrurespect.dyafatocom.controller;

import fsts.mrurespect.dyafatocom.Enums.City;
import fsts.mrurespect.dyafatocom.Enums.Service;
import fsts.mrurespect.dyafatocom.entity.Offer;
import fsts.mrurespect.dyafatocom.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tourist")
@CrossOrigin
public class TouristController {

    private final OfferService offerService;

    @Autowired
    public TouristController(OfferService offerService) {
        this.offerService = offerService;
    }

    @GetMapping("/offers")
    public List<Offer> getOffersByServiceAndCity(
            @RequestParam(name = "service", defaultValue = "") String service,
            @RequestParam(name = "city", defaultValue = "") String city) {
        System.out.println(offerService.getOffers(service, city));
        return offerService.getOffers(service, city);
    }

}
