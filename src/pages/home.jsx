import Carousel from '../components/corousel';
import Content from '../components/content';
import '../home.css'
import DisountBanner from '../components/discount'
import Decors from '../components/decor'
import Categories from '../components/decorcategories'
import React, { Fragment } from "react";
import Section from '../components/section'
import Recentactivity from '../components/recentveiws'
import Offers from '../components/offer'

const home =()=>{
return(
    <>
    <Fragment>
    <Section>
    <Carousel className="cor" />
  </Section>
  </Fragment>
  <section className='after-carousel'>
  <Content/>
  <Recentactivity/>
  <Decors/>
  <Categories/>
  <DisountBanner/>
  <Offers/>
   </section>
   </>
  
);
}

export default home;
