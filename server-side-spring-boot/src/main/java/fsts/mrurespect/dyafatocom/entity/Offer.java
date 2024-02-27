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
    private String describtion;
    private Date date;
    private int maxDuraion;
    private Service service;
    private City city;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "offer-id")
    private Host host;

    public Offer(String describtion, Date date, int maxDuraion, Service service, City city, Host host) {
        this.describtion = describtion;
        this.date = date;
        this.maxDuraion = maxDuraion;
        this.service = service;
        this.city = city;
        this.host = host;
    }
}
