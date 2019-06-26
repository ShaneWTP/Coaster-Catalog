import React from "react";
import {Row, Col} from "../components/Grid"

  const Cause = props => {
  
    // const containerStyle = {
    //   'background-color' : '#ffffff',
    //   'box-shadow':' 5px 5px 5px grey',
    //   'margin-top' : '20px',
    //   'text-align': 'center'
    // }

    const imageStyle = {
      'height' : '150px',
      'width' : 'auto'
    }

    // const pStyle = {
    //   'padding' : '15px',
    // }
    
    const borderStyle = {
      'border' : 'solid 2px black',
      'padding' : '15px',
      'margin-x': '10px',
      'margin-bottom' : '20px',
      'box-shadow':' 10px 10px 5px grey'
    }
    
    const h1Style = {
      // 'color': 'white',
      // 'text-shadow': '2px 2px 4px #000000',
      'color' : '#000'
    }

    return (
    <div className="container">
      <div className="card mt-4 mb-4 text-center">
        <div className="card-body">
          <div className="p-3">
            <img src="images/cfac-logo.png" width="800" height="auto" alt="Coaster for a Cause logo"/>
          </div>
          <h1 style={h1Style} >Ride Coasters And Fundraise</h1>
          <div>
            <div>
              <h4>Pennsylvania Amusement parks provide an excellent opportunity<br/> to raise money for your favorite charity!</h4> 
              <div className="m-5">
                <p>Use the Coaster Catalogue to keep track of all your coaster rides. Your favorite amusement park will donate $1 <br/>for each crazy loop or death-defying drop. Can you think of a better way to FUNRAISE?</p>
              </div>  
            </div>  
          </div>
          <h2>Total Money Raised for Charity</h2>
          <div style={borderStyle} class="d-inline-flex p-2">
            <h1>$3000.00</h1>
          </div>
        </div>
      </div>

      <div className="card">
        <div class="card-body">
          <h1 class="card-title">Leader Board</h1>
          <ul class="list-group list-group-flush">

          <li class="list-group-item">

            <Row>
              <Col size="2">
                <div className="my-2">
                    <img src={"https://avatars1.githubusercontent.com/u/37906477?s=400&v=4" || "https://via.placeholder.com/150C/O"} className="img-circle" alt="The Fundraising Winner" style={imageStyle}/>
                </div>
              </Col>
              <div className="col-md-3 align-self-center">
                <Row>
                  <h4 >ShaneWTP</h4>
                </Row>
                <Row>
                  <p> Philadelphia, PA </p>
                </Row>
                </div>
                <div className="col-md-3 align-self-center">
                <Row>
                  <h4>Charity:</h4>
                </Row>
                <Row>
                  <h4>Nature Conservancy</h4>
                </Row>

              </div>
              <div className="col-md-4 align-self-center">
              <h4>Number of dollars raised:</h4>
                <div className="text-center" style={borderStyle}>
                  <h2>$1100.00</h2>
                </div>
              </div>
            </Row>
            </li>

          <li class="list-group-item">

            <Row>
              <Col size="2">
                <div className="my-2">
                    <img src={"https://avatars1.githubusercontent.com/u/45902919?s=400&v=4" || "https://via.placeholder.com/150C/O"} className="img-circle" alt="The Fundraising Winner" style={imageStyle}/>
                </div>
              </Col>
              <div className="col-md-3 align-self-center">
              <Row>
                <h4 >GForce Jenny</h4>
              </Row>
              <Row>
                  <p> Harrisburg, PA </p>
              </Row>
              </div>
              <div className="col-md-3 align-self-center">
              <Row>
                <h4>Charity:</h4>
              </Row>
              <Row>
                <h4>American Cancer Society</h4>
              </Row>

              </div>
              <div className="col-md-4 align-self-center">
              <h4>Number of dollars raised:</h4>
                <div className="text-center" style={borderStyle}>
                  <h2>$900.00</h2>
                </div>
              </div>
            </Row>
          </li>

          <li class="list-group-item">

          <Row>
            <Col size="2">
              <div className="my-2">
                  <img src={"https://avatars0.githubusercontent.com/u/38076620?s=400&v=4" || "https://via.placeholder.com/150C/O"} className="img-circle" alt="The Fundraising Winner" style={imageStyle}/>
              </div>
            </Col>
            <div className="col-md-3 align-self-center">
              <Row>
                <h4 >Swissfink</h4>
              </Row>
              <Row>
                  <p>Coal Port, PA </p>
              </Row>
              </div>
              <div className="col-md-3 align-self-center">
              <Row>
                <h4>Charity:</h4>
              </Row>
              <Row>
                <h4>Red Cross</h4>
              </Row>

              </div>
              <div className="col-md-4 align-self-center">
              <h4>Number of dollars raised:</h4>
                <div className="text-center" style={borderStyle}>
                  <h2>$600.00</h2>
                </div>
              </div>
            </Row>
          </li>

            <li class="list-group-item">

              <Row>
                <Col size="2">
                  <div className="my-2">
                      <img src={"https://avatars3.githubusercontent.com/u/46404719?s=400&u=8f1b55c78dc2c7f77b624932f812125395076f4a&v=4" || "https://via.placeholder.com/150C/O"} className="img-circle" alt="The Fundraising Winner" style={imageStyle}/>
                  </div>
                </Col>
                <div className="col-md-3 align-self-center">
                  <Row>
                    <h4 >KoasterKelly</h4>
                  </Row>
                  <Row>
                      <p> Lancaster, PA </p>
                  </Row>
                  </div>
                  <div className="col-md-3 align-self-center">
                  <Row>
                    <h4>Charity:</h4>
                  </Row>
                  <Row>
                    <h4>Habitat for Paws</h4>
                  </Row>

                </div>
                <div className="col-md-4 align-self-center">
                <h4>Number of dollars raised:</h4>
                  <div className="text-center" style={borderStyle}>
                    <h2>$400.00</h2>
                  </div>
                </div>
              </Row>
            </li>
          </ul>        
        </div>
      </div>
    </div>
    );
  }

export default Cause;