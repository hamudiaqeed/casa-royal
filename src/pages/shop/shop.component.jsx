import React, {useState} from "react";
import SHOP_DATA from "./shop.data";
import Collection from "../../components/collection/collection.component";

const ShopPage = () => {
    const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <div className="shop-page">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <Collection key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

export default ShopPage;