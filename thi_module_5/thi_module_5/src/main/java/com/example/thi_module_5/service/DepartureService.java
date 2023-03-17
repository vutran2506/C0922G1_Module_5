package com.example.thi_module_5.service;

import com.example.thi_module_5.model.Departure;
import com.example.thi_module_5.repository.IDepartureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartureService implements IDepartureService {
    @Autowired
    private IDepartureRepository iDepartureRepository;
    @Override
    public List<Departure> getAllDeparture() {
        return iDepartureRepository.findAllDeparture();
    }
}
