package fsts.mrurespect.dyafatocom.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tourist")
@Getter
@Setter
public class Tourist extends User{

    @Column
    private String country ;
    @Column
    private String numPassport ;
    @Id
    private Long id;

}
