package fsts.mrurespect.dyafatocom.entity;

import fsts.mrurespect.dyafatocom.Enums.Gender;
import fsts.mrurespect.dyafatocom.Enums.Sexe;
import jakarta.persistence.*;
import lombok.*;


@Entity
@Builder
@Table(name = "famillies")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Familly {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private Sexe sexe ;
    @Enumerated(EnumType.STRING)
    private Gender gender ;

}
