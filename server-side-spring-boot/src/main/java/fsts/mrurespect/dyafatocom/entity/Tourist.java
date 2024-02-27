package fsts.mrurespect.dyafatocom.entity;


import fsts.mrurespect.dyafatocom.Enums.Sexe;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "tourists")
@Data
@NoArgsConstructor
public class Tourist extends User{

    @Column
    private String country ;
    @Column
    private String numPassport ;

    public Tourist(String nom, String prenom, String tel, Sexe sexe, int age, String email, List<Familly> famillieMembers, Long id, String country, String numPassport) {
        super(nom, prenom, tel, sexe, age, email, famillieMembers, id);
        this.country = country;
        this.numPassport = numPassport;
    }
}
