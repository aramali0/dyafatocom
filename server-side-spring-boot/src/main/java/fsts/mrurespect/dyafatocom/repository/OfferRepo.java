package fsts.mrurespect.dyafatocom.repository;

import fsts.mrurespect.dyafatocom.Enums.City;
import fsts.mrurespect.dyafatocom.Enums.Service;
import fsts.mrurespect.dyafatocom.entity.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface OfferRepo extends JpaRepository<Offer,Long> {

    @Query("SELECT o FROM Offer o WHERE (:city IS NULL OR o.city = :city) AND (:service IS NULL OR o.service = :service)")
    List<Offer> findByServiceAndCityIgnoreCase(@Param("service") Service service, @Param("city") City city);

}
