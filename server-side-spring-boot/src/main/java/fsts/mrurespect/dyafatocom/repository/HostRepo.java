package fsts.mrurespect.dyafatocom.repository;

import fsts.mrurespect.dyafatocom.entity.Host;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HostRepo extends JpaRepository<Host,Long> {
}
