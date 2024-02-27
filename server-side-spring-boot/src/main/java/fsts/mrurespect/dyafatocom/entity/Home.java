package fsts.mrurespect.dyafatocom.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Table(name = "homes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Home {
    @Column
    private String adresse ;
    @Column
    private String city ;
    @Column
    private int numRooms ;
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

}
