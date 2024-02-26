import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
import './style.css';
import CopyText from './actions/CopyText';

const Header = () => {


    return (

        <table className='Header'>
            <tbody>
                <tr className='topHeaderRow'>
                    <td className='name'>Tariro Jaji <b>Kagogoda</b></td>
                    
                    <td className='contact'>
                        <p> <box-icon name='envelope' /> <CopyText text={'tarirojkg@gmail.com'}/> <br /></p>
                        <a href="https://github.com/tarirojaji/" target="_blank" rel="noreferrer">
                        <p> <box-icon type='logo' name='github' /> github.com/tarirojaji <br /></p>
                        </a>
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
