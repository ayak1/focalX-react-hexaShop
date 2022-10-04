import './Men.css'
import Product from '../product/Product'
import men1 from '../../imgs/men-01.jpg'
import men2 from '../../imgs/men-02.jpg'
import men3 from '../../imgs/men-03.jpg'
const Men = () => {
  return (
    <div className='men'>
        <div className="text">
        <h1>Men's Latest</h1>
        <p>Details to details is what makes Hexshop different from the other themes</p>
      </div>
    <div className="__imgs">
        <Product  image={men1} text='Classic Spring' price='$120.00'/>
        <Product image={men2} text='Air Force 1X' price='$0.00'/>
        <Product image={men3} text='Love Nana 20' price='$150.00'/>
    </div>
</div>
  )
}

export default Men