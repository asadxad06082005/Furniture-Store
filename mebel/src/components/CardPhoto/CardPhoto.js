import React, {useContext} from 'react';
import {Context} from "../../Context";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag, faShoppingCart} from "@fortawesome/free-solid-svg-icons";


const CardPhoto = ({el}) => {
    const {cardArray} = useContext(Context)
    const {RemoveCard, AddCard} = useContext(Context)

    const shopCard = () => {
        let plusArray = cardArray.find(Cart => Cart.id === el.id)
        if (plusArray) {
            return <FontAwesomeIcon className="faShoppingCart" onClick={() => RemoveCard(el.id)} size="2x"
                                    icon={faShoppingCart}/>
        } else {
            return <FontAwesomeIcon className="faShoppingCart" onClick={() => AddCard(el)} size="2x"
                                    icon={faShoppingBag}/>
        }

    }
    return (
        <div>
            {shopCard()}
            <img src={el.image} alt=""/>
        </div>
    );


};


export default CardPhoto;