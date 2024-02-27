package fsts.mrurespect.dyafatocom.service;

import fsts.mrurespect.dyafatocom.dao.ConversationUserDao;
import fsts.mrurespect.dyafatocom.entity.messagerie.Conversation;
import fsts.mrurespect.dyafatocom.entity.messagerie.ConversationUser;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ConversationUserServiceImpl implements ConversationUserService {
    private final ConversationUserDao conversationUserDao;

    public ConversationUserServiceImpl(ConversationUserDao conversationUserDao) {
        this.conversationUserDao = conversationUserDao;
    }

    @Override
    public ConversationUser find(Conversation conversation, User user) {
        return conversationUserDao.find(conversation,user);
    }

    @Override
    public List<ConversationUser> find(Conversation conversation) {
        return conversationUserDao.find(conversation);
    }
    @Override
    @Transactional
    public void set(Conversation conversation, User user) {
        conversationUserDao.set(conversation,user);
    }

    }
