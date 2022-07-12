import React, {useState} from "react";
import Category from "../category/category.component";
import './directory.styles.scss';


const Directory = () => {
    const [category, setCategory] = useState([
        {
          title: 'Tapet',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'Profile Decorative',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: 'Mocheta',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'sneakers'
        },
        {
          title: 'Vopsea Decorativa',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'womens'
        },
        {
          title: 'Decoratiuni',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'mens'
        }
    ]);

    return (
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
    )
}

export default Directory;