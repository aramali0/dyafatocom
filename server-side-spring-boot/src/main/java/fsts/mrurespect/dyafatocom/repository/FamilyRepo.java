package fsts.mrurespect.dyafatocom.repository;

import fsts.mrurespect.dyafatocom.entity.Familly;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FamilyRepo extends JpaRepository<Familly,Long> {
}
