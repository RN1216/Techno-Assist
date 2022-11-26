import React from 'react';
import about from '../../../assets/about/about.jpg'

const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className='relative w-1/2 pl-5'>
         <img src={about} alt='about-img'></img>
          </div>
          <div className='w-1/2'>
              <p className='text-2xl font-bold text-primary'>About Us</p>
            <h1 className="my-10 text-5xl font-bold">We are expart <br/>& experience<br/> in this field</h1>
            <p className="py-6">Techno Assist give technology related services.Here we are repair computer parts and releted tools.We are expart and experience of our services. </p>
            <p className="py-6"> Recently we are selling some second-hand product which are good and cheap price. Our services is now availiable on our website. </p>
            
          </div>
        </div>
      </div>
    );
};

export default About;