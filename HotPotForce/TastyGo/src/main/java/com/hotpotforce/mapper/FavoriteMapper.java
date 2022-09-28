package com.hotpotforce.mapper;

import com.hotpotforce.pojo.Favorite;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface FavoriteMapper {

    @Insert("insert into favorite(username, recipeID) values (#{username}, #{recipeID})")
    int addedFavorite(@Param("username") String username, @Param("recipeID") Long recipeID);

    @Insert("insert into favorite(username, recipeName) values (#{username}, #{recipeName})")
    int addedFavoriteRecipeName(@Param("username") String username, @Param("recipeName") String recipeName);

    @Select("SELECT * FROM favorite where username=#{username} and recipeID=#{recipeID}")
    List<Favorite> checkIsFavorite(@Param("username") String username, @Param("recipeID") Long recipeID);

    @Select("SELECT * FROM favorite where username=#{username} and recipeName=#{recipeName}")
    List<Favorite> checkIsFavoriteByName(@Param("username") String username, @Param("recipeName") String recipeName);

    @Delete("delete from favorite where username = #{username} and recipeID = #{recipeID}")
    int removeFavorite(@Param("username") String username, @Param("recipeID") Long recipeID);

    @Delete("delete from favorite where username = #{username} and recipeName = #{recipeName}")
    int removeFavoriteByName(@Param("username") String username, @Param("recipeName") String recipeName);

    @Select("SELECT recipeName FROM favorite where username=#{username}")
    List<String> getFavorites(@Param("username") String username);


}
