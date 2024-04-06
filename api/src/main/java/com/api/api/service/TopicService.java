package com.api.api.service;

import com.api.api.interfaces.TopicRepository;
import com.api.api.model.DAO.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicService {
    @Autowired
    public TopicRepository topicRepository;
    public Topic getTopic(String email) {
        return topicRepository.findTopicByEmail(email);
    }

}
