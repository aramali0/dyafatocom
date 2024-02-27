package fsts.mrurespect.dyafatocom.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "home")
@Getter
@Setter
public class Home {
    @Column
    private String adresse ;
    @Column
    private String city ;
    @Column
    private int numRooms ;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

}
