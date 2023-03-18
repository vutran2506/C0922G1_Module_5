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
    @Query(value = "select * from coach", nativeQuery = true)
    Page<Coach> findAllCoach(Pageable pageable);

    @Transactional
    @Modifying
    @Query(value = "delete from coach as c where c.id =:id", nativeQuery = true)
    void deleteByID(@Param("id") int id);

    //    @Modifying
//    @Transactional
//    @Query(value = "insert into coach (number_bus,coach_type_id,name,departure_id,destination_id, email, phone,start_time,ead_time ) " +
//            "values (:number_bus,:coach_type_id,:name,:departure_id,:destination_id,:email,:phone,:start_time,:ead_time)",nativeQuery = true)
//    void createCoach(@Param("number_bus") String number_bus,@Param("coach_type_id") int coach_type_id,@Param("name") String name,
//                     @Param("departure_id") int departure_id,@Param("destination_id") int destination_id,@Param("email") String email,
//                     @Param("phone") String phone,@Param("start_time") String start_time,@Param("ead_time") String ead_time);
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO coach (number_bus, coach_type_id, name, departure_id, destination_id, email, phone, start_time, ead_time) " +
            "VALUES (:number_bus, :coach_type_id, :name, :departure_id, :destination_id, :email, :phone, :start_time, :ead_time)", nativeQuery = true)
    void createCoach(@Param("number_bus") String number_bus, @Param("coach_type_id") int coach_type_id, @Param("name") String name,
                     @Param("departure_id") int departure_id, @Param("destination_id") int destination_id, @Param("email") String email,
                     @Param("phone") String phone, @Param("start_time") String start_time, @Param("ead_time") String ead_time);

    @Modifying
    @Transactional
    @Query(value = "UPDATE coach c SET c.number_bus = :number_bus, c.coach_type_id = :coach_type_id, c.name = :name, " +
            "c.departure_id = :departure_id, c.destination_id = :destination_id, c.email = :email, c.phone = :phone, " +
            "c.start_time = :start_time, c.ead_time = :ead_time WHERE c.id = :id", nativeQuery = true)
    void updateCoach(@Param("number_bus") String number_bus, @Param("coach_type_id") int coach_type_id,
                     @Param("name") String name, @Param("departure_id") int departure_id,
                     @Param("destination_id") int destination_id, @Param("email") String email,
                     @Param("phone") String phone, @Param("start_time") String start_time,
                     @Param("ead_time") String ead_time, @Param("id") int id);

}