import React from 'react';
import ArtWorksSkeleton from './skeletons/ArtWorksSkeleton'

function ArtsWorks({ arts }:any) {
    return (
        // <div className='arts-works-container'>
        //     {arts.map((art, index) => {
        //         if (index % 2 === 0) {
        //             return (
        //                 <div className="left" key={index}>
        //                     <div className="arts-works">
        //                         <div className="img">
        //                             <img src={art.product_link} alt={art.title} />
        //                         </div>
        //                         <div className="content">
        //                             <h3>{art.author_name}</h3>
        //                             <p className='ellipses'>{art.product_name}</p>
        //                             <span>US$ {art.product_price}</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             );
        //         } else {
        //             return (
        //                 <div className="right" key={index}>
        //                     <div className="arts-works">
        //                         <div className="img">
        //                             <img src={art.product_link} alt={art.title} />
        //                         </div>
        //                         <div className="content">
        //                             <h3>{art.author_name}</h3>
        //                             <p className='ellipses'>{art.product_name}</p>
        //                             <span>US$ {art.product_price}</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             );
        //         }
        //     })}
        // </div>

        <ArtWorksSkeleton />
    );
}

export default ArtsWorks;
