package fsts.mrurespect.dyafatocom;

import fsts.mrurespect.dyafatocom.Enums.City;
import fsts.mrurespect.dyafatocom.Enums.Service;
import fsts.mrurespect.dyafatocom.dao.UserDao;
import fsts.mrurespect.dyafatocom.entity.Host;
import fsts.mrurespect.dyafatocom.entity.Offer;
import fsts.mrurespect.dyafatocom.entity.Tourist;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;
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


    private final UserDao userRepo;
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

        Tourist tourist = new Tourist();
        tourist.setEmail("simo@gmail.com");
        tourist.setName("simo");
        tourist.setAge(34);

        touristRepo.save(tourist);


        Offer offer1 = new Offer("titre 1","describtion",100,new Date(),5,8, Service.DISCOVER_CITY, City.CASABLANCA,null);
        Offer offer2 = new Offer("titre 2","describtion",100,new Date(),3,8, Service.DISCOVER_CITY, City.AGADIR,null);
        Offer offer3 = new Offer("titre 3","describtion",100,new Date(),4,8, Service.DISCOVER_CITY, City.FES,null);
        Offer offer4 = new Offer("titre 4","describtion",100,new Date(),3,8, Service.DISCOVER_CITY, City.CASABLANCA,null);
        Offer offer5 = new Offer("titre 5","describtion",100,new Date(),2,8, Service.DISCOVER_CITY, City.MEKNES,null);
        Offer offer6 = new Offer("titre 6","describtion",100,new Date(),4,8, Service.DISCOVER_CITY, City.CASABLANCA,null);
        Offer offer7 = new Offer("titre 7","describtion",100,new Date(),6,8, Service.DISCOVER_CITY, City.CASABLANCA,null);
        Offer offer8 = new Offer("titre 8","describtion",100,new Date(),4,8, Service.DISCOVER_CITY, City.CASABLANCA,null);

        offerRepo.save(offer1);
        offerRepo.save(offer2);
        offerRepo.save(offer3);
        offerRepo.save(offer4);
        offerRepo.save(offer5);
        offerRepo.save(offer6);
        offerRepo.save(offer7);
        offerRepo.save(offer8);

        User user = new User();
        user.setPassword("123");
        user.setUsername("simo@gmail.com");

        userRepo.save(user);

    }
}
