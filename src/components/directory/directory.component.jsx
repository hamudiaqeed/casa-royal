import React, {useState} from "react";
import Category from "../Category/category.component";
import './directory.styles.scss';


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