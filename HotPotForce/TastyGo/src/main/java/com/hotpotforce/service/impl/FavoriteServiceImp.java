package com.hotpotforce.service.impl;

import com.hotpotforce.mapper.FavoriteMapper;
import com.hotpotforce.pojo.Favorite;
import com.hotpotforce.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public int removeFavoriteByName(String username, String recipeName) {
        return favoriteMapper.removeFavoriteByName(username, recipeName);
    }

    @Override
    public List<String> getFavorites(String username) {
        return favoriteMapper.getFavorites(username);
    }
}
