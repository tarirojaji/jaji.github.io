import Page from './Page';
import Ruler from './Ruler';
import './style.css';

function Main() {
  return (
    <div className="Main">
      <div className='side'>
        {/* <Ruler orientation="vertical" /> */}
      </div>

      <div className='middle'>
      <Ruler />
      <Page />
      </div>

    </div>
  );
}

export default Main;
