import React, {useState} from "react";
import Category from "../Category/category.component";
import './directory.styles.scss';
import {MdReplay} from 'react-icons/md';
import {FaTruck} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';
import illustration from '../../assets/5209958.jpg';

const Directory = () => {
    const [category, setCategory] = useState([
        {
          title: 'Tapet',
          imageUrl: 'https://i.dedeman.ro/media/catalog/product/cache/dedeman/image/9df78eab33525d08d6e5fb8d27136e95/8/0/8039411.jpg',
          id: 1,
          linkUrl: 'search/tapet'
        },
        {
          title: 'Profile Decorative',
          imageUrl: 'https://i.dedeman.ro/media/catalog/product/cache/dedeman/image/485x485/9df78eab33525d08d6e5fb8d27136e95/6/0/6019390_1.jpg?1656892800104',
          id: 2,
          linkUrl: 'search/profile'
        },
        {
          title: 'Mocheta',
          imageUrl: 'https://cdn-mathaus.ro/medias/sys_master/images/hef/h2a/h00/8835755016222.png',
          id: 3,
          linkUrl: 'search/mocheta'
        },
        {
          title: 'Vopsea Decorativa',
          imageUrl: 'https://i.dedeman.ro/media/catalog/product/cache/dedeman/image/9df78eab33525d08d6e5fb8d27136e95/5/0/5018428_v8731-7_cordoba_-dark-purple_3.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'search/vopsea'
        },
        {
          title: 'Decoratiuni',
          imageUrl: 'https://dclteam.ro/wp-content/uploads/2021/06/decoratiuni-interioare-800x800px-7.jpg',
          size: 'large',
          id: 5,
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
                        size={section.size} 
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

          <div className="parallax">
              <div>
                <p>
                  Casa Royal este distribuitorul roman al unor branduri internationale sonore ca Roberto Cavalli Home, Blumarine Home, Industrie Emiiana Parati, Design ID, Adi, Tekko, ACM, MATERIA, Zambaiti Parati - Murella, Sirpi, Selecta Parati - Portofino, Grandeco Wallfashion, Graham & Brown, si multe altele. Ne dorim ca prezenta noastra pe piata romaneasca sa ii inspire pe clienti sa aprecieze calitatea, luxul si unicitatea designului la justa lor valoare.
                </p>
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