package fsts.mrurespect.dyafatocom.service;

import fsts.mrurespect.dyafatocom.dao.MessageDao;
import fsts.mrurespect.dyafatocom.entity.messagerie.Conversation;
import fsts.mrurespect.dyafatocom.entity.messagerie.Message;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MessageServiceImpl implements MessageService{
    private final MessageDao messageDao ;

    public MessageServiceImpl(MessageDao messageDao) {
        this.messageDao = messageDao;
    }

    @Override
    public List<Message> getMessages(int conversationId) {
        List<Message> allMessages =messageDao.findAll();
        List<Message> messages=new ArrayList<>();
        for (Message message :allMessages) {
            if (message.getConversation().getId()==conversationId){
                messages.add(message);
            }
        }
        return messages;
    }

    @Override
    public void addMessage(Message message) {
        messageDao.save(message);
    }
}
