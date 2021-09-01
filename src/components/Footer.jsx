import React from 'react';
const date=new Date();

function Footer(){
    return (
        <div className="footer">
            <p className="footerTitle">Copyright  {date.getFullYear()}</p>  
        </div>
    )
}
export default Footer;