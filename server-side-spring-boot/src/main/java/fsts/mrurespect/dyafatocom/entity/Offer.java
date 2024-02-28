package fsts.mrurespect.dyafatocom.entity;

import fsts.mrurespect.dyafatocom.Enums.City;
import fsts.mrurespect.dyafatocom.Enums.Service;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CollectionId;

import java.util.Date;

@Entity
@Table(name = "offers")
@Data
@NoArgsConstructor
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id-offer")
    private Long id;
    private String titre;
    private String describtion;
    private float prix;
    private Date date;
    private int rating;
    private int maxDuraion;
    private Service service;
    private City city;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "host-id")
    private Host host;

    public Offer(String titre, String describtion, float prix, Date date, int rating, int maxDuraion, Service service, City city, Host host) {
        this.titre = titre;
        this.describtion = describtion;
        this.prix = prix;
        this.date = date;
        this.rating = rating;
        this.maxDuraion = maxDuraion;
        this.service = service;
        this.city = city;
        this.host = host;
    }
}
