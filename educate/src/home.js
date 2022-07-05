import React ,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import javascript from '../src/javascript.png'
import Card from "./card";
import reactimg from '../src/react.jpg'
import koa from '../src/koa.jpg'
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate=useNavigate();
  
    useEffect(()=>{
      const localstorage=()=>{
        const getToken=localStorage.getItem("jwtToken");
        console.log(getToken)
        if(!getToken){
          console.log("going");
          navigate("/signup")
        }
      }
      localstorage()
        Aos.init();
    },[])
  return (
    <section className="py-4 py-lg-5 container">
      <div className="row">
      <Card aos={"fade-left"} aos_offset={200} description={"Some quick example text to build on the card title and make up the bulk of the card's content."} img={"https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/javascriptfull.png"} title={"javascript"}/>
      <Card aos={"fade-up"} aos_offset={200} description={"Some quick example text to build on the card title and make up the bulk of the card's content."} img={"https://miro.medium.com/max/875/0*do8Uj7aNvSzvwVcR.png"} title={"koa"}/>
      <Card aos={"fade-up"} aos_offset={200} description={"Some quick example text to build on the card title and make up the bulk of the card's content."} img={"https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/reactcourse.png"} title={"React"}/>
      <Card aos={"fade-right"} aos_offset={200} description={"Some quick example text to build on the card title and make up the bulk of the card's content."} img={koa} title={"React"}/>
      <Card aos={"fade-left"} aos_offset={200} description={"Some quick example text to build on the card title and make up the bulk of the card's content."} img={javascript} title={"javascript"}/>
      <Card aos={"fade-up"} aos_offset={200} description={"Some quick example text to build on the card title and make up the bulk of the card's content."} img={reactimg} title={"React"}/>
      <Card aos={"fade-up"} aos_offset={200} description={"Some quick example text to build on the card title and make up the bulk of the card's content."} img={koa} title={"Koa"}/>
      <Card aos={"fade-left"} aos_offset={200} description={"Some quick example text to build on the card title and make up the bulk of the card's content."} img={javascript} title={"javascript"}/>
      <Card aos={"fade-right"} aos_offset={200} description={"Some quick example text to build on the card title and make up the bulk of the card's content."} img={reactimg} title={"React"}/>
      <Card aos={"fade-up"} aos_offset={200} description={"Some quick example text to build on the card title and make up the bulk of the card's content."} img={koa} title={"Koa"}/>
      </div>
    </section>
  );
};

export default Home;
