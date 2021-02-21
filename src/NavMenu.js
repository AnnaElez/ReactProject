import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';

export default function NavMenu() {
    return (
        <Navbar>
            <Navbar.Toggle bg='light' expand='lg' />
            <Navbar.Collapse id='basic-navbar-nav' />
            <Nav className='mr-auto'>
                <NavLink
                    to='/'
                    exact
                    activeStyle={{ color: 'red' }}
                    className = 'navLink'>
                    Home
                </NavLink>

                <NavLink
                    to='/about'
                    exact
                    activeStyle={{ color: 'red' }}
                    className = 'navLink'>
                    About
                </NavLink>
                <NavLink
                    to='/contact'
                    exact
                    activeStyle={{ color: 'red' }}
                    className = 'navLink'>
                    Contact us
                </NavLink>
            </Nav>
        </Navbar>
    )
}