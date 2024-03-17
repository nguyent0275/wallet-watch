//React Imports
import { useLocation } from 'react-router-dom';

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
        <h3 className= 'text'>
          Please return to the previous page.
        </h3>
      </div>
    </div>
  );
}

export default NotFound;
