import React, { PureComponent } from 'react'

export class ArtsWorks extends PureComponent {
  render() {
    return (
      <div className='arts-works-container'>
        <div className="left">
        <div className="arts-works">
        <div className="img">
            <img src="" alt="" />
        </div>
        <div className="content">
        <h3>Namondo Wagmonde</h3>
        <p className='ellipses'>Wolumban Artifact Indigenous solutoions</p>
        <span>US$ 12, 000</span>
        </div>
        </div>
        <div className="arts-works">
        <div className="img">
            <img src="" alt="" />
        </div>
        <div className="content">
        <h3>Namondo Wagmonde</h3>
        <p className='ellipses'>Wolumban Artifact Indigenous solutoions</p>
        <span>US$ 12, 000</span>
        </div>
        </div>
        </div>

        <div className="right">
        <div className="arts-works">
        <div className="img">
            <img src="" alt="" />
        </div>
        <div className='content'>
        <h3>Namondo Wagmonde</h3>
        <p className='ellipses'>Wolumban Artifact Indigenous solutoions</p>
        <span>US$ 12, 000</span>
        </div>
        </div>
        <div className="arts-works">
        <div className="img">
            <img src="" alt="" />
        </div>
        <div>
        <h3>Namondo Wagmonde</h3>
        <p className='ellipses'>Wolumban Artifact Indigenous solutoions</p>
        <span>US$ 12, 000</span>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default ArtsWorks
