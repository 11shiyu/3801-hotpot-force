package com.hotpotforce.mapper;

import com.hotpotforce.pojo.RecipeBook;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface RecipeBookMapper {

//    @Select("select * from recipe where recipeName = #{recipeName}")
//    @Select("select * from recipe where recipeName like concat('%',#{recipeName} ,'%')")
    List<RecipeBook> searchRecipeByName(@Param("recipeName") String recipeName);

    @Insert("insert into recipe(cookingTime, recipeName, description, nationality, photoPath) values (#{cookingTime}, #{recipeName}, #{description}, #{nationality}, #{photoPath})")
    int createRecipe(@Param("cookingTime") Integer cookingTime, @Param("recipeName") String recipeName,
                     @Param("description") String description, @Param("nationality") String nationality,
                     @Param("photoPath") String photoPath);


    @Insert("insert into recipe(cookingTime, recipeName, description, nationality, photoPath, cultureBackground) values (#{cookingTime}, #{recipeName}, #{description}, #{nationality}, #{photoPath}, #{cultureBackground})")
    int createRecipeCulture(@Param("cookingTime") Integer cookingTime, @Param("recipeName") String recipeName,
                     @Param("description") String description, @Param("nationality") String nationality,
                     @Param("photoPath") String photoPath, @Param("cultureBackground") String cultureBackground);

    @Select("select * from recipe where ID = #{ID}")
    RecipeBook getRecipeByID(@Param("ID") Long ID);


    @Insert("insert into ingredients(recipeName, ingredient) values (#{recipeName}, #{ingredient})")
    int insertIngredient(@Param("recipeName") String recipeName, @Param("ingredient") String ingredient);

    @Select("select ingredient from ingredients where recipeName=#{recipeName}")
    List<String> getIngredients(@Param("recipeName") String recipeName);

    List<RecipeBook> filter(@Param("cookingTime") int cookingTime, @Param("ingredient") String ingredient, @Param("nationality") String nationality );

    @Select("select * from recipe")
    List<RecipeBook> getAllRecipe();
}
