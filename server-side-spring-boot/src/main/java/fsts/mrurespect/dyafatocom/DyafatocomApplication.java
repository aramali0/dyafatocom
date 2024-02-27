package fsts.mrurespect.dyafatocom;

import fsts.mrurespect.dyafatocom.Enums.City;
import fsts.mrurespect.dyafatocom.Enums.Service;
import fsts.mrurespect.dyafatocom.Enums.Sexe;
import fsts.mrurespect.dyafatocom.entity.Host;
import fsts.mrurespect.dyafatocom.entity.Offer;
import fsts.mrurespect.dyafatocom.entity.Tourist;
import fsts.mrurespect.dyafatocom.repository.HostRepo;
import fsts.mrurespect.dyafatocom.repository.OfferRepo;
import fsts.mrurespect.dyafatocom.repository.TouristRepo;
import fsts.mrurespect.dyafatocom.repository.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.Date;

@SpringBootApplication
@AllArgsConstructor
public class DyafatocomApplication implements Runnable{
    public static void main(String[] args) {
        SpringApplication.run(DyafatocomApplication.class, args);
        System.out.println("why are you gay ?");
    }


    private final UserRepo userRepo;
    private final HostRepo hostRepo;
    private final TouristRepo touristRepo;
    private final OfferRepo offerRepo;

    @Override
    public void run() {

        Tourist tourist = new Tourist();
        tourist.setId(1L);
        tourist.setCountry("morrocco");
        tourist.setAge(21);
        tourist.setNom("simo");
        tourist.setEmail("simo@gmail.com");

        Host host = new Host("simo","simo","087",Sexe.MEN,23,"simo@gmail.com",new ArrayList<>(),1L,"0987hh","ana kkkk",new ArrayList<>(),new ArrayList<>(),4);

        hostRepo.save(host);
        Offer offer1 = new Offer("great offer",new Date(),4, Service.DISCOVER_CITY, City.CASABLANCA,host);
        Offer offer2 = new Offer("great offer",new Date(),4, Service.DISCOVER_CITY, City.CASABLANCA,host);
        Offer offer3 = new Offer("great offer",new Date(),4, Service.DISCOVER_CITY, City.CASABLANCA,host);
        Offer offer4 = new Offer("great offer",new Date(),4, Service.DISCOVER_CITY, City.CASABLANCA,host);
        Offer offer5 = new Offer("great offer",new Date(),4, Service.DISCOVER_CITY, City.CASABLANCA,host);
        Offer offer6 = new Offer("great offer",new Date(),4, Service.DISCOVER_CITY, City.CASABLANCA,host);
        Offer offer7 = new Offer("great offer",new Date(),4, Service.DISCOVER_CITY, City.CASABLANCA,host);

        offerRepo.save(offer1);
        offerRepo.save(offer2);
        offerRepo.save(offer3);
        offerRepo.save(offer4);
        offerRepo.save(offer5);
        offerRepo.save(offer6);
        offerRepo.save(offer7);
        System.out.println("all saved");
    }
}
