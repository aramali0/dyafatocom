package fsts.mrurespect.dyafatocom.service;

import fsts.mrurespect.dyafatocom.entity.messagerie.Conversation;
import fsts.mrurespect.dyafatocom.entity.messagerie.ConversationUser;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;

import java.util.List;

public interface ConversationUserService {
    ConversationUser find(Conversation conversation, User user) ;
    List<ConversationUser> find(Conversation conversation) ;
    void set(Conversation conversation, User user);

}
