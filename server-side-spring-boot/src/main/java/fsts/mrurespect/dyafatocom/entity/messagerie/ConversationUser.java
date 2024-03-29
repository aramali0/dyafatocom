package fsts.mrurespect.dyafatocom.entity.messagerie;

import jakarta.persistence.*;

@Entity
@Table(name = "conversation_users")
@IdClass(ConversationUserId.class)
public class ConversationUser {

    @Id
    @ManyToOne
    @JoinColumn(name = "conversations_id")
    private Conversation conversation;

    @Id
    @ManyToOne
    @JoinColumn(name = "users_id")
    private User user;


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Conversation getConversation() {
        return conversation;
    }

    public void setConversation(Conversation conversation) {
        this.conversation = conversation;
    }


    @Override
    public String toString() {
        return "ConversationUser{" +
                "conversation=" + conversation +
                ", user=" + user +

                '}';
    }
}

