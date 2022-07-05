import React from 'react'
import { useParams } from 'react-router-dom'
import './course.css'

const Course = () => {
    const params=useParams();
    const defaultvalue=()=>{
      console.log("cool")
    }
    defaultvalue()
    const item={
      id:"387882932",
      img:"https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/javascriptfull.png",
      title:"Javascript",
      about:"Не́которые иностра́нцы ду́мают, что в Росси́и медве́ди хо́дят по у́лицам. Коне́чно, э́то непра́вда! Медве́ди живу́т в лесу́ и не лю́бят люде́й.Не́которые иностра́нцы ду́мают, что в Росси́и медве́ди хо́дят по у́лицам. Коне́чно, э́то непра́вда! Медве́ди живу́т в лесу́ и не лю́бят люде́й.Не́которые иностра́нцы ду́мают, что в Росси́и медве́ди хо́дят по у́лицам. Коне́чно, э́то непра́вда! Медве́ди живу́т в лесу́ и не лю́бят люде́й.",
      description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      price:2800
    }
  return (
    <div>
      <div className="details" key={item._id}>
    <div className="big-img">
      <img src={item.img} alt=""/>
    </div>

    <div className="box">
      <div className="row">
        <h2>{item.title}</h2>
        <span>price:- ${item.price}</span>
      </div>
      <p>{item.description}</p>
      <button className="cart">Add to cart</button>

    </div>
  </div></div>
  )
}

export default Course