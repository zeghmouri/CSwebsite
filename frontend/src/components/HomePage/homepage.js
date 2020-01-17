import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn,  MDBView, MDBContainer, MDBFormInline, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import { MDBAnimation } from "mdbreact";
import "./homepage.css";
import logo from "../../assets/LogoCaS.png"

class ContactFormPage extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const navStyle = { marginTop: "4rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="contactformpage">
        <Router>
          <div>
            <MDBNavbar
              color="deep-purple darken-4"
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">Code&Share</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse")}
                />
                <MDBCollapse
                  id="navbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="#!">Homepage</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Events</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className="md-form my-0">
                          <input  className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapseID && overlay}
          </div>
        </Router>

        <MDBView>
          <MDBMask
            className="d-flex justify-content-center align-items-center"
            overlay="indigo-strong"
          >
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="display-4 font-weight-bold">Code & Share </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                 <p style={{fontSize: '20px'}}> Le club code & share a été créé suite au succès d’un événement intitulé
kidsCanCode dont l’objectif est d’initier les enfants à l’algorithmique. C’est
un club à but non lucratif destiné aux étudiants de l’ESI mais aussi à ceux
d’autres universités.
Il vise à encourager le partage de compétences et de connaissances et
d’encourager le développement à travers la réalisation de solutions
informatiques mais aussi à travers des formations. Les enfants ont eux aussi
leur part dans la vision du club qui vise à initier cette catégorie à
l’algorithmique et au codage.
</p>
                  </h6>
                  <MDBBtn outline color="white">
                    Learn More
                  </MDBBtn>
                </div>
                <MDBCol md="6" xl="5" className="mb-4">
                  <div>
                  <img src={logo} class="animated bounce infinite slow" alt="Transparent CodeAndShare Logo" id="animated-img1"/>
                  </div>
                 
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        
      </div>
    );
  }
}

export default ContactFormPage;