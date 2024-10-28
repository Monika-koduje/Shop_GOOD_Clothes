import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Item } from './AddItemToBasketShop';

export const Saved = () => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (item) => {
        setFavorites(prevFavorites => [...prevFavorites, item]);
    };

    const removeFromFavorites = (item) => {
        setFavorites(prevFavorites => prevFavorites.filter(favItem => favItem.id !== item.id));
    };

    return (
        <div>
            <Row>
                <h3 className="text-center">Ulubione przedmioty</h3>
            </Row>
            {favorites.map((favItem, index) => (
                <div key={index}>
                    <Image src={favItem.imageUrl} />
                    <Item item={favItem} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />
                </div>
            ))}
        </div>
    );
};
