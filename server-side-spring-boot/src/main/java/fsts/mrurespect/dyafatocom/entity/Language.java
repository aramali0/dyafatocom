package fsts.mrurespect.dyafatocom.entity;

import jakarta.persistence.*;

@Table(name = "language")
@Entity
public class Language {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
