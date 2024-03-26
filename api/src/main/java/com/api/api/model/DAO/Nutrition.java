package com.api.api.model.DAO;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("nutrition")
public class Nutrition {
    @Id
    private String id;
    private String name;
    private String mealTime;
    private String date;
    private String user;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMealTime() {
        return mealTime;
    }

    public void setMealTime(String mealTime) {
        this.mealTime = mealTime;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }
}
