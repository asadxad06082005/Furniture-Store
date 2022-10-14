import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const About = () => {
    return (
        <Grid>
            <div>
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
    );
};


const Grid = styled.div`
  background: cadetblue;
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

export default About;