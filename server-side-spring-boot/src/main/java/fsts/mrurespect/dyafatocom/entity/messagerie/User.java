package fsts.mrurespect.dyafatocom.entity.messagerie;

import com.fasterxml.jackson.annotation.JsonIgnore;
import fsts.mrurespect.dyafatocom.Enums.Role;
import fsts.mrurespect.dyafatocom.Enums.Sexe;
import fsts.mrurespect.dyafatocom.entity.Familly;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_type")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    public Role role;

    @Column
    private String username;
    @Column
    private String password ;

    @Column
    private String name ;
    @Column
    private String lastName ;
    @Column
    private String email ;

    @ManyToMany(mappedBy = "users")
    @JsonIgnore
    private List<Conversation> conversations;
    @Column
    private String tel ;
    @Enumerated(EnumType.STRING)
    private Sexe sexe ;
    @Column
    private int age ;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")

    private List<Familly> famillieMembers ;
    public void addConversation(Conversation conversation){
        if (conversations==null){
            conversations=new ArrayList<>();
        }
        conversations.add(conversation);
    }

    public List<Conversation> getConversations() {
        return conversations;
    }

    public void setConversations(List<Conversation> conversations) {
        this.conversations = conversations;
    }

    public User() {
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", id='" + id + '\'' +
                '}';
    }
}
