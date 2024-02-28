package fsts.mrurespect.dyafatocom.seviceImp;

import fsts.mrurespect.dyafatocom.entity.Tourist;
import fsts.mrurespect.dyafatocom.repository.TouristRepo;
import fsts.mrurespect.dyafatocom.service.TouristServive;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class TouristServiceImp implements TouristServive {
    private final TouristRepo touristRepo;
    @Override
    public Tourist getUser(Long id) {
        return touristRepo.findById(id).orElse(new Tourist());
    }
}
