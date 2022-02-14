import logo from './logo.svg';
import './App.css';
import { Profile } from './profile/Profile';
import image from "./profile/photo.jpg"

function App() {
  const name="Fedia SOUILEM"
  const bio="Research in food by using amazing nutritional properties of microalgae"
  const profession="Doctor in Biology"
  const alertmyinput= name=>alert (name)
  
  return (
    <div className="App">
      <Profile name={name} alertmyinput={alertmyinput} bio={bio} profession={profession} > <img src={image}/> </Profile>
    </div> 
  );
}

export default App;
