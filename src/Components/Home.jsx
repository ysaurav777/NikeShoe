import React from 'react'
import shoeimg from '../Assests/shoe_image.png';
import amazon from '../Assests/amazon.png';
import flipkart from '../Assests/flipkart.png';
import '../Styles/Home.scss';

const Home = () => {
  return (
    <main>
      <div>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES,YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div>
            <button className='shopbtn'>Shop Now</button>
            <button className='catbtn'>Category</button>
        </div>
        <p className='also'>Also Available On</p>
        <div>
            <img src={flipkart}/>
            <img src={amazon} className='amabtn'/>
        </div>
      </div>
      <div className='shoeimg'>
        <img src={shoeimg}/>
      </div>
    </main>
  )
}

export default Home