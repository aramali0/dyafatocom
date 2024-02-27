package fsts.mrurespect.dyafatocom.service;



import fsts.mrurespect.dyafatocom.entity.messagerie.Conversation;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;

import java.util.List;

public interface ConversationService {
    List<Conversation> getConversation(User user);
    Conversation getConversationById(int id);
}
