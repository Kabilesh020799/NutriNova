package com.api.api.controller;

import com.api.api.model.DAO.Medication;
import com.api.api.service.MedicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class MedicationController {
    @Autowired
    private MedicationService medicationService;

    @PostMapping("/save-medication")
    public void saveMedication(@RequestBody Medication medication) {
        medicationService.saveMedication(medication);
    }
    @GetMapping("/get-medication")
    public ResponseEntity<List<Medication>> getMedication(@RequestParam String email) {
        return ResponseEntity.ok(medicationService.getAllMedication(email));
    }
}
