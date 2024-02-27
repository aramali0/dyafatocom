package fsts.mrurespect.dyafatocom.repository;

import fsts.mrurespect.dyafatocom.entity.Home;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HomeRepo extends JpaRepository<Home,Long> {
}
