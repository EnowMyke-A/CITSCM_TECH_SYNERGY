import { IonIcon } from '@ionic/react'
import { play } from 'ionicons/icons'
import React from 'react'

function ProductList() {
  return (
    <div className='products-list-container'>
      <div className="product">
        <div className="img">
            <img src="" alt="" />
        </div>
        <div className="content">
            <div>
                <h3>Pa Tabe Ndong</h3>
                <p className='ellipses'>Name of artwork that says a lot about</p>
                <p>US$ 12, 000</p>
            </div>
            <button className="see-story">
                <IonIcon icon={play} />
                <span>See story</span>
            </button>
        </div>
      </div>
      <div className="product">
        <div className="img">
            <img src="" alt="" />
        </div>
        <div className="content">
            <div>
                <h3>Pa Tabe Ndong</h3>
                <p>Name of artwork</p>
                <p>US$ 12, 000</p>
            </div>
            <button className="see-story">
                <IonIcon icon={play} />
                <span>See story</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default ProductList
