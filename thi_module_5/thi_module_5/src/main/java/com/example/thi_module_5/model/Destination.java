package com.example.thi_module_5.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Destination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @OneToMany(mappedBy = "destination", cascade = CascadeType.ALL)
    @JsonBackReference
    private Set<Coach> coachSet;

    public Destination() {
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Coach> getCoachSet() {
        return coachSet;
    }

    public void setCoachSet(Set<Coach> coachSet) {
        this.coachSet = coachSet;
    }
}
