package fsts.mrurespect.dyafatocom.entity;

import fsts.mrurespect.dyafatocom.Enums.Service;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Table(name = "user")
@Entity
@DiscriminatorValue("HOST")
public class Host extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Override
    public int getId() {
        return id;
    }

    @Override
    public void setId(int id) {
        this.id = id;
    }

    @Column
    private String cin ;
    @Column
    private String description ;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "host_id")
    private List<Language> languages ;

    @Enumerated(EnumType.STRING)
    private List<Service> services;
    private  int rating ;


    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Language> getLanguages() {
        return languages;
    }

    public void setLanguages(List<Language> languages) {
        this.languages = languages;
    }

    public List<Service> getServices() {
        return services;
    }

    public void setServices(List<Service> services) {
        this.services = services;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }


}
