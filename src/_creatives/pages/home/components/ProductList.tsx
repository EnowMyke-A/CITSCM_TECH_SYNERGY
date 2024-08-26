import { IonIcon } from '@ionic/react'
import { play } from 'ionicons/icons'
import React from 'react'

function ProductList({arts}:any) {
  return (
    <div className='products-list-container'>
      {
        arts.map((art,index) => (
           <div className="product" key={index}>
        <div className="img">
            <img src={art.product_link} alt="image" />
        </div>
        <div className="content">
            <div>
            <h3>{ art.author_name}</h3>
            <p className='ellipses'>{ art.product_name}</p>
            <p>US$ { art.product_price}</p>
            </div>
            <button className="see-story">
                <IonIcon icon={play} />
                <span>See story</span>
            </button>
        </div>
      </div>
        ))
      }
     
    </div>
  )
}

export default ProductList
