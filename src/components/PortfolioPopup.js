// PortfolioPopup.js
import React from 'react';
import './PortfolioPopup.css';

const PortfolioPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="portfolioPopup">
      <button className="closeButton" onClick={onClose}>×</button>
      <div className="portfolioContent">
        {/* portfolio content */}
        <div className="top">
          <div className="headerImg">
            <img src="" alt="" />
          </div>
          <div className="intro">
          <h2>Status 100 Pr Site</h2>
          <p>
            A website redesign.
          </p>
          </div>
          <div className='context'>
            <span className='contextItem'>
              <p><b>My Role </b></p>
              <p>Designer</p>
            </span>
            <span className='contextItem'>
              <p><b>Team</b></p>
              <p>Solo</p>
            </span>
            <span className='contextItem'>
              <p><b>Timeline</b></p>
              <p>24h</p>
            </span>
            <span className='contextItem'>
              <p><b>Tools</b></p>
              <p>Figma</p>
            </span>
          </div>
        </div>

        <div className="images">

          <img src='/images/1.png' alt='1'/>
          <img src='/images/2.png' alt='2'/>
          <img src='/images/3.png' alt='3'/>
          <img src='/images/4.png' alt='4'/>
          <img src='/images/5.png' alt='5'/>
          <img src='/images/6.png' alt='6'/>
          <img src='/images/7.png' alt='7'/>
        </div>

      </div>
    </div>
  );
};

export default PortfolioPopup;
