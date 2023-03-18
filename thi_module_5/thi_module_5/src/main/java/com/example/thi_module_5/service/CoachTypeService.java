package com.example.thi_module_5.service;

import com.example.thi_module_5.model.CoachType;
import com.example.thi_module_5.repository.ICoachRepository;
import com.example.thi_module_5.repository.ICoachTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoachTypeService implements ICoachTypeService{
    @Autowired
    private ICoachTypeRepository iCoachTypeRepository;
    @Override
    public List<CoachType> getAllCoachType() {
        return iCoachTypeRepository.findAllCoachType();
    }
}
