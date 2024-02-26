package fsts.mrurespect.dyafatocom.entity;

import fsts.mrurespect.dyafatocom.Enums.Gender;
import fsts.mrurespect.dyafatocom.Enums.Sexe;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "familly")
@Getter
@Setter
public class Familly {
    @Id
    @Column
    private Long id;
    @Enumerated(EnumType.STRING)
    private Sexe sexe ;
    @Enumerated(EnumType.STRING)
    private Gender gender ;

}
