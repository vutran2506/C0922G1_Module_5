package com.example.thi_module_5.service;

import com.example.thi_module_5.model.Coach;
import com.example.thi_module_5.repository.ICoachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CoachService implements ICoachService{
    @Autowired
    private ICoachRepository iCoachRepository;
    @Override
    public Page<Coach> getAllCoach(Pageable pageable) {
        return iCoachRepository.findAllCoach(pageable);
    }

    @Override
    public void deleteCoach(int id) {
        this.iCoachRepository.deleteByID(id);
    }

    @Override
    public void createCoach(String number_bus, int coach_type_id, String name, int bus_station_id, int destination_id, String email, String phone, String start_time, String ead_time) {
        this.iCoachRepository.createCoach(number_bus,coach_type_id,name,bus_station_id,destination_id, email, phone,start_time,ead_time );
    }

    @Override
    public void updateCoach(String number_bus, int coach_type_id, String name, int bus_station_id, int destination_id, String email, String phone, String start_time, String ead_time,int id) {
        this.iCoachRepository.updateCoach(number_bus,coach_type_id,name,bus_station_id,destination_id, email, phone,start_time,ead_time,id );
    }
}
