import styled from 'styled-components';
import {Grid, Container} from 'bear-react-grid';
import React from 'react';

interface IProps extends FCProps {
   className?: string
}

const Navbar = ({
    className,
}: IProps) => {
    const nav = [
        {text: 'Docs', path: '/docs/why'},
        {text: 'Features', path: '/docs/category/feature'},
        {text: 'Examples', path: '/docs/category/examples'},
        {text: 'Props Try', path: '/docs/props-try'},
        {text: 'Blog', path: '/docs/blog'},
    ];

    return <NavbarRoot>
        <a href="/">
            <Logo src="https://designcode.io/images/logos/logo.svg" alt="logo"/>
        </a>

        <Grid>
            {nav.map(row => {
                return <NavigatorButton href={row.path} key={row.path}>
                    <img src="https://designcode.io/images/icons/courses.svg" alt="cc"/>
                    <Caption>{row.text}</Caption>
                </NavigatorButton>;
            })}
        </Grid>

    </NavbarRoot>;

};

export default Navbar;






const Caption = styled.p`

  font-weight: 500;
  font-size: 15px;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 255, 255);
  text-align: center;
  margin: auto auto auto 10px;


  color: rgba(255, 255, 255, 0.7);
`;

const NavigatorButton = styled.a`
  display: flex;
  background: none;
  border: none;
  border-radius: 14px;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  background-blend-mode: overlay;

  :hover {
    text-decoration: none;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: rgba(31, 47, 71, 0.25) 0px 20px 40px, rgba(0, 0, 0, 0.1) 0px 1px 5px, rgba(255, 255, 255, 0.4) 0px 0px 0px 0.5px inset;
  }
`;




const Logo = styled.img`
  width: 44px;
  height: 44px;
  margin: auto;
`;


const NavbarRoot = styled(Container)`
  position: absolute;
  display: flex;
  justify-content: space-between;
  height: 44px;
  left: 0;
  right: 0;
    top: 60px;
  margin: 0 auto;
  z-index: 3;
`;