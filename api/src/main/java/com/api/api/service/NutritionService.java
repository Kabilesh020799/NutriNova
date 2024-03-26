package com.api.api.service;

import com.api.api.interfaces.NutritionRepository;
import com.api.api.model.DAO.Nutrition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NutritionService {
    @Autowired
    private NutritionRepository nutritionRepository;

    public void saveNutrition(Nutrition nutrition) {
        nutritionRepository.save(nutrition);
    }
    public List<Nutrition> getNutrition(String email) {
        return nutritionRepository.findNutritionByUser(email);
    }
}
