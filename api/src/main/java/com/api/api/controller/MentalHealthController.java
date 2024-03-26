package com.api.api.controller;

import com.api.api.model.DAO.MentalHealth;
import com.api.api.service.MentalHealthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MentalHealthController {
    @Autowired
    private MentalHealthService mentalHealthService;

    @PostMapping("/add-mental-health")
    public void addMentalHealth(@RequestBody MentalHealth mentalHealth) {
        mentalHealthService.saveMentalHealth(mentalHealth);
    }

    @GetMapping("/mental-health")
    public ResponseEntity<List<MentalHealth>> getMentalHealth(@RequestParam String email) {
        return ResponseEntity.ok(mentalHealthService.getAllMentalHealth(email));
    }
}
