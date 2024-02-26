import React, { useState } from 'react';
import './style.css';
import PortfolioPopup from './PortfolioPopup';

const Content = () => {

    const [hovered, setHovered] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);

    return (

        <table className='Content'>

            <tbody>
                {/* INTRO */}
                <tr className='sectionRow sectionTopRow'>
                    <th className='sectionTitle'> <b>Intro.</b></th>
                    <td colSpan="2" className='sectionContent'> I'm a software engineering student at University of Portsmouth with an interest in frontend development and ui/ux design.</td>
                </tr>
                {/* EDUCATION */}

                <tr>
                    <td className='sectionTitle' rowSpan="2"><b>Education.</b></td>
                    {/* <td colSpan="3">Column</td> */}
                </tr>
                <tr>
                    <td className='sectionContent sectionContentTopRow'>
                        <p>
                            <b>University of Portsmouth: </b> Software Engineering <br />
                        </p>
                        <p>
                            <b>University of the Arts London: </b> Fashion Design & Technology
                        </p>

                    </td>
                    <td className='sectionContentDate sectionContentTopRow'>
                        <p>
                            2020 - 2024 <br />
                        </p>
                        <p>
                            2014 - 2017 <br />
                        </p>

                    </td>
                </tr>


                {/* WORK */}

                <tr>
                    <td className='sectionTitle' rowSpan="3"><b>Work Experience.</b></td>
                    {/* <td colSpan="3">Column</td> */}
                </tr>
                <tr>
                    <td className='sectionContent sectionContentTopRow'>
                        <p>
                            <b>Radweb: </b> Software Developer Placement Student <br />
                        </p>
                        <span className='toolsPill'>react.js</span>
                        <span className='toolsPill'>php - laravel</span>
                        <span className='toolsPill'>html/css, sass</span>
                        <span className='toolsPill'>docker</span>
                    </td>
                    <td className='sectionContentDate sectionContentTopRow'>Jul 2022 - Aug 2023</td>
                </tr>
                <tr>
                    <td className='sectionContent'>
                        <p>
                            <b>Status 100 Pr: </b> Freelance Graphic Design
                        </p>
                        <span className='toolsPill'>photoshop</span>
                        <span className='toolsPill'>illustrator</span>
                    </td>
                    <td className='sectionContentDate'>2017 - 2022</td>
                </tr>

                {/* PROJECTS */}

                <tr>
                    {/* adjust rowspan when adding new projects */}
                    <td className='sectionTitle' rowSpan="6"><b>Projects.</b></td>
                    {/* <td colSpan="3">Column</td> */}
                </tr>
                

                <tr>
                    <td
                        onMouseEnter={() => setHovered('portfolio')}
                        onMouseLeave={() => setHovered(null)}
                        className={hovered === 'portfolio' ? 'sectionContent sectionContentTopRow hovered' : 'sectionContent sectionContentTopRow'}
                        style={{ borderBottom: hovered === 'portfolio' ? '1px dashed' : '1px dashed transparent' }}>


                        <a href="https://github.com/tarirojaji/tarirojaji.github.io" target="_blank" rel="noreferrer">

                            <b>Portfolio</b> <box-icon type='logo' name='github' />

                        </a>
                        <p>
                            My portfolio site. you are here.
                        </p>
                        <span className='toolsPill'>react.js</span>
                        <span className='toolsPill'>html/css</span>
                    </td>
                    <td className='sectionContentDate sectionContentTopRow'>2021 - 2024</td>
                </tr>

                <tr>
                    <td
                        onMouseEnter={() => setHovered('status100')}
                        onMouseLeave={() => setHovered(null)}
                        className={hovered === 'status100' ? 'sectionContent hovered' : 'sectionContent'}
                        style={{ borderBottom: hovered === 'status100' ? '1px dashed' : '1px dashed transparent' }}>


                        <span className='projectLink' onClick={openPopup}>

                            <b>Status 100 Pr Site</b> <box-icon name='show' />

                        </span>
                        <PortfolioPopup isOpen={isPopupOpen} onClose={closePopup} />
                        <p>
                            A website redesign.
                        </p>
                        <span className='toolsPill'>ui/ux</span>
                        <span className='toolsPill'>figma</span>
                    </td>
                    <td className='sectionContentDate'>2024</td>
                </tr>

                <tr>

                    <td
                        onMouseEnter={() => setHovered('lego')}
                        onMouseLeave={() => setHovered(null)}
                        className={hovered === 'lego' ? 'sectionContent hovered' : 'sectionContent'}
                        style={{ borderBottom: hovered === 'lego' ? '1px dashed' : '1px dashed transparent' }}>

                        <a href="https://github.com/tarirojaji" target="_blank" rel="noreferrer">
                            <b>Lego</b> <box-icon type='logo' name='github' />
                        </a>

                        <p>
                            A LEGO inventory management system featuring real-time stock levels, a user-friendly shopping cart, secure admin access, and dedicated user login functionality.
                        </p>
                        <span className='toolsPill'>javascript</span>
                        <span className='toolsPill'>html/css</span>
                        <span className='toolsPill'>psql</span>
                    </td>
                    <td className='sectionContentDate'>2022</td>

                </tr>

                <tr>
                    <td
                        onMouseEnter={() => setHovered('emoji')}
                        onMouseLeave={() => setHovered(null)}
                        className={hovered === 'emoji' ? 'sectionContent hovered' : 'sectionContent'}
                        style={{ borderBottom: hovered === 'emoji' ? '1px dashed' : '1px dashed transparent' }}>


                        <a href="https://github.com/tarirojaji/my-emoji-portal" target="_blank" rel="noreferrer">

                            <b>Emoji Portal</b> <box-icon type='logo' name='github' />

                        </a>
                        <p>
                            A basic web3 app that posts emojis to the ethereum rinkeby testnet network.
                        </p>
                        <span className='toolsPill'>react.js</span>
                        <span className='toolsPill'>html/css</span>
                        <span className='toolsPill'>solidity</span>
                    </td>
                    <td className='sectionContentDate'>2022</td>
                </tr>

                <tr>
                    <td
                        onMouseEnter={() => setHovered('scrabble')}
                        onMouseLeave={() => setHovered(null)}
                        className={hovered === 'scrabble' ? 'sectionContent hovered' : 'sectionContent'}
                        style={{ borderBottom: hovered === 'scrabble' ? '1px dashed' : '1px dashed transparent' }}>


                        <a href="https://github.com/tarirojaji/scrabble" target="_blank" rel="noreferrer">

                            <b>Scrabble</b> <box-icon type='logo' name='github' />

                        </a>
                        <p>
                            A playable Scrabble clone featuring scoring, drag/drop, board shuffle, & reset.
                        </p>
                        <span className='toolsPill'>javascript</span>
                        <span className='toolsPill'>html/css</span>
                    </td>
                    <td className='sectionContentDate'>2021</td>
                </tr>

               


            </tbody>
        </table>
    );



};


export default Content;
