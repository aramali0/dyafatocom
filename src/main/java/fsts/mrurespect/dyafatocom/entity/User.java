package fsts.mrurespect.dyafatocom.entity;

import fsts.mrurespect.dyafatocom.Enums.Sexe;
import jakarta.persistence.*;

import java.util.List;

@Table(name = "user")
@Entity
public class User {
    @Column
    private String nom ;
    @Column
    private String prenom ;
    @Column
    private String tel ;
    @Enumerated(EnumType.STRING)
    private Sexe sexe ;
    @Column
    private int age ;
    @Column
    private String email ;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")

    private List<Familly> famillieMembers ;
    @Id
    private Long id;

}
