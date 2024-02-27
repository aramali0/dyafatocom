package fsts.mrurespect.dyafatocom.dao;



import fsts.mrurespect.dyafatocom.entity.messagerie.Conversation;
import fsts.mrurespect.dyafatocom.entity.messagerie.ConversationUser;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;

import java.util.List;

public interface ConversationUserDao {
     public void set(Conversation conversation, User user) ;

          ConversationUser find(Conversation conversation, User user) ;
     List<ConversationUser> find(Conversation conversation) ;
}
