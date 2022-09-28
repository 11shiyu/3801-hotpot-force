package com.hotpotforce.controller;

import com.hotpotforce.pojo.Favorite;
import com.hotpotforce.pojo.Ingredient;
import com.hotpotforce.pojo.RecipeBook;
import com.hotpotforce.pojo.Users;
import com.hotpotforce.service.FavoriteService;
import com.hotpotforce.service.RecipeService;
import com.hotpotforce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @Autowired
    private UserService userService;

    @Autowired
    private FavoriteService favoriteService;

    @GetMapping("/searchRecipe")
    public RecipeBook searchRecipe(String recipeName) {
        RecipeBook recipeBook = recipeService.searchRecipe(recipeName);
//        System.out.println("recipeBook: " + recipeBook);
        return recipeBook;
    }

    @Transactional
    @PostMapping("/createRecipe")
    public boolean createRecipe(Integer cookingTime, String recipeName, String description,
//                                List<String> ingredients,
                                String nationality, String photoPath) {
        int result = 0;
        if (description.length() > 0) {
            try {
                result = recipeService.createRecipe(cookingTime, recipeName, description, nationality, photoPath);
                // insert ingredeint to DB
//                System.out.println("ingredients: " + ingredients);
//                for (String ingredient : ingredients) {
//                    recipeService.insertIngredient(recipeName, ingredient);
//                }
            } catch (Exception e) {
                e.printStackTrace();
//                result = 0;
            }
        }
        return result != 0;
    }



    @PostMapping("/addedFavorite")
    public Boolean addedFavorite(Long recipeID, Long userID) {
        /**
         *
         *
         *  1. get the user with given userID
         *  2. get the recipe that user added to the favourite list
         *  3. check if it is already in the favorite
         *  4. added the user and the recipe into the table linked together
         */
        Boolean flag = false;
        // 1 add count += 1
//        int success = recipeService.addLikeCount(userID);

        // 1 get the user
        Users user = userService.getUserByID(userID);
        // 2. get the recipe that user want to add into favorite
        RecipeBook recipeBook = recipeService.getRecipeByID(recipeID);
        String username = user.getUsername();
        List<Favorite> exist = favoriteService.checkIsFavorite(username, recipeID);
        if (exist.size() == 0) {
//        System.out.println("Controller user: " + user);
//            System.out.println(recipeBook);
            try {
                favoriteService.addedFavorited(user.getUsername(), recipeBook.getID());
                flag = true;
//                System.out.println("added to favorite");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return flag;
    }

//    public Boolean removeFavorite() {
//        return false;
//    }
}
