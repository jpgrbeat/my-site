import React, {Component} from 'react'
import logo from '../images/t-rex-logo-v3.svg'

class Header extends Component{
    render(){
        return(
            <header className='hgh lean top'>
                <img  src={logo}alt='logo' height='150px' width='150px'/>
            </header>
        )
    }
}
export default Header