package com.api.api;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.PutObjectRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

@Service
public class StorageService {

    private final AmazonS3 s3Client;
    private String bucketName = "nutrinova-api";

    public StorageService() {
        // Initialize the AmazonS3 client with default credentials and region
        this.s3Client = AmazonS3ClientBuilder.defaultClient();
    }
    public String uploadFile(MultipartFile multipartFile) {
        // Generate a unique file name or use the original name
        String fileName = System.currentTimeMillis() + "_" + multipartFile.getOriginalFilename();
        // Convert MultipartFile to a File
        File file = convertMultiPartFileToFile(multipartFile);
        try {
            // Upload the file to S3
            s3Client.putObject(new PutObjectRequest(bucketName, fileName, file));
            // Return the file URL
            return s3Client.getUrl(bucketName, fileName).toString();
        } finally {
            // Make sure to delete the temporary file created in the system
            if (file != null) {
                file.delete();
            }
        }
    }

    private File convertMultiPartFileToFile(MultipartFile multipartFile) {
        // Create a temporary file on the server's filesystem
        File file = new File(System.getProperty("java.io.tmpdir") + "/" + multipartFile.getOriginalFilename());
        try (var outputStream = Files.newOutputStream(file.toPath())) {
            outputStream.write(multipartFile.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return file;
    }
}
