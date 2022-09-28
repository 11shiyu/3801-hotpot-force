package com.hotpotforce.service.impl;

import com.hotpotforce.mapper.RecipeBookMapper;
import com.hotpotforce.pojo.RecipeBook;
import com.hotpotforce.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    private RecipeBookMapper recipeBookMapper;

    @Override
    public RecipeBook searchRecipe(String recipeName) {
       RecipeBook recipe = recipeBookMapper.searchRecipeByName(recipeName);
//       System.out.println("searchRecipe");
       return recipe;
    }


    public int createRecipe(Integer cookingTime, String recipeName, String description, String nationality, String photoPath) throws Exception {
        int count = recipeBookMapper.createRecipe(cookingTime, recipeName, description, nationality, photoPath);
        return count;
    }


    @Override
    public RecipeBook getRecipeByID(Long ID) {
        return recipeBookMapper.getRecipeByID(ID);
    }

    @Override
    public int insertIngredient(String recipeName, String ingredient) throws Exception {
        return recipeBookMapper.insertIngredient(recipeName, ingredient);
    }


}
