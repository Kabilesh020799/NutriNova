package com.api.api.interfaces;

import com.api.api.model.DAO.Nutrition;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NutritionRepository extends MongoRepository<Nutrition, String> {
    List<Nutrition> findNutritionByUser(String email);
}
