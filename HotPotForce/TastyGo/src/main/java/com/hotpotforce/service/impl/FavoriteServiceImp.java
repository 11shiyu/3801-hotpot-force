package com.hotpotforce.service.impl;

import com.hotpotforce.mapper.FavoriteMapper;
import com.hotpotforce.pojo.Favorite;
import com.hotpotforce.pojo.RecipeBook;
import com.hotpotforce.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FavoriteServiceImp implements FavoriteService {

    @Autowired
    private FavoriteMapper favoriteMapper;


    @Override
    public int addedFavorited(String username, Long recipeID) throws Exception {
        return favoriteMapper.addedFavorite(username, recipeID);
    }

    @Override
    public int addedFavoriteRecipeName(String username, String recipeName) throws Exception {
        return favoriteMapper.addedFavoriteRecipeName(username, recipeName);
    }

    @Override
    public List<Favorite> checkIsFavoriteByName(String username, String recipeName) {
        return favoriteMapper.checkIsFavoriteByName(username, recipeName);
    }

    @Override
    public List<Favorite> checkIsFavorite(String username, Long recipeID) {
        return favoriteMapper.checkIsFavorite(username, recipeID);
    }

    @Override
    public int removeFavorite(String username, Long recipeID) {
        return favoriteMapper.removeFavorite(username, recipeID);
    }

    @Override
    public Boolean removeFavoriteByName(String username, String recipeName) {
        Boolean flag = false;
        int reuslt = favoriteMapper.removeFavoriteByName(username, recipeName);
        if (reuslt == 1) {
            return true;
        } else {
            return false;
        }
//        return favoriteMapper.removeFavoriteByName(username, recipeName);
    }

    @Override
    public List<RecipeBook> getFavorites(String username) {
        try {
            return favoriteMapper.getFavorites(username);
        } catch (Exception e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }
}
