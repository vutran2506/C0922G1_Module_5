package com.example.thi_module_5.dto;

import com.example.thi_module_5.model.CoachType;
import com.example.thi_module_5.model.Departure;
import com.example.thi_module_5.model.Destination;

public class CoachDto {
    private int id;
    private String numberBus;
    private String name;
    private String email;
    private String phone;
    private String startTime;
    private String eadTime;
    private Departure departure;
    private CoachType coachType;
    private Destination destination;

    public CoachDto() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNumberBus() {
        return numberBus;
    }

    public void setNumberBus(String numberBus) {
        this.numberBus = numberBus;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEadTime() {
        return eadTime;
    }

    public void setEadTime(String eadTime) {
        this.eadTime = eadTime;
    }

    public Departure getDeparture() {
        return departure;
    }

    public void setDeparture(Departure departure) {
        this.departure = departure;
    }

    public CoachType getCoachType() {
        return coachType;
    }

    public void setCoachType(CoachType coachType) {
        this.coachType = coachType;
    }

    public Destination getDestination() {
        return destination;
    }

    public void setDestination(Destination destination) {
        this.destination = destination;
    }
}
