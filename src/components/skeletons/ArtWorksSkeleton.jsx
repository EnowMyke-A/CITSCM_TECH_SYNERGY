import React from 'react';

function ArtWorksSkeleton() {
  return (
    <div className="arts-works-container-skeleton">
      <div className="left">
        <div className="arts-works-skeleton">
          <div className="img"></div>
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="arts-works-skeleton">
          <div className="img"></div>
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="arts-works-skeleton">
          <div className="img"></div>
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="arts-works-skeleton">
          <div className="img"></div>
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtWorksSkeleton;
