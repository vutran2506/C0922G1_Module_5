package com.example.thi_module_5.service;

import com.example.thi_module_5.model.Coach;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICoachService {
    Page<Coach>getAllCoach(Pageable pageable);
    void deleteCoach(int id);
    void createCoach(String number_bus, int coach_type_id, String name, int bus_station_id,int destination_id, String email,String phone, String start_time,String ead_time );
    void updateCoach(String number_bus, int coach_type_id, String name, int bus_station_id,int destination_id, String email,String phone, String start_time,String ead_time,int id );
}
