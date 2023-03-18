package com.example.thi_module_5.repository;

import com.example.thi_module_5.model.CoachType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICoachTypeRepository extends JpaRepository<CoachType,Integer> {
    @Query(value = "select *from coach_type",nativeQuery = true)
    List<CoachType> findAllCoachType();
}
