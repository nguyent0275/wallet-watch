//React Imports
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Css Imports
import "./notfound.css"

//Error Page
function NotFound() {
  let location = useLocation();
  return (
    <div className='row'>
      <div className='column'>
        <h1 className='text'>
          No match for <code>{location.pathname}</code>
        </h1>
        <Link to="/">
        <h3 className= 'text'>
          Please return to the home page.
        </h3>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
