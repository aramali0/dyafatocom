package fsts.mrurespect.dyafatocom.entity;

import fsts.mrurespect.dyafatocom.Enums.Service;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@DiscriminatorValue("HOST")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Host extends User {

    @Column
    private String cin;
    @Column
    private String description ;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "host_id")
    private List<Language> languages ;

    @Enumerated(EnumType.STRING)
    private List<Service> services ;
    private  int rating ;


}
