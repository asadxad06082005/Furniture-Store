import React, {useContext} from 'react';
import CardPhoto from "../../components/CardPhoto/CardPhoto";
import {Context} from "../../Context";
import styled from "styled-components";

const Card = () => {
    const {cardArray} = useContext(Context)

    return (
        <Wrapper>
            <div className="Nice">
                {
                    cardArray.map(el => {
                        return <CardPhoto el={el}/>
                    })
                }
            </div>
        </Wrapper>
    );
};


const Wrapper = styled.div`
  max-width: 75%;
  margin: auto;

  .Nice {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 10px;
    margin-top: 10px;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
`

export default Card;