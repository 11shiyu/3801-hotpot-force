import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import '../css/Styles.css';
import SearchImg from '../img/filter.png';
import HomeImg from '../img/home.png';
import ShareImg from '../img/share.png';
import ShopImg from '../img/hot.png';
import MeImg from '../img/me.png';

import Cookie from '../img/cookie5.jpg';
import HeadImg from '../img/search3.png';
import Like1 from '../img/like1.png';
import Like2 from '../img/like2.png';
import image1 from '../img/Adobo.jpg';
import image2 from '../img/Sushi.jpg';
import image3 from '../img/Rice-Paper-Rolls.jpg';
import image4 from '../img/Pizza.jpg';

const recipeList = [
    {
        cookingTime: 17,
        recipeName: "Adobo",
        description: "A way of cooking introduced by the Spanish and Portuguese led to adobo, a traditional Philippine dish. Chicken or pork are marinated and cooked in white vinegar, soy sauce, garlic, peppercorns and bay leaves, then poured over rice for a flavorful combination.",
        nationality: "Philippines",
        photoPath: '../img/Adobo.jpg',
        cultureBackground: "Like many cultures based in warm climates, Filipino natives developed various methods of preserving food. Adobo utilizes the acid in the vinegar and the high salt content of soy sauce to produce an undesirable environment for bacteria. Its delicious flavor and preserving qualities served to increase adobo's popularity. The adobo was traditionally cooked in clay pots but today is made in more common metal pots or woks.\n\nWhen the Spanish invaded and settled in the Philippines during the 16th century, they witnessed this traditional Filipino cooking method and called it adobo, which is the Spanish word for marinade.",
        id: 1
    },
    {
        cookingTime: 18,
        recipeName: "Sushi",
        description: "Using vinegared rice wrapped in thin sheets of seaweed, cucumber, shiso or soy paper leaves, sushi isn't always a fish dish; it's anything rolled with the rice, from veggies to meats to, yes, raw fish (sashimi).",
        nationality: "Japan",
        photoPath: '../img/Sushi.jpg',
        cultureBackground: "The concept of sushi was likely introduced to Japan in the ninth century, and became popular there as Buddhism spread.\nIn the 1820s, a man named Hanaya Yohei found himself in Edo. Yohei is often considered the creator of modern nigiri sushi, or at the very least its first great marketer. In 1824, Yohei opened the first sushi stall in the Ryogoku district of Edo. Ryogoku translates to the place between two countries because of its location along the banks of the Sumida River. Yohei chose his location wisely, setting up his stall near one of the few bridges that crossed the Sumida. He took advantage of a more modern speed fermentation process, adding rice vinegar and salt to freshly cooked rice and letting it sit for a few minutes. He then served the sushi in a hand-pressed fashion, topping a small ball of rice with a thin slice of raw fish, fresh from the bay. Because the fish was so fresh, there was no need to ferment or preserve it. Sushi could be made in a matter of minutes, rather than in hours or days.",
        id: 2
    },
    {
        cookingTime: 19,
        recipeName: "Rice Paper Rolls",
        description: "1.	Peanut Sauce: Combine the Peanut Dipping Sauce ingredients. Mix briefly (it won’t come together), then microwave for 30 seconds. Mix again until smooth. Set aside to cool. Adjust sour with vinegar, salt with salt and spiciness to taste.  Thickness can be adjusted with milk or water once cooled.\n2.	Place vermicelli noodles in a bowl and cover with warm water for 2 minutes, then drain (or follow packet instructions).\n3.	Peel the prawns, slice in half lengthwise and devein (watch video).\n4.	Remove the crunchy core of the lettuce leaves (watch video).\n5.	Tip – LETTUCE BUNDLE (Note 4): Place some vermicelli noodles and bean sprouts in a lettuce leaf, then roll it up, finishing seam side down. Repeat.\n6.	Fill a large bowl with warm water. The bowl doesn’t need to be large enough to fit the whole rice paper in one go.\n7.	Place two rice papers together (if using 2). Note which side is the smooth side – this is supposed to be the outside of the spring roll. Submerge the rice papers into the water (both of them at the same time, together) for 2 seconds. If your bowl isn’t large enough to fit the whole rice paper in one go, that’s fine, just rotate it and count 2 seconds for each section you submerge into the water.\n8.	Place both the rice papers (one on top of the other, they will stick together) on a board or the counter with the smooth side down.\n9.	On the top part of the rice paper, place 3 prawns with a mint leaf in between, as per the photo below.\n10.	Place the lettuce bundle with the seam side down onto the middle of the rice paper.\n11.	Fold the left and right edges of the rice paper in, then starting from the bottom, roll up to cover the lettuce bundle. Then keep rolling firmly. The rice paper is sticky, it will seal itself.\n12.	If you placed the ingredients on the rice paper as per the photo below, your rice paper rolls should look pretty with the prawn and mint leaves on the smooth side of the roll and the seam on the side or underside of the roll.\n13.	Serve immediately with the peanut dipping sauce.",
        nationality: "Vietnamese",
        photoPath: "../img/Rice-Paper-Rolls.jpg",
        cultureBackground: "culture Background",
        id: 3
    },
    {
        cookingTime: 20,
        recipeName: "Pizza Margherita",
        description: "Step 1. \nPlace a pizza stone or tiles on the middle rack of your oven and turn heat to its highest setting. Let it heat for at least an hour.\nStep 2. \nPut the sauce in the center of the stretched dough and use the back of a spoon to spread it evenly across the surface, stopping approximately ½ inch from the edges.\nStep 3. \nDrizzle a little olive oil over the pie. Break the cheese into large pieces and place these gently on the sauce. Scatter basil leaves over the top.\nStep 4. \nUsing a pizza peel, pick up the pie and slide it onto the heated stone or tiles in the oven. Bake until the crust is golden brown and the cheese is bubbling, approximately 4 to 8 minutes.",
        nationality: "Margherita",
        photoPath: "../img/Pizza.jpg",
        cultureBackground: "In June 1889 the pizzaiolo Raffaele Esposito, Pizzeria Brandi's chef, invented a dish called 'Pizza Margherita' in honor of the Queen of Italy, Margherita of Savoy, and the Italian unification, since toppings are tomato (red), mozzarella (white) and basil (green), ingredients inspired by the colors of the national flag of Italy.\nThe origins of Pizza Margherita came from mixing similar toppings that were was already present in Naples between 1796 and 1810. In 1849 Emanuele Rocco recorded different pizza toppings like basil, tomatoes and thin slices of mozzarella; the mozzarella was thinly sliced, and added to the toppings already present.",
        id: 4
    }
]

export default function Home() {
    const user = useLocation().state;
    const navigate= useNavigate();
    const toHome= () => {
        navigate('/Home', {state: user})
    }
    const toQuiz= () => {
        navigate('/Quiz', {state: user})
    }
    function NavBar() {
        console.log(user);
        const toMe= () => {
            navigate('/me', {state: user})
        }
        const toCreate= () => {
            navigate('/Create', {state: user})
        }
        const toSearch= () => {
            navigate('/Search', {state: user})
        }
        const toChecklist= () => {
            navigate('/Checklist', {state: user})
        }
        return (
            <div className='navigation-bar'>
            <button onClick={toSearch} className='searchBtn'><img src={SearchImg} className='search-img' />Search</button>
            <button onClick={toHome} className='homeBtn'><img src={HomeImg} className='home-img' />Home</button>
            <button onClick={toCreate} className='createBtn'><img src={ShareImg} className='share-img' /></button>
            <button onClick={toChecklist} className='checklistBtn'><img src={ShopImg} className='shop-img' />CheckList</button>
            <button onClick={toMe} className='meBtn'><img src={MeImg} className='me-img' />Me</button>
            </div>
        )
    }

    // const initialRecipes = [];
    // const [recipes, setRecipes] = useState(initialRecipes);
    // useEffect(() => {
    //     getData();
    // }, []);
    // const allRecipesRUL = `http://localhost:8080/getAllRecipes`;

    // async function getData() {
    //     const response = await fetch(allRecipesRUL);
    //     const recipes = await response.json();
    //     setRecipes(recipes)
    //     console.log("now recipes:", recipes)
    // }


    console.log("recipeList type", typeof recipeList)
    return(
        <>
        <div className='body'>
            <div className='home-header'>
            <button onClick={toHome} style={{textDecoration:'none'}} className='explore-btn'>Explore</button>      
            <button onClick={toQuiz} style={{float:'right', textDecoration:'none'}} className='quiz-btn'>Quiz</button>
            </div>
            <div className='section'>
                <Link to='/cookies'><img src={Cookie} className='section-img' alt='section-img' /></Link>
                <div className='section-desc'>Grapes Cream Cookies! Creamy and thick~</div>
                <div className='section-creater'>
                    <img src={HeadImg} />
                    <a>Nancy</a>
                    <img src={Like1}  style={{float:'right', width:'10%', marginRight:'5%'}}  onclick={Like} id='like1'/>
                    <img src={Like2}  style={{float:'right', width:'10%', marginRight:'5%', display:'none'}}  onclick={Like} id='like2'/>
                </div>
            </div>
            {/* {recipeList.map((recipe) => (
                <Recipe
                key={recipe.id}
                {...recipe}
                recipeName = {recipe.recipeName}
                photoPath = {recipe.photoPath}
                />
            ))} */}

            <div className='section'>
                <Link to=''><img src={require('../img/Adobo.jpg')} height="333" weight="800" className='section-img' alt='section-img'/></Link>
                <div className='section-desc'>Adobo</div><br/>
                <div className='section-creater'>
                    <img src={HeadImg} />
                    <a>Penda</a>
                    <img src={Like1}  style={{float:'right', width:'10%', marginRight:'5%'}}  onClick={Like} id='like1'/>
                    <img src={Like2}  style={{float:'right', width:'10%', marginRight:'5%', display:'none'}}  onClick={Like} id='like2'/>
                </div>
            </div>
                <div className='section'>
                <Link to=''><img src={image2} height="333" weight="800" className='section-img' alt='section-img'/></Link>
                <div className='section-desc'>Sushi</div><br/>
                <div className='section-creater'>
                    <img src={HeadImg} />
                    <a>Max</a>
                    <img src={Like1}  style={{float:'right', width:'10%', marginRight:'5%'}}  onClick={Like} id='like1'/>
                    <img src={Like2}  style={{float:'right', width:'10%', marginRight:'5%', display:'none'}}  onClick={Like} id='like2'/>
                </div>
            </div>
            <div className='section'>
                <Link to=''><img src={image3} height="333" weight="800" className='section-img' alt='section-img'/></Link>
                <div className='section-desc'>Rice Paper Rolls</div><br/>
                <div className='section-creater'>
                    <img src={HeadImg} />
                    <a>Leo</a>
                    <img src={Like1}  style={{float:'right', width:'10%', marginRight:'5%'}}  onClick={Like} id='like1'/>
                    <img src={Like2}  style={{float:'right', width:'10%', marginRight:'5%', display:'none'}}  onClick={Like} id='like2'/>
                </div>
            </div>
            <div className='section'>
                <Link to=''><img src={image4} height="333" weight="800" className='section-img' alt='section-img'/></Link>
                <div className='section-desc'>Pizza</div><br/>
                <div className='section-creater'>
                    <img src={HeadImg} />
                    <a>Nelson</a>
                    <img src={Like1}  style={{float:'right', width:'10%', marginRight:'5%'}}  onClick={Like} id='like1'/>
                    <img src={Like2}  style={{float:'right', width:'10%', marginRight:'5%', display:'none'}}  onClick={Like} id='like2'/>
                </div>
            </div>
        </div>



        {NavBar()}
        </>
    )
}

function Like() {
    var state1 = document.getElementById('like1');
    var state2 = document.getElementById('like2');
    console.log(state1.style.display)
    if (state1.style.display === "block") {
        state1.style.display = "none";
        state2.style.display = "block";
    } else {
        state1.style.display = "block";
        state2.style.display = "none";
    }
    
}

function Recipe({recipeName, photoPath}) {
    console.log("photo->", photoPath)

    return(
        <>
        <div className='body'>
            <div className='section'>
                <Link to=''><img src={image1} className='section-img' alt='section-img'/></Link>
                <div className='section-desc'>{recipeName}</div>
                <div className='section-creater'>
                    <img src={HeadImg} />
                    <a>Nancy</a>
                    <img src={Like1}  style={{float:'right', width:'10%', marginRight:'5%'}}  onClick={Like} id='like1'/>
                    <img src={Like2}  style={{float:'right', width:'10%', marginRight:'5%', display:'none'}}  onClick={Like} id='like2'/>
                </div>
            </div>
        </div>
        </>
    )
}