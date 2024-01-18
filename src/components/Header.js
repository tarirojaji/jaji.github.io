import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
import './style.css';

const Header = () => {


    return (

        <table className='Header'>
            <tbody>
                <tr className='topHeaderRow'>
                    <td className='name'>Tariro <b>Kagogoda</b></td>
                    
                    <td className='contact'>
                        <p> <box-icon name='envelope' /> tarirojiji@gmail.com <br /></p>
                        <p> <box-icon type='logo' name='github' /> github.com/tarirojaji <br /></p>
                        <p> <box-icon name='hash' /> tarirojiji@gmail.com <br /></p>
                        <p> <box-icon name='location-plus' /> Portsmouth, UK <br /></p>
                    </td>
                </tr>
                <tr>
                    <td className='title'>Software Engineering Student</td>
                </tr>
            </tbody>
        </table>
    );
};


export default Header;
