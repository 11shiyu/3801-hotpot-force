import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Styles.css';

import Cookie from '../img/cookie5.jpg';
import HeadImg from '../img/search3.png';
import Like1 from '../img/like1.png';
import Like2 from '../img/like2.png';

const SampleList = [
    {
        
    }
]

export default function Home() {

    // const [samples, setSamples] = useState(SampleList);

    return(
        <div className='body'>
            <div className='home-header'>
                <a>Explore</a>     <a>Quiz</a>
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