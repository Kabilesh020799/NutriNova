package com.api.api.controller;

import com.api.api.model.DAO.Image;
import com.api.api.model.DAO.Topic;
import com.api.api.model.DAO.User;
import com.api.api.service.ImageService;
import com.api.api.service.TopicService;
import com.api.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private ImageService imageService;
    @Autowired
    private TopicService topicService;

    @PostMapping("/signup")
    public void signup(@RequestBody User user) {
        userService.saveUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
        boolean isValidUser = userService.validateUser(user.getEmail(), user.getPassword());
        if (isValidUser) {
            Topic topic = topicService.getTopic(user.getEmail());
            return ResponseEntity.ok().body(Map.of("message", "Login successful", "topicArn", topic.getTopicArn()));
        } else {
            return ResponseEntity.badRequest().body(Map.of("message", "Invalid credentials"));
        }
    }
    @PostMapping("/get-image")
    public ResponseEntity<Image> getImage(@RequestBody Image image) {
        return ResponseEntity.ok(imageService.getImageUrl(image.getEmail()));
    }
}
