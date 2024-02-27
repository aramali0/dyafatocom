package fsts.mrurespect.dyafatocom.entity;

import fsts.mrurespect.dyafatocom.Enums.Service;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CollectionId;

import java.util.Date;

@Entity
@Builder
@Table(name = "offers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id-offer")
    private Long id;
    private String describtion;
    private Date date;
    private int maxDuraion;
    private Service service;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "offer-id")
    private Host host;




}
