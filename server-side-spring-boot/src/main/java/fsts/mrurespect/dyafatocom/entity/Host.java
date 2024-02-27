package fsts.mrurespect.dyafatocom.entity;

import fsts.mrurespect.dyafatocom.Enums.Service;
import fsts.mrurespect.dyafatocom.Enums.Sexe;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Table(name = "hosters")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Host extends User {
    @Column
    private String cin ;
    @Column
    private String description ;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "host_id")
    private List<Language> languages ;
    @Enumerated(EnumType.STRING)
    private List<Service> services ;
    private  int rating ;

    public Host(String nom, String prenom, String tel, Sexe sexe, int age, String email, List<Familly> famillieMembers, Long id, String cin, String description, List<Language> languages, List<Service> services, int rating) {
        super(nom, prenom, tel, sexe, age, email, famillieMembers, id);
        this.cin = cin;
        this.description = description;
        this.languages = languages;
        this.services = services;
        this.rating = rating;
    }
}
