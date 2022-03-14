import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import productData from '../assets/fake-data/products'

import {Link} from 'react-router-dom'
import Helmet from '../Components/Helmet'
import Button from '../Components/Button'
import CartItem from '../Components/CartItem'

import numberWithCommas from '../utils/numberWithCommas'



const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setcartProducts] = useState([])

    const [totalProducts, settotalProducts] = useState(0)

    const [totalPrice, settotalPrice] = useState(0)

    useEffect(() => {
        setcartProducts(productData.getCartItemsDetail(cartItems))
        settotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
        settotalPrice(cartItems.reduce((total, item) => total +(Number(item.quantity) * Number(item.price)), 0))
    }, [cartItems])

    return (
        <Helmet title="Giỏ hàng">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                      <p>
                          Bạn đang có {totalProducts} sản phẩm trong giỏ hàng
                      </p>
                      <div className="cart__info__txt__price">
                        <span>Thành tiền</span>
                        <span>{numberWithCommas(totalPrice)}</span>
                      </div>
                    </div>

                    <div className="cart__info__btn">
                        <Button size="block">Đặt Hàng </Button>
                        <Link to="/catalog">
                            <Button size="block">Tiếp tục mua hàng</Button>
                        </Link>
                    </div>
                </div>
                <div className="cart__list">
                    {
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index}/>
                        ))
                    }
                </div> 
            </div>
        </Helmet>
    )
}

export default Cart