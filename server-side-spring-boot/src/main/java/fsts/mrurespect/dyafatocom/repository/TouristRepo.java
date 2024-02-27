package fsts.mrurespect.dyafatocom.repository;

import fsts.mrurespect.dyafatocom.entity.Tourist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TouristRepo extends JpaRepository<Tourist,Long> {
}
