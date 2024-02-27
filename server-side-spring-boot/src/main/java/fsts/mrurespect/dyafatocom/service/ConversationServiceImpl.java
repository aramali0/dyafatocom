package fsts.mrurespect.dyafatocom.service;

import fsts.mrurespect.dyafatocom.dao.ConversationDao;
import fsts.mrurespect.dyafatocom.entity.messagerie.Conversation;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ConversationServiceImpl implements ConversationService{
    private final ConversationDao conversationDao;

    public ConversationServiceImpl(ConversationDao conversationDao) {
        this.conversationDao = conversationDao;
    }

    @Override
    public List<Conversation> getConversation(User user) {
        List<Conversation> conversations=conversationDao.findAll();
        List<Conversation> filtredConversations=new ArrayList<>();
        for (Conversation conversation :conversations) {
           if (conversation.getUsers().contains(user)){
               System.out.println("contains");
               filtredConversations.add(conversation);
            }
        }
        return filtredConversations;
    }

    @Override
    public Conversation getConversationById(int id) {
        Optional<Conversation> optionalConversation = conversationDao.findById(id);
        return optionalConversation.orElse(null);
    }
}
