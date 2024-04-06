package com.api.api.interfaces;

import com.api.api.model.DAO.MentalHealth;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MentalHealthRepository extends MongoRepository<MentalHealth, String> {
}
