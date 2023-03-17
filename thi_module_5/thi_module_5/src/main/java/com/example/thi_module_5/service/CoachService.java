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
}
