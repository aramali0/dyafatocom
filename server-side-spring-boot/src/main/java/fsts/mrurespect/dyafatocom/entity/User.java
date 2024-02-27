package fsts.mrurespect.dyafatocom.entity;

import fsts.mrurespect.dyafatocom.Enums.Sexe;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Table(name = "user")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

}
