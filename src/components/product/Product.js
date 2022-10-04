import './Product.css'
import star from '../../imgs/star-s-fill.svg'
const product = (props) => {
  return (
    <div class="img-card">
          <img src={props.image} alt=""/>
          <div>
            <h2>{props.text}</h2>
            <div class="rating">
              <img class="star" src={star} alt=""/>
              <img class="star" src={star} alt=""/>
              <img class="star" src={star} alt=""/>
              <img class="star" src={star} alt=""/>
              <img class="star" src={star} alt=""/>
            </div>
          </div>
          <p>{props.price}</p>
    </div>
  )
}

export default product