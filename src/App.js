import logo from './logo.svg';
import './App.css';
import SerchBox from './component/SerchBox';
import RandomNumGen from './component/RandomNumGen';
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonMove from './component/ButtonMove';
import Navbar from './component/NewNavbar';
import Welcome from './component/Welcome';
import { Flare } from '@material-ui/icons';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <table className='table table-bordered' style={{border:"2px solid grey"}}>
          <thead>
            <tr>
              <th >Search City</th>
              <th >Do Something New</th>
              <th >See Some Effect</th>
              <th >Find Your city with best Adv.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >
                <SerchBox />
              </td>
              <td >
                <RandomNumGen />
              </td>
              <td >
                <ButtonMove />
              </td>
              <td >
                <Welcome />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
