import './Kids.css'
import Product from '../product/Product'
import kids1 from '../../imgs/kid-01.jpg'
import kids2 from '../../imgs/kid-02.jpg'
import kids3 from '../../imgs/kid-03.jpg'
const Men = () => {
  return (
    <div className='kids'>
        <div class="text">
        <h1>kids's Latest</h1>
        <p>Details to details is what makes Hexshop different from the other themes</p>
      </div>
    <div className="__imgs">
        <Product image={kids1} text='New Green Jacket' price='$75.00'/>
        <Product image={kids2} text='Classic Dress' price='$.00'/>
        <Product image={kids3} text='Spring Collection' price='$150.00'/>
    </div>
</div>
  )
}

export default Men