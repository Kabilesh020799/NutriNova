package com.api.api.service;

import com.api.api.interfaces.AppointmentRepository;
import com.api.api.model.DAO.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;
    public void saveAppointment(Appointment appointment) {
        appointmentRepository.save(appointment);
    }

    public List<Appointment> getAllAppointments(String email) {
        return appointmentRepository.findByUser(email);
    }
}
