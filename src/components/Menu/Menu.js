import React, {Component} from "react";
import {useState} from 'react';
import styled from 'styled-components';
import {routes} from "../../routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


const NavTop = styled.div`
    background-color: white;
`;

const HamburgerIcon = styled.a`
    font-size: 30px;
    margin: 10px 0px 0px 10px;
    :hover {
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .2);
        transform: translate(0, -1px);
        cursor: pointer;
        font-weight: 700;
    }
`;

const PageTitle = styled.div`
    margin: 0px 0px 0px 20px;
    display: inline-block;
    font-weight: 500;
    font-size: 22px;
`;

const MenuContainer = styled.div`
    position: absolute;
    z-index: +1;
    width: 200px;
    height: 200px;
    background-color: #333;
    padding: 10px 0px 0px 0px;
    margin: 0px 0px 0px 12px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .2);
    transition-duration: 2s;
    transition-property: all;
    
`;

const MenuItem = styled.div`
    color: white;
    margin: 0px 20px 10px 12px;
    text-decoration: none;
    border-radius: 10px;
    padding: 5px 5px 5px 20px;
    :hover {
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .2);
        transform: translate(0, -1px);
        cursor: pointer;
        background-color: #595959;
   
    }
`;


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            pageTitle: '',
        }
    }


    render() {
        return (
            <NavTop>
                <HamburgerIcon onClick={() => this.setState({showMenu: !this.state.showMenu})}>
                    &#9776;
                </HamburgerIcon>
                {this.state.showMenu === true ?
                    <MenuContainer onClick={() => this.setState({showMenu: !this.state.showMenu})}>

                        <div>
                            {routes.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Link
                                            className={item.cName}
                                            to={item.path}
                                        >
                                            <MenuItem onClick={() => this.setState({pageTitle: item.title})}>
                                                {item.title}
                                            </MenuItem>

                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </MenuContainer> : null}
                <PageTitle>{this.state.pageTitle === '' ? "Dashboard" : this.state.pageTitle}</PageTitle>
            </NavTop>
        );
    }
}

export default Menu;