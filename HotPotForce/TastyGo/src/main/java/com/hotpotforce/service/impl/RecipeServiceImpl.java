package com.hotpotforce.service.impl;

import com.hotpotforce.mapper.RecipeBookMapper;
import com.hotpotforce.pojo.RecipeBook;
import com.hotpotforce.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    private RecipeBookMapper recipeBookMapper;

    @Override
    public List<RecipeBook> searchRecipe(String recipeName) {
       List<RecipeBook> recipe = recipeBookMapper.searchRecipeByName(recipeName);
//       System.out.println("searchRecipe");
       return recipe;
    }

    @Transactional
    public int createRecipe(Integer cookingTime, String recipeName, String description, String nationality, String photoPath) throws Exception {
        int count = recipeBookMapper.createRecipe(cookingTime, recipeName, description, nationality, photoPath);


        return count;
    }


    @Override
    public RecipeBook getRecipeByID(Long ID) {
        return recipeBookMapper.getRecipeByID(ID);
    }

    @Override
    public int insertIngredient(String recipeName, String ingredient) throws Exception { // 这边改动 str
        return recipeBookMapper.insertIngredient(recipeName, ingredient); // 这边改动 str
    }

    @Override
    public List<String> checkList(String recipeName) {
        return recipeBookMapper.getIngredients(recipeName);
    }

    @Override
    public List<RecipeBook> filter(String cookingTime, String ingredient, String nationality) {
        int time = Integer.parseInt(cookingTime);
        return recipeBookMapper.filter(time, ingredient, nationality);
    }

    @Override
    public int createRecipebyCulture(Integer cookingTime, String recipeName, String description, String nationality, String photoPath, String cultureBackground) throws Exception {
        int count = recipeBookMapper.createRecipebyCulture(cookingTime, recipeName, description, nationality, photoPath, cultureBackground);
        return count;
    }

    @Override
    public List<RecipeBook> getAllRecipe() {
        List<RecipeBook> recipe = recipeBookMapper.getAllRecipe();
        return recipe;
    }


}
