/** @format */

import react, { useState, useEffect } from "react";
import "./Main.css";
import logo from "../../assets/logo/logo_link.png";
import ArrowDropDownCircleSharpIcon from '@material-ui/icons/ArrowDropDownCircleSharp';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

const Main = () => {
  const [placeholder, setPlaceholder] = useState("YourLinkAdress".slice(0, 0));
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [value, setValue] = useState("");
  const [showBtn, setHideBtn] = useState(false);

 useEffect(() => {
   console.log("data", value);
   if (value.length > 2) {
    setHideBtn(true)
   } else {
     setHideBtn(false)
  }
 }, [value])
  
  useEffect(() => {
    const intr = setInterval(() => {
      setPlaceholder("YourLinkAdress".slice(0, placeholderIndex));
      if (placeholderIndex + 1 > "YourLinkAdress".length) {
        setPlaceholderIndex(0);
      } else {
        setPlaceholderIndex(placeholderIndex + 1);
      }
    }, 150);
    return () => {
      clearInterval(intr);
    };
  });
 

  return (
    <>
      <div>
        <div>
          <h1 className='Headlineone'>Share One Link For many Networks.</h1>
           <h2 className="free">Don't Worry It's 100% Free!</h2>
        </div>
        <div className="centerclass">
          < ArrowDropDownCircleSharpIcon style={ {fontSize:50,color:"#2E86C1"}}/>
        </div>
        <div className="de">
          <div className='addressround'>
            <div className='maincont'>
              <img src={logo} height='50px' width='50px' className='imglog' />
              <h1 className='linksharelink'>link.share/</h1>
              <form>
                <input type='name' placeholder={placeholder} value={ value}onChange={(event) => {
                setValue(event.target.value);
                }} />
                {
                  showBtn ?(
                  <button type='submit' className="buttonas"> -	&gt;
                  {/* <CheckCircleRoundedIcon className="iconcir" /> */}
                </button>
                  ):(
                 <button type='submit' className="buttonas" style={{backgroundColor:"silver"}}> -	&gt;
                  {/* <CheckCircleRoundedIcon className="iconcir" /> */}
                </button>
                   )
                }
              </form>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Main;
