import React, {useContext} from 'react';
import {Context} from "../../Context";
import HomePhoto from "../../components/PhotoCom/HomePhoto";
import styled from 'styled-components'
import {Link} from "react-router-dom";


const Home = () => {
    const {array} = useContext(Context)

    return (
        <Wrapper>
            <Grid>

                <div className="">
                    <h2>Online Shop</h2>
                    <h1>New Furniture</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque blanditiis, commodi
                        consequuntur dolor dolorum exercitationem ipsam iure nemo neque, nobis numquam officiis pariatur
                        porro,
                        quibusdam quidem saepe sint totam!</p>
                    <Link to="/about">
                        <button>Read More</button>
                    </Link>
                </div>
            </Grid>
            <h1 className="Name">Featured Products</h1>

            <div className="Nice">

                {
                    array.map(el => {
                        return <HomePhoto el={el}/>
                    })
                }
            </div>
        </Wrapper>
    )
};
const Grid = styled.div`
  background: cadetblue ;
  text-align: center;
  min-height: 50vh;

  div {
    position: relative;
    top: 100px;
    grid-gap: 10px;
    align-items: center;
    max-width: 700px;
    justify-content: center;
    margin: auto;

    h2 {
      font-size: 30px;
      color: white;
    }

    h1 {
      font-size: 40px;
      color: white;
      margin-bottom: 10px;

    }

    p {
      font-size: 20px;
      color: white;
      margin-bottom: 20px;
    }

    button {
      width: 20%;
      height: 30px;
      border-radius: 5px;
      border: none;
      color: white;
      background: darkcyan;
      font-size: 15px;
    }

    button:hover {
      background: white;
      color: darkcyan;
    }
  }

`

const Wrapper = styled.div`
  max-width: 75%;
  margin: auto;
  
  .Name {
    display: flex;
    justify-content: center;
    color: white;
    border-bottom: 50px;
    font-size: 40px;
  }

  .Nice {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 15px;
    margin-top: 10px;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }
`
export default Home;