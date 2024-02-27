package fsts.mrurespect.dyafatocom.repository;

import fsts.mrurespect.dyafatocom.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Long> {
}
