import React, {useState} from "react";
import Category from "../category/category.component";
import './directory.styles.scss';
import {MdReplay} from 'react-icons/md';
import {FaTruck} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';
import illustration from '../../assets/5209958.jpg';
import profile from '../../assets/profile.jfif';
import vopsea from '../../assets/vopsea.jpg';
import tapet from '../../assets/tapet.jpg';
import adeziv from '../../assets/adezivi.png';
import mocheta from '../../assets/mocheta.webp';

const Directory = () => {
    const [category, setCategory] = useState([
        {
          title: 'Tapet',
          imageUrl: tapet,
          id: 1,
          linkUrl: 'search/tapet'
        },
        {
          title: 'Profile Decorative',
          imageUrl: profile,
          id: 2,
          linkUrl: 'search/profile'
        },
        {
          title: 'Mocheta',
          imageUrl: mocheta,
          id: 3,
          linkUrl: 'search/mocheta'
        },
        {
          title: 'Vopsea Decorativa',
          imageUrl: vopsea,
          id: 4,
          linkUrl: 'search/vopsea'
        },
        {
          title: 'Decoratiuni',
          imageUrl: 'https://dclteam.ro/wp-content/uploads/2021/06/decoratiuni-interioare-800x800px-7.jpg',
          id: 5,
          linkUrl: 'search/decoratiuni'
        },
        {
          title: 'Adezivi',
          imageUrl: adeziv,
          id: 6,
          bg: 'bg',
          linkUrl: 'search/decoratiuni'
        }
    ]);

    return (
        <>
          <div className="directory-menu">
              {
                  category.map(section => (
                      <Category 
                        key={section.id} 
                        title={section.title} 
                        imageUrl={section.imageUrl} 
                        bg={section.bg} 
                        linkUrl={section.linkUrl}
                      />
                  ))
              }
          </div>
          <div className="beneficii">
            <div className="benef-section">
              <div>
                  <MdReplay size={30} />
              </div>
              <div className="benef-text">
                <h3>DREPT DE RETUR 14 ZILE</h3>
                <p>Aveti posibilitatea de a returna produsele comandate timp de 14 zile calendaristice.</p>
              </div>
            </div>
            <div className="benef-section">
              <div>
                <FaTruck size={30} />
              </div>
              <div className="benef-text">
                <h3>LIVRARE RAPIDA DIN STOC</h3>
                <p>Iti asiguram livrarea in 24-48 de ore in toata tara la produsele aflate pe stoc!</p>
              </div>
            </div>
            <div className="benef-section">
              <div>
                <FaPhone size={30} />
              </div>
              <div className="benef-text">
                <h3>CONSULTANTA GRATUITA</h3>
                <p>Oferim consultanță telefonică clienților noștri pentru alegerea produselor potrivite.</p>
              </div>
            </div>
          </div>

          <div className="avantaje">
            <div className="img-container">
              <img src={illustration} alt="" />
            </div>
            <div className="avantaje-text">
              <div>
                <h3>Avantaje daca cumparati de la noi</h3>
              </div>
              <ul>
                <li>
                  Garantia unui produs original.
                </li>
                <li>
                  Consultanta telefonica.
                </li>
                <li>
                  Drept de retur 14 zile calendaristice.
                </li>
                <li>
                  Plata cu cardul Online 0% comision.
                </li>
                <li>
                  Livrare rapida in toata tara.
                </li>
              </ul>
            </div>
          </div>
        </>
    )
}

export default Directory;