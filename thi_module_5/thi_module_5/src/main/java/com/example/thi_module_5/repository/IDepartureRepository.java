package com.example.thi_module_5.repository;

import com.example.thi_module_5.model.Departure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IDepartureRepository extends JpaRepository<Departure,Integer> {
    @Query(value = "select * from departure",nativeQuery = true)
    List<Departure> findAllDeparture();
}
