package fsts.mrurespect.dyafatocom.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
    @Column
    private Long id;

}
