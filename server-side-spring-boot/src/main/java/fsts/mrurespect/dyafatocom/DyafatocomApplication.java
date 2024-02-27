package fsts.mrurespect.dyafatocom;

import fsts.mrurespect.dyafatocom.repository.HostRepo;
import fsts.mrurespect.dyafatocom.repository.OfferRepo;
import fsts.mrurespect.dyafatocom.repository.TouristRepo;
import fsts.mrurespect.dyafatocom.repository.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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

    }

}
