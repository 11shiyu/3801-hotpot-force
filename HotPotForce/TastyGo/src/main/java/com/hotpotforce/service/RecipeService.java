package com.hotpotforce.service;

import com.hotpotforce.pojo.Ingredient;
import com.hotpotforce.pojo.RecipeBook;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface RecipeService {
    List<RecipeBook> searchRecipe(String recipeName);

    int createRecipe(Integer cookingTime, String recipeName, String description, String nationality, String photoPath) throws Exception;

    RecipeBook getRecipeByID(Long ID);

    int insertIngredient(String recipeName, String ingredient) throws Exception;

    List<String> checkList(String recipeName);

    List<RecipeBook> filter(String cookingTime, String ingredient, String nationality);

    List<RecipeBook> getAllRecipe();
}
