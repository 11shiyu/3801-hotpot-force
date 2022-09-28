package com.hotpotforce.service;

import com.hotpotforce.pojo.RecipeBook;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface RecipeService {
    RecipeBook searchRecipe(String recipeName);

    int createRecipe(Integer cookingTime, String recipeName, String description, String nationality, String photoPath) throws Exception;

    RecipeBook getRecipeByID(Long ID);

    int insertIngredient(String recipeName, String ingredient) throws Exception;


}
