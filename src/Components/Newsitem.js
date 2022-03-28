import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgurl,newsurl,author,date } = this.props;
    return (
      <div>
        {/* This is newsItem component */}
        <div className="container my-3  ">
          <div className="card" >
            <img src={!imgurl?"https://www.google.com/search?q=any+random+image&rlz=1C1JJTC_enIN972IN972&sxsrf=APq-WBuzaoetQfqxRKfdc0Nrb4aw3PfI-w:1648027017304&tbm=isch&source=iu&ictx=1&vet=1&fir=w_2Xay2IzNC0zM%252CYpYw_trHdY78IM%252C_%253BEpwlzJ8ekN85kM%252CYpYw_trHdY78IM%252C_%253BMU5EOEn2O0sGyM%252C0CP6VaHvjswEVM%252C_%253BjsbCYSW7o-fL-M%252CeLpSyvMoM8brnM%252C_%253B482FRyyTDXxGZM%252CYpYw_trHdY78IM%252C_%253Bk55dSe-SyRLpVM%252CRaG63Wpx0MhExM%252C_%253Brni2G0Af6KKx3M%252CRaG63Wpx0MhExM%252C_%253BtJRnjnpiQ1vrIM%252CYpYw_trHdY78IM%252C_%253BXjbaQIY2gj6BfM%252CYpYw_trHdY78IM%252C_%253BjGWaK-bTO1jKxM%252CRaG63Wpx0MhExM%252C_%253Bt1yd2rQ2O1Wk5M%252CMvYYU21lNvJwMM%252C_%253BvwI1BhCiS0zQ6M%252CnQQa4VebJ3D2DM%252C_%253BaViLODdeBlPSbM%252COOYL9kkX7DqXPM%252C_%253BRxTBm7iBv-iA5M%252CYpYw_trHdY78IM%252C_&usg=AI4_-kQH5tmkBYV16bWJyoCusVsMpkRwVg&sa=X&ved=2ahUKEwip_siH89v2AhVaSPUHHZWNBkcQ9QF6BAgEEAE#imgrc=w_2Xay2IzNC0zM":imgurl} className="card-img-top" alt="Exclusive" />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text" style={{fontFamily:'cursive,sans-serif',fontWeight:'bold',backgroundColor:'#e7ecf2'}}>
                <small className="text-muted">By <i style={{color:'midnightblue'}}>{!author?"Unknown":author}</i> on {new Date(date).toGMTString()} </small></p>
              <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary ">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
} 

export default Newsitem;
 