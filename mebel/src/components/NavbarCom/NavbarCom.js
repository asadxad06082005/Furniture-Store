import React, {useContext} from 'react';
import styled from 'styled-components'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {Context} from "../../Context";


const NavbarCom = () => {
    const {cardArray} = useContext(Context)

    return <NavbarStyle>
        <div className="container">
            <div className="nav">
                <h1>Furniture</h1>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            about
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            products
                        </Link>
                    </li>
                </ul>
                <li>
                    <Link to="/card">
                        <FontAwesomeIcon size="1x" icon={faShoppingCart}/>
                    </Link>
                    <sub>
                        {
                            cardArray.length
                        }
                    </sub>
                </li>
            </div>
        </div>
    </NavbarStyle>

};


const NavbarStyle = styled.div`
  width: 100%;
  min-height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  background: darkcyan;
  z-index: 99 !important;

  .container {
    width: 75%;
    margin: auto;
    justify-content:space-between;


    .nav {
      display: flex;
      min-height: 80px;
      align-items: center;
      color: white;
      justify-content: space-between;

      h1 {
        font-size: 40px;
      }

      ul {
        display: flex;
        color: white;

        li {
          list-style: none;
          padding-left: 35px;
          
          a {
            text-decoration: none;
            font-size: 23px;
            color: white;
          }
        }

        li:last-child {
          padding-right: 0;

        }
        
      }
      li {
        list-style: none;
        padding: 15px;

        a {
          text-decoration: none;
          font-size: 23px;
          color: white;
        }
      }

      li:last-child {
        padding-right: 0;

      }
    }
  }
`
export default NavbarCom;