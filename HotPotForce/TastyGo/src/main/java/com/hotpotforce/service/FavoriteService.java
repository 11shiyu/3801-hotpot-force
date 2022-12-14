package com.hotpotforce.service;

import com.hotpotforce.pojo.Favorite;
import com.hotpotforce.pojo.RecipeBook;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface FavoriteService {

    int addedFavorited(String username, Long recipeID) throws Exception;

    int addedFavoriteRecipeName(String username, String recipeName) throws Exception;

    List<Favorite> checkIsFavoriteByName(String username, String recipeName);

    List<Favorite> checkIsFavorite(String username, Long recipeID);

    int removeFavorite(String username, Long recipeID);

    Boolean removeFavoriteByName(String username, String recipeName);

    List<RecipeBook> getFavorites(@Param("username") String username);

}
