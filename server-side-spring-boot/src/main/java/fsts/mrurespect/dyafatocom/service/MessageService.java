package fsts.mrurespect.dyafatocom.service;

import fsts.mrurespect.dyafatocom.entity.messagerie.Conversation;
import fsts.mrurespect.dyafatocom.entity.messagerie.Message;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;

import java.util.List;

public interface MessageService {
    List<Message>  getMessages(int conversationId);
    void addMessage(Message message);
}
