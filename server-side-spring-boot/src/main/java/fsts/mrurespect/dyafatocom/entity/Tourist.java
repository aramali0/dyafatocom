package fsts.mrurespect.dyafatocom.entity;

import fsts.mrurespect.dyafatocom.entity.messagerie.User;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@DiscriminatorValue("TOURIST")
public class Tourist extends User{
    @Column
    private String country ;
    @Column
    private String numPassport ;
}
