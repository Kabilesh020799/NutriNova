package com.api.api.interfaces;

import com.api.api.model.DAO.Image;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends MongoRepository<Image, String> {
    Image findImageByEmail(String email);
}
