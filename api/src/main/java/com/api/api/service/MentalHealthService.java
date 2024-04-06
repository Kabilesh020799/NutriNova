package com.api.api.service;

import com.api.api.interfaces.MentalHealthRepository;
import com.api.api.model.DAO.MentalHealth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MentalHealthService {
    @Autowired
    private MentalHealthRepository mentalHealthRepository;
    public void saveMentalHealth(MentalHealth mentalHealth) {
        mentalHealthRepository.save(mentalHealth);
    }

    public List<MentalHealth> getAllMentalHealth() {
        return mentalHealthRepository.findAll();
    }
}
