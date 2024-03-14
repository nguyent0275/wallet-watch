//React Imports
import { useLocation } from 'react-router-dom';

//Css Imports
import "./notfound.css"

//Error Page
function NotFound() {
  let location = useLocation();
  return (
    <div class='row'>
      <div class='column'>
        <h1 class='text'>
          No match for <code>{location.pathname}</code>
        </h1>
        <h3 class= 'text'>
          Please return to the previous page.
        </h3>
      </div>
    </div>
  );
}

export default NotFound;
