package com.example.service;

import com.example.repository.IDictionaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DictionaryService implements IDictionaryService{
    @Autowired
    IDictionaryRepository dictionaryRepository;
    @Override
    public String Search(String english) {
        return dictionaryRepository.Search(english);
    }
}
