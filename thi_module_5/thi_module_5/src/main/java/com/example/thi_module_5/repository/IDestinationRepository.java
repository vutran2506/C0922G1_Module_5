package com.example.thi_module_5.repository;

import com.example.thi_module_5.model.Destination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IDestinationRepository extends JpaRepository<Destination, Integer> {
    @Query(value = "SELECT *from destination", nativeQuery = true)
    List<Destination> finAllDestination();
}
