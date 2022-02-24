import React, { useState } from 'react';
import "../styles/Sites.css";
import DarkPortfolio from "../Images/DarkPortfolio.png";
import Amazon from "../Images/Amazon-clone.png";
import Portfolioo from "../Images/Potfolio.png";
import Shoes from "../Images/Shoes.png";


function Sites() {
  
  const [ previews, setPreviews ] = useState([
    { name : "Andre's Dark Themed Portfolio", previewLink : "https://happy-sammet-72eb5f.netlify.app", previewImage : DarkPortfolio},
    { name : "Andre's Amazon Clone", previewLink : "https://optimistic-mahavira-2f3bd5.netlify.app/", previewImage: Amazon }, 
    { name : "Andre's First Portfolio site", previewLink : "https://happy-sammet-72eb5f.netlify.app/", previewImage: Portfolioo }, 
    { name : "Andre's Js shoe site", previewLink : "https://silly-swirles-c8861b.netlify.app/", previewImage: Shoes}

  ])

  return (
    <div className='sites__container'>
      {
        previews.map((preview) => <div className='sites'>
            <a href={preview.previewLink} target='_blank'>
              <img className='sites__preview' src={preview.previewImage} alt={preview.name} />
            </a>
          </div> )
      }
    </div>
    )
}

export default Sites;
