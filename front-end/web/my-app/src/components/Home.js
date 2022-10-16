import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import '../css/Styles.css';
import Search from '../img/filter.png';
import HomeImg from '../img/home.png';
import Share from '../img/share.png';
import Shop from '../img/hot.png';
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
    console.log(user);

    const navigate= useNavigate();
    const toMe= () => {
        navigate('/me', {state: user})
    }
    const toHome= () => {
        navigate('/Home', {state: user})
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
    const toQuiz= () => {
        navigate('/Quiz', {state: user})
    }

    // const [samples, setSamples] = useState(SampleList);

    return(
        <>
        <div className='body'>
            <div className='home-header'>
            <button onClick={toHome} style={{marginLeft:'50pt', textDecoration:'none'}}>Explore</button>      
            <button onClick={toQuiz} style={{marginLeft:'100pt', textDecoration:'none'}}>Quiz</button>
            </div>
            <div className='section'>
                <Link to=''><img src={Cookie} className='section-img' alt='section-img'/></Link>
                <div className='section-desc'>Grapes Cream Cookies! Creamy and thick~</div>
                <div className='section-creater'>
                    <img src={HeadImg} />
                    <a>Nancy</a>
                    <img src={Like1}  style={{float:'right', width:'10%', marginRight:'5%'}}  onclick={Like} id='like1'/>
                    <img src={Like2}  style={{float:'right', width:'10%', marginRight:'5%', display:'none'}}  onclick={Like} id='like2'/>
                </div>
            </div>
        </div>
        <button onClick={toSearch}><img src={Search} className='search-img' /></button>
        <button onClick={toHome}><img src={HomeImg} className='home-img' /></button>
        <button onClick={toCreate}><img src={Share} className='share-img' /></button>
        <button onClick={toChecklist}><img src={Shop} className='shop-img' /></button>
        <button onClick={toMe}><img src={MeImg} className='me-img' /></button>
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