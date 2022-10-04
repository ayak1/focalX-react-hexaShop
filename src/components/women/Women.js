import './Women.css'
import Product from '../product/Product'
import women1 from '../../imgs/women-01.jpg'
import women2 from '../../imgs/women-02.jpg'
import women3 from '../../imgs/women-03.jpg'
const Men = () => {
  return (
    <div className='women'>
        <div class="text">
        <h1>Women's Latest</h1>
        <p>Details to details is what makes Hexshop different from the other themes</p>
      </div>
    <div className="__imgs">
        <Product image={women1} text='New Green Jacket' price='$75.00'/>
        <Product image={women2} text='Classic Dress' price='$.00'/>
        <Product image={women3} text='Spring Collection' price='$150.00'/>
    </div>
</div>
  )
}

export default Men