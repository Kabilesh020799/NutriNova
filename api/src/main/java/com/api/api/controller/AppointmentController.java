package com.api.api.controller;

import com.api.api.model.DAO.Appointment;
import com.api.api.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/set-appointment")
    public void setAppointment(@RequestBody Appointment appointment) {
        appointmentService.saveAppointment(appointment);
    }

    @GetMapping("/appointment")
    public ResponseEntity<List<Appointment>> getAppointment(@RequestParam String email) {
        return ResponseEntity.ok(appointmentService.getAllAppointments(email));
    }
}
