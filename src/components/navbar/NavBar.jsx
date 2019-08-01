import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
          <div className='container'>
            <ul className='nav nav-pills'>
              <li><NavLink to='/datagram'>DataGram</NavLink></li>
            </ul>
          </div>
        )
      }
}