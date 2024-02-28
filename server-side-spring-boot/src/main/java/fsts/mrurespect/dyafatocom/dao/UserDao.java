package fsts.mrurespect.dyafatocom.dao;

import fsts.mrurespect.dyafatocom.entity.messagerie.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User,Integer> {
        User findByUsernameAndPassword(String username, String password);

}
