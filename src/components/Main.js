// import Nav from './Nav';
import Page from './Page';
import Ruler from './Ruler';
import './style.css';

function Main() {
  return (
    <>
    <div className="Main">
      <Ruler orientation="vertical" length={20} />
      <div className='middle'>
      <Ruler />

<div className='SideNavPage'>

      {/* <Nav/> */}

      <Page />
</div>

      </div>

    </div>
    </>

  );
}

export default Main;
