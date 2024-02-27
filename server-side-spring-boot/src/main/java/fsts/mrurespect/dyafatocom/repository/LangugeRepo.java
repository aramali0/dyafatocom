package fsts.mrurespect.dyafatocom.repository;

import fsts.mrurespect.dyafatocom.entity.Language;
import lombok.Lombok;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface LangugeRepo extends JpaRepository<Language, Long> {
}
