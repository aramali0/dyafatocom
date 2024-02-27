package fsts.mrurespect.dyafatocom.dao;

import fsts.mrurespect.dyafatocom.entity.messagerie.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConversationDao extends JpaRepository<Conversation,Integer> {
}
