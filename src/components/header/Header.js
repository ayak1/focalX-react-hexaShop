import './Header.css'
import leftCard from '../../left-banner-image.jpg'
import card1 from '../../baner-right-image-01.jpg'
import card2 from '../../baner-right-image-02.jpg'
import card3 from '../../baner-right-image-03.jpg'
import card4 from '../../baner-right-image-04.jpg'
import Card from '../card/Card'
const Header = () => {
    // const cardsList = [
    //                {title:'Women'         ,   text:'Best Clothes For Women'  ,  img:'baner-right-image-01.jpg'},
    //                {title:'Men'           ,   text:'Best Clothes For Men'    ,  img:'baner-right-image-02.jpg'},
    //                {title:'Kids'          ,   text:'Best Clothes For Kids'   ,  img:'baner-right-image-03.jpg'},
    //                {title:'Accessories'   ,   text:'Best Trend Accessories'  ,  img:'baner-right-image-04.jpg'},
    //             ];
    // const cards = cardsList.map( (card) => 
    // <Card title={card.title} text={card.text} image={card.img}/>
    // )
  return (
    <div class="container">
    <div class="header">
      <div class="left-container">
        <div class="left">
         <Card title='We Are Hexashop' text='Awesome,clear,&creative HTMl5 Template' image={leftCard} />
        </div>
      </div>
      <div class="right">
        <div class="right-cards-container">
        <Card title='Women' text='Best Clothes For Women' image={card1} />
        <Card title='Men' text='Best Clothes For Men' image={card2} />          
        </div>
        <div class="right-cards-container">
        <Card title='Kids' text='Best Clothes For Kids' image={card3} />
        <Card title='Accessories' text='Best Trend Accessories' image={card4} />         
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header