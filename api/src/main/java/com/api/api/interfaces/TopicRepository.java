package com.api.api.interfaces;

import com.api.api.model.DAO.Topic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicRepository extends MongoRepository<Topic, String> {
    Topic findTopicByEmail(String email);
    ;
}
