import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem } from './style'
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
               <Logo />
               <Nav>
                   <NavItem>首页</NavItem>
                   <NavItem>下载app</NavItem>
                   <NavItem></NavItem>
                   <NavItem></NavItem>
               </Nav>
            </HeaderWrapper>
        );
    }
}

export default Header;