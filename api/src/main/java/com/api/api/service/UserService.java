package com.api.api.service;

import com.api.api.interfaces.UserRepository;
import com.api.api.model.DAO.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void saveUser(User user){
        userRepository.save(user);
    }
    public boolean validateUser(String email, String password) {
        List<User> users = userRepository.findByEmail(email);
        if (!users.isEmpty()) {
            User user = users.get(0);
            return user.getPassword().equals(password);
        }
        return false;
    }
}
