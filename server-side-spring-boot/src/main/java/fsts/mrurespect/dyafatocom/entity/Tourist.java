package fsts.mrurespect.dyafatocom.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tourists")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tourist extends User{

    @Column
    private String country ;
    @Column
    private String numPassport ;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

}
