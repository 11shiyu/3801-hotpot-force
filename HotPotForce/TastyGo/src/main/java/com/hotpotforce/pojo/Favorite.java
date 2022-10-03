package com.hotpotforce.pojo;

public class Favorite {
    private Long ID;
    private String userName;
    private Long recipeID;

    private String recipeName;

    public Favorite() {
    }

    public Favorite(Long ID, String username, Long recipeID) {
        this.ID = ID;
        this.userName = username;
        this.recipeID = recipeID;
    }

    public Favorite(Long ID, String username, Long recipeID, String recipeName) {
        this.userName = username;
        this.recipeID = recipeID;
        this.ID = ID;
        this.recipeName = recipeName;
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Long getRecipeName() {
        return this.recipeID;
    }

    public void setRecipeName(Long recipeID) {
        this.recipeID = recipeID;
    }

    public void setRecipeName(String recipeName) {
        this.recipeName = recipeName;
    }
}
