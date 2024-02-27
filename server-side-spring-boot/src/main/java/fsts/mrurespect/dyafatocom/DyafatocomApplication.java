package fsts.mrurespect.dyafatocom;

import fsts.mrurespect.dyafatocom.Enums.Sexe;
import fsts.mrurespect.dyafatocom.entity.Host;
import fsts.mrurespect.dyafatocom.entity.User;
import fsts.mrurespect.dyafatocom.repository.HostRepo;
import fsts.mrurespect.dyafatocom.repository.TouristRepo;
import fsts.mrurespect.dyafatocom.repository.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.data.mapping.model.SpELExpressionEvaluator;

import java.util.ArrayList;

@SpringBootApplication
@AllArgsConstructor
public class DyafatocomApplication implements Runnable{

    private final UserRepo userRepo;
    private final HostRepo hostRepo;
    private final TouristRepo touristRepo;

    public static void main(String[] args) {
        SpringApplication.run(DyafatocomApplication.class, args);
    }

    @Override
    public void run() {





    }
}
