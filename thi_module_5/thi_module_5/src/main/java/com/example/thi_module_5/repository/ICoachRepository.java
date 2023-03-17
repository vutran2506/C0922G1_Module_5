package com.example.thi_module_5.repository;

import com.example.thi_module_5.model.Coach;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface ICoachRepository extends JpaRepository<Coach,Integer> {
    @Query(value = "select c.* from coach as c", nativeQuery = true)
    Page<Coach> findAllCoach(Pageable pageable);
    @Transactional
    @Modifying
    @Query(value = "delete from coach as c where c.id =:id",nativeQuery = true)
    void deleteByID(@Param("id") int id);

    @Modifying
    @Transactional
    @Query(value = "insert into coach (number_bus,coach_type_id,name,bus_station_id,destination_id, email, phone,start_time,ead_time ) values (:number_bus,:coach_type_id,:name,:bus_station_id,:destination_id,:email,:phone,:start_time,:ead_time)",nativeQuery = true)
    void createCoach(@Param("number_bus") String number_bus,@Param("coach_type_id") int coach_type_id,@Param("name") String name,@Param("bus_station_id") int bus_station_id,@Param("destination_id") int destination_id,@Param("email") String email,@Param("phone") String phone,@Param("start_time") String start_time,@Param("phone") String ead_time);



}

}
