import styled from 'styled-components'
import logopic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
height: 58px;

border-bottom: 1px solied #f0f0f0;
`
export const Logo = styled.a.attrs({
    href: '/'
}) `
position: absolute;
top: 0;
left: 0;
height: 56px;
width: 100px;
display: block;
background: url(${logopic});
background-size: contain;
`
export const Nav = styled.div`
width: 960px;
margin: 0 auto;
height: 100%;
background: green;

`

export const NavItem = styled.div`



`