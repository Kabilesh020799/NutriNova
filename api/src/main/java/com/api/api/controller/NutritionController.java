package com.api.api.controller;

import com.api.api.model.DAO.Nutrition;
import com.api.api.service.NutritionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class NutritionController {
    @Autowired
    private NutritionService nutritionService;

    @PostMapping("/save-nutrition")
    public void saveNutrition(Nutrition nutrition) {
        nutritionService.saveNutrition(nutrition);
    }

    @GetMapping("/get-nutrition")
    public ResponseEntity<List<Nutrition>> getNutrition(@RequestParam String email) {
        return ResponseEntity.ok(nutritionService.getNutrition(email));
    }
}
