package fsts.mrurespect.dyafatocom.service;

import fsts.mrurespect.dyafatocom.Enums.City;
import fsts.mrurespect.dyafatocom.Enums.Service;
import fsts.mrurespect.dyafatocom.entity.Offer;

import java.util.List;

public interface OfferService {

    public List<Offer> getOffers(String service, String city);
}
