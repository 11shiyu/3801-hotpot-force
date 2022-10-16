import React from 'react';
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

const SampleList = [
    {
        
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

    

    // const [samples, setSamples] = useState(SampleList);

    return(
        <>
        <div className='body'>
            <div className='home-header'>
            <button onClick={toHome} style={{textDecoration:'none'}} className='explore-btn'>Explore</button>      
            <button onClick={toQuiz} style={{float:'right', textDecoration:'none'}} className='quiz-btn'>Quiz</button>
            </div>
            <div className='section'>
                <Link to='/cookies'><img src={Cookie} className='section-img' alt='section-img'/></Link>
                <div className='section-desc'>Grapes Cream Cookies! Creamy and thick~</div>
                <div className='section-creater'>
                    <img src={HeadImg} />
                    <a>Nancy</a>
                    <img src={Like1}  style={{float:'right', width:'10%', marginRight:'5%'}}  onclick={Like} id='like1'/>
                    <img src={Like2}  style={{float:'right', width:'10%', marginRight:'5%', display:'none'}}  onclick={Like} id='like2'/>
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

// function Sample1({ task, completed, toggleCompleted }) {
    
//     return (
//         <section >
//             <div className='Sample-Section'>
//                 <Link to=''>
//                     <img src={Cookie} className='section-img' />
//                     <p>{task.description}</p>
//                     <div>
//                         <img src={HeadImg} className='person-img' />
//                         {task.name}
//                         <img src={Like1} className='like' onClick={1} />
//                     </div>
//                 </Link>
                
//             </div>
            
//         </section>
//     )
// }