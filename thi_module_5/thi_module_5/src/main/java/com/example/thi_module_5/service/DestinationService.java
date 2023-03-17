package com.example.thi_module_5.service;

import com.example.thi_module_5.model.Destination;
import com.example.thi_module_5.repository.IDestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DestinationService implements IDestinationService{
    @Autowired
    private IDestinationRepository iDestinationRepository;
    @Override
    public List<Destination> getAllDestination() {
        return iDestinationRepository.finAllDestination();
    }
}
