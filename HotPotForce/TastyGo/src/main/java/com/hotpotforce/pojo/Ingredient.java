package com.hotpotforce.pojo;

public class Ingredient {
    private Long ID;
    private Long recipeID;
    private String ingredient;

    public Ingredient() {
    }

    public Ingredient(Long recipeID, String ingredient) {
        this.recipeID = recipeID;
        this.ingredient = ingredient;
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public Long getRecipeID() {
        return recipeID;
    }

    public void setRecipeID(Long recipeID) {
        this.recipeID = recipeID;
    }

    public String getIngredient() {
        return ingredient;
    }

    public void setIngredient(String ingredient) {
        this.ingredient = ingredient;
    }
}
