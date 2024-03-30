package com.api.api.service;

import com.api.api.interfaces.MedicationRepository;
import com.api.api.model.DAO.Medication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicationService {
    @Autowired
    private MedicationRepository medicationRepository;

    public void saveMedication(Medication medication) {
        medicationRepository.save(medication);
    }

    public List<Medication> getAllMedication(String email) {
        return medicationRepository.findMedicationByUser(email);
    }
}
