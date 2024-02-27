package fsts.mrurespect.dyafatocom;

import fsts.mrurespect.dyafatocom.Enums.City;
import fsts.mrurespect.dyafatocom.Enums.Service;
import fsts.mrurespect.dyafatocom.entity.Host;
import fsts.mrurespect.dyafatocom.entity.Offer;
import fsts.mrurespect.dyafatocom.repository.HostRepo;
import fsts.mrurespect.dyafatocom.repository.OfferRepo;
import fsts.mrurespect.dyafatocom.repository.TouristRepo;
import fsts.mrurespect.dyafatocom.repository.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
@AllArgsConstructor
public class DyafatocomApplication implements CommandLineRunner {
    public static void main(String[] args) {
        SpringApplication.run(DyafatocomApplication.class, args);
    }


    private final UserRepo userRepo;
    private final HostRepo hostRepo;
    private final TouristRepo touristRepo;
    private final OfferRepo offerRepo;

    @Override
    public void run(String... args) throws Exception {

        Host host = new Host();
        host.setEmail("simo@gmail.com");
        host.setCin("987yht");
        host.setDescription("kjhg");
        host.setRating(8);
        hostRepo.save(host);


        Offer offer1 = new Offer("titre 1","describtion",new Date(),8, Service.DISCOVER_CITY, City.CASABLANCA,null);
        Offer offer2 = new Offer("titre 2","describtion",new Date(),8, Service.DISCOVER_CITY, City.AGADIR,null);
        Offer offer3 = new Offer("titre 3","describtion",new Date(),8, Service.DISCOVER_CITY, City.FES,null);
        Offer offer4 = new Offer("titre 4","describtion",new Date(),8, Service.DISCOVER_CITY, City.CASABLANCA,null);
        Offer offer5 = new Offer("titre 5","describtion",new Date(),8, Service.DISCOVER_CITY, City.MEKNES,null);
        Offer offer6 = new Offer("titre 6","describtion",new Date(),8, Service.DISCOVER_CITY, City.CASABLANCA,null);
        Offer offer7 = new Offer("titre 7","describtion",new Date(),8, Service.DISCOVER_CITY, City.CASABLANCA,null);
        Offer offer8 = new Offer("titre 8","describtion",new Date(),8, Service.DISCOVER_CITY, City.CASABLANCA,null);

        offerRepo.save(offer1);
        offerRepo.save(offer2);
        offerRepo.save(offer3);
        offerRepo.save(offer4);
        offerRepo.save(offer5);
        offerRepo.save(offer6);
        offerRepo.save(offer7);
        offerRepo.save(offer8);

    }
}
