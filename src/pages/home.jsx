import Carousel from '../components/corousel';
import Content from '../components/content';
import '../home.css'
import Decors from '../components/decor'
import React, { Fragment } from "react";
import Section from '../components/section'
import Recentactivity from '../components/recentveiws'

const home =()=>{
return(
    <>
    <Fragment>
    <Section>
    <Carousel className="cor" />
  </Section>
  <section className='after-carousel'>
  <Content/>
  <Recentactivity/>
  </section>
  <Decors/>
  
  </Fragment>
  
  </>
  
);
}

export default home;
