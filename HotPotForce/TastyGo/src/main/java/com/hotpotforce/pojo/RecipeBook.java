package com.hotpotforce.pojo;

public class RecipeBook {

    private Long ID;
    //todo 类型可能要改
    private Integer cookingTime;

    private String recipeName;

    private String description;

    private String nationality;

    private String photoPath;

//    private Users creator;

    private String cultureBackground;

    public RecipeBook() {
    }

    public RecipeBook(Integer cookingTime, String recipeName, String description, String nationality, String photoPath) {
        this.cookingTime = cookingTime;
        this.recipeName = recipeName;
        this.description = description;
        this.nationality = nationality;
        this.photoPath = photoPath;
    }

    public RecipeBook(Integer cookingTime, String recipeName, String description, String nationality, String cultureBackground, String photoPath) {
        this.cookingTime = cookingTime;
        this.recipeName = recipeName;
        this.description = description;
        this.nationality = nationality;
//        this.creator = creator;
        this.cultureBackground = cultureBackground;
        this.photoPath = photoPath;
    }


    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public Integer getCookingTime() {
        return cookingTime;
    }

    public void setCookingTime(int cookingTime) {
        this.cookingTime = cookingTime;
    }

    public String getRecipeName() {
        return recipeName;
    }

    public void setRecipeName(String recipeName) {
        this.recipeName = recipeName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

//    public Users getCreator() {
//        return creator;
//    }
//
//    public void setCreator(Users creator) {
//        this.creator = creator;
//    }

    public String getCultureBackground() {
        return cultureBackground;
    }

    public void setCultureBackground(String cultureBackground) {
        this.cultureBackground = cultureBackground;
    }

    public String getPhotoPath() {
        return photoPath;
    }

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }

    @Override
    public String toString() {
        return "RecipeBook{" +
                "ID=" + ID +
                ", cookingTime=" + cookingTime +
                ", recipeName='" + recipeName + '\'' +
                ", description='" + description + '\'' +
                ", nationality='" + nationality + '\'' +
                ", photoPath=" + photoPath +
//                ", creator=" + creator +
                ", cultureBackground='" + cultureBackground + '\'' +
                '}';
    }
}
