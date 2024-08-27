import { IonIcon } from '@ionic/react'
import { chevronForward, play } from 'ionicons/icons'
import React from 'react'
import { useIonRouter } from "@ionic/react";

function ProductList({ arts }: any) {

  const router = useIonRouter();
  
  function handleProductDetail(id:string) {
    router.push(`/creative/products/${id}`);
  }
  return (
    <div className='products-list-container'>
      {
        arts.map((art,index) => (
           <div className="product" key={index} onClick={()=>{handleProductDetail(art.id)}}>
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
                <span>See story</span>
                <IonIcon icon={chevronForward} />
            </button>
        </div>
      </div>
        ))
      }
     
    </div>
  )
}

export default ProductList
