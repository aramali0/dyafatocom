package fsts.mrurespect.dyafatocom.entity;



import fsts.mrurespect.dyafatocom.Enums.Sexe;

import fsts.mrurespect.dyafatocom.entity.messagerie.User;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.List;

@Entity
@Table(name = "tourists")
@Data
@NoArgsConstructor
@DiscriminatorValue("TOURIST")
public class Tourist extends User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Override
    public int getId() {
        return id;
    }

    @Override
    public void setId(int id) {
        this.id = id;
    }

    @Column
    private String country ;
    @Column
    private String numPassport ;


}
