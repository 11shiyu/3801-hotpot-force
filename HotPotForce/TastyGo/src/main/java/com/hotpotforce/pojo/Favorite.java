package com.hotpotforce.pojo;

public class Favorite {
    private Long ID;
    private String username;
    private Long recipeID;

    private String reciepName;

    public Favorite() {
    }

    public Favorite(Long ID, String username, Long recipeID) {
        this.ID = ID;
        this.username = username;
        this.recipeID = recipeID;
    }

    public Favorite(Long ID, String username, Long recipeID, String recipeName) {
        this.username = username;
        this.recipeID = recipeID;
        this.ID = ID;
        this.reciepName = recipeName;
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getRecipeName() {
        return this.recipeID;
    }

    public void setRecipeName(Long recipeID) {
        this.recipeID = recipeID;
    }

    public String getReciepName() {
        return reciepName;
    }

    public void setReciepName(String reciepName) {
        this.reciepName = reciepName;
    }
}
