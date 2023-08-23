import React from 'react'
import './productCard.css'
import ProdImg from '../logo.svg'

function productCard(props) {
    // const images = Array(props.stars).fill('../../public/logo512.png');
    const images = Array(parseInt(props.stars)).fill(ProdImg);
    // const status = props.status;
    return (
        <div className='prod-Card'>
            {/* <div className='img-conntent'> */}
                <div className="imgPC">
                <div className={`banner ${props.status}` }></div>
                     <img className='prodIMG' src={props.img} alt='productImage' />
                </div>
            {/* </div> */}
            <div className="detailsPC">
                <h3 className='disc'>{props.discription}</h3>
                <div className='pricePC'>
                    <span className='afterPC'>${parseInt(props.price)*0.2}</span> {/* 2% discount */}
                    <span className='beforePC text-dull'>${props.price}</span>
                </div>
                <div className='rating'>
                    <div className="image-containerPC">
                        {images.map((image, index) => (
                            <img className='imgTag' key={index} src={image} alt={` ${index}`} />
                        ))}
                    </div>
                    <span className='text-dull'>{props.NoOfReviews}</span>
                </div>
            </div>
        </div>
    )
}

export default productCard