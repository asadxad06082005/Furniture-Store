import React, {useState, createContext, useEffect} from 'react';


const Context = createContext()

const ConTextProvider = ({children}) => {
    const [array, setArray] = useState([])
    const [cardArray, setCardArray] = useState([])
    const [Heart, setHeart] = useState([])
    const url = "https://course-api.com/react-store-products"
    const getDate = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setArray(data)
    }
    useEffect(() => {
        getDate()
    }, [])


    const AddCard = (newItem) => {
        setCardArray([...cardArray, newItem])

    }


    const RemoveCard = (id) => {
        let newArray = cardArray.filter((el) => {
            return el.id !== id
        })
        setCardArray(newArray)
    }

    const toggleFavorite = (id) => {
        let Favorite = array.map(el => {
            if (el.id === id) {
                return {
                    ...el,
                    isFavorite: !el.isFavorite
                }
            }
            return el
        })
        setArray(Favorite)
    }

    return (
        <Context.Provider value={{array, AddCard, RemoveCard, cardArray, Heart, toggleFavorite}}>
            {children}
        </Context.Provider>
    );
};

export {ConTextProvider, Context};