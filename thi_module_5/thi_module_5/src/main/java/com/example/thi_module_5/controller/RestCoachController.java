package com.example.thi_module_5.controller;

import com.example.thi_module_5.dto.CoachDto;
import com.example.thi_module_5.model.Coach;
import com.example.thi_module_5.model.CoachType;
import com.example.thi_module_5.model.Departure;
import com.example.thi_module_5.model.Destination;
import com.example.thi_module_5.service.ICoachService;
import com.example.thi_module_5.service.ICoachTypeService;
import com.example.thi_module_5.service.IDepartureService;
import com.example.thi_module_5.service.IDestinationService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public ResponseEntity<Page<Coach>> findAllCoach(@PageableDefault(size = 2) Pageable pageable) {
        Page<Coach> coachPage = coachService.getAllCoach(pageable);
        if (coachPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(coachPage, HttpStatus.OK);
    }

    @GetMapping("/coaches")
    public ResponseEntity<List<CoachType>> findAllCoachType() {
        List<CoachType> coachTypeList = this.iCoachTypeService.getAllCoachType();
        if (coachTypeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(coachTypeList, HttpStatus.OK);
    }

    @GetMapping("/departure")
    public ResponseEntity<List<Departure>> findAllDeparture() {
        List<Departure> departureList = this.iDepartureService.getAllDeparture();
        if (departureList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(departureList, HttpStatus.OK);
    }

    @GetMapping("/destination")
    public ResponseEntity<List<Destination>> findAllDestination() {
        List<Destination> destinationList = this.iDestinationService.getAllDestination();
        if (destinationList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(destinationList, HttpStatus.OK);
    }

    @DeleteMapping("/coach/{id}")
    public ResponseEntity Delete(@PathVariable("id") int id) {
        this.coachService.deleteCoach(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/coach")
    public ResponseEntity<Coach> Create(@RequestBody CoachDto coachDto) {
        Coach coach = new Coach();
        BeanUtils.copyProperties(coachDto, coach);
        this.coachService.createCoach(
                coach.getNumberBus(), coach.getCoachType().getId(), coach.getName(), coach.getDeparture().getId(), coach.getDestination().getId(), coach.getPhone(), coach.getEmail(), coach.getStartTime(), coach.getEadTime());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/coach")
    public ResponseEntity<Coach> UpdateCoach(@RequestBody CoachDto coachDto) {
        Coach coach = new Coach();
       BeanUtils.copyProperties(coachDto,coach);
        this.coachService.updateCoach(
                coach.getNumberBus(),coach.getCoachType().getId(),coach.getName(),coach.getDeparture().getId(),coach.getDestination().getId(),coach.getPhone(), coach.getEmail(), coach.getStartTime(), coach.getEadTime(), coach.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

