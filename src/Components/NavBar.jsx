import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {

  const Nav= styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }



`;


  return (
    <Nav >
     
      <ul className='navbar-list' >
        <li>
            <NavLink className='navbar-link' to='/'>
              Home
            </NavLink>
        </li>
        <li>
            <NavLink className='navbar-link' to='/about'>
              About
            </NavLink>
        </li>
        <li>
            <NavLink className='navbar-link' to='/contect'>
              Contect
            </NavLink>
        </li>
        <li>
            <NavLink className='navbar-link' to='/service'>
              Service
            </NavLink>
        </li>
      </ul>
    </Nav>
  )
}



export default NavBar
