package com.api.api.service;

import com.api.api.interfaces.ImageRepository;
import com.api.api.model.DAO.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    @Autowired
    public ImageRepository imageRepository;
    public Image getImageUrl(String email) {
        return imageRepository.findImageByEmail(email);
    }

}
