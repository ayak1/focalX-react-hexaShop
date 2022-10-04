import './Card.css'

const Card = (props) => {
  return (
    <div className="card" >
        <img src={props.image} alt='card' />
        <div className='card-text'>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
    </div>  
    )
}

export default Card