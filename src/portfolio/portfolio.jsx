import {useState, useEffect} from 'react';
import { FaArrowUp
} from "react-icons/fa";

import Header from "./component/Header/header";
import Home from "./component/Home/Home";
import About from "./component/About/about";
import Resume from './component/resume/resume';
import Work from './component/work/work';
import Testimonial from './component/testimonial/testimonial';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';

import './portfolio.css'

const Portfolio = () =>{
    // const headerRef = useRef();
    const [sticky, setSticky] = useState(false);
    const [scrolledSection, setScrolledSection] = useState('111');

    useEffect(()=>{
       window.onscroll = ScrollFun;
    });
    const ScrollFun = () =>{
        const startingHeight = 600;
        if(window.pageYOffset < startingHeight){
            setScrolledSection('111');
        }
        else if(window.pageYOffset >= startingHeight && window.pageYOffset <= 1170){
            setScrolledSection('112')
        }
        else if(window.pageYOffset >= 1171 && window.pageYOffset <= 2070){
            setScrolledSection('113')
        }
        else if(window.pageYOffset >= 2071 && window.pageYOffset <= 2670){
            setScrolledSection('114')
        }
        else if(window.pageYOffset >= 2672 && window.pageYOffset <= 2870){
            setScrolledSection('115')
        }
        else if(window.pageYOffset >= 2870 && window.pageYOffset <= 3670){
            setScrolledSection('116')
        }
        if(window.pageYOffset > startingHeight){
            setSticky(true);
        }else{
            setSticky(false);
        }
    }
    return (
        <div className="parent-container" >
            <Header sticky={sticky} scrolledSection={scrolledSection}/>
            <Home/>
            <About/>
            <Resume/>
            <Work/>
            <Testimonial/>
            <Contact/>
            <Footer/>
            <a href='#home' className='goto-top'><FaArrowUp style={{marginTop: '21px'}}/></a>
        </div>
    );
}

export default Portfolio;