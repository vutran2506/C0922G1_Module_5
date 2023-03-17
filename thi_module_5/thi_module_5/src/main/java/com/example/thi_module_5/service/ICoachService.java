package com.example.thi_module_5.service;

import com.example.thi_module_5.model.Coach;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICoachService {
    Page<Coach>getAllCoach(Pageable pageable);
    void deleteCoach(int id);
}
