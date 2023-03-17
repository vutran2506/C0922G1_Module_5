package com.example.thi_module_5.controller;

import com.example.thi_module_5.model.Coach;
import com.example.thi_module_5.service.ICoachService;
import com.example.thi_module_5.service.ICoachTypeService;
import com.example.thi_module_5.service.IDepartureService;
import com.example.thi_module_5.service.IDestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class RestCoachController {
    @Autowired
    private ICoachService coachService;
    @Autowired
    private ICoachTypeService iCoachTypeService;
    @Autowired
    private IDepartureService iDepartureService;
    @Autowired
    private IDestinationService iDestinationService;

    @GetMapping("/coach")
    public ResponseEntity<Page<Coach>> findAllCoach( Pageable pageable) {
        Page<Coach> coachPage = coachService.getAllCoach(pageable);
        if (coachPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(coachPage, HttpStatus.OK);
    }
    @DeleteMapping("/coach/{id}")
    public ResponseEntity Delete(@PathVariable("id") int id) {
        this.coachService.deleteCoach(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
