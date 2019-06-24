import React from "react";
import {Row, Col} from "../components/Grid"

  const Cause = props => {
  
    const containerStyle = {
      'background-color' : '#ffffff',
      'box-shadow':' 5px 5px 5px grey',
      // 'margin-left' : '50px',
      'margin-right' : '50px',
      'margin-top' : '20px',
      'text-align': 'center'
    }

    const imageStyle = {
      'height' : '150px',
      'width' : 'auto'
    }

    const pStyle = {
      'padding' : '15px',
    }
    
    const borderStyle = {
      'border' : 'solid 2px black',
      'padding' : '15px',
      'margin-x': '10px',
      'margin-bottom' : '20px',
      'box-shadow':' 10px 10px 5px grey'
    }
    
    const h1Style = {
      'color': 'white',
      'text-shadow': '2px 2px 4px #000000',
      // 'color' : '#0A1E5F'
    }

    return (
    <div>
      <div className="container-fluid" style={containerStyle}>
        <h1 style={h1Style} >Ride Coasters And Fundraise</h1>
        <img src="images/cause-logo.jpg" alt="Coaster for a Cause logo"/>
        <h1>Total Money Raised for Charity</h1>
        <div style={borderStyle} class="d-inline-flex p-2">
          <h1>$3000.00</h1>
        </div>
        {/* <p style={pStyle}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p> */}
        <p style={pStyle}>Amusement parks provide the best opportunity to raise money for your favorite charity. Use the Coaster Catalogue to keep track of all your coaster rides. Your favorite amusement park will donate $1 for each crazy loop or death-defying drop. Can you think of a better way to FUNRAISE?</p>
      </div>

      <div className="card">
        <div class="card-body">
          <h1 class="card-title">Leader Board</h1>
          <ul class="list-group list-group-flush">
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
                  <div style={borderStyle}>
                    <h2>$800.00</h2>
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