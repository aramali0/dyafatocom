package fsts.mrurespect.dyafatocom.dao;

import fsts.mrurespect.dyafatocom.entity.messagerie.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageDao extends JpaRepository<Message,Integer> {
}
