import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import LinkedInLogo1 from "./linkedin_logo_1.png";
import ProfileIcon from "./profileicon.ico";
import PostJobIcon from "./postjobicon.ico";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav
          id="extended-nav"
          role="banner"
          tabindex="-1"
          style={{ height: 65, background: "#283e4a" }}
        >
          <div
            style={{
              display: "inline-block"
            }}
          >
            <img
              style={{
                height: 35,
                marginLeft: 50,
                marginRight: 20,
                marginBottom: "20px"
              }}
              src={LinkedInLogo1}
              alt="linkedin"
            />
          </div>
          <div
            style={{
              display: "inline-block"
            }}
          >
            <input
              style={{
                height: 34,
                width: 300,
                marginBottom: "20px"
              }}
              role="combobox"
              autocomplete="off"
              spellcheck="false"
              aria-autocomplete="list"
              aria-owns="nav-search-artdeco-typeahead-results"
              aria-expanded="false"
              placeholder="Search"
              type="text"
            />
          </div>
          <Link to="">
            <div
              style={{
                display: "inline-block",
                paddingTop: "10px",
                marginLeft: 250,
                textAlign: "center"
              }}
              className="nav-home"
            >
              <span style={{ display: "inline-block" }}>
                <svg
                  viewBox="0 0 24 24"
                  style={{ color: "white", width: "24px", height: "24px" }}
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22,9.45L12.85,3.26a1.5,1.5,0,0,0-1.69,0L2,9.45,3.06,11,4,10.37V20a1,1,0,0,0,1,1h6V16h2v5h6a1,1,0,0,0,1-1V10.37L20.94,11ZM18,19H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v4H6V8.89l6-4,6,4V19Z"
                    style={{ fill: "#e1e9ee" }}
                  />
                </svg>
              </span>
              <span>
                <div
                  style={{
                    display: "block",
                    "font-size": "0.85rem",
                    "font-weight": 400,
                    color: "#c7d1d8"
                  }}
                >
                  Home
                </div>
              </span>
            </div>
          </Link>
          <Link to="/mynetworks">
            <div
              style={{
                display: "inline-block",
                marginLeft: 20,
                textAlign: "center"
              }}
              className="nav-home"
            >
              <span
                id="mynetwork-tab-icon"
                class="nav-item__icon"
                lang="en"
                aria-role="presentation"
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: "24px", height: "24px" }}
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  class="nav-icon"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z"
                    class="inactive-item"
                    style={{ fill: "#e1e9ee" }}
                  />
                </svg>
              </span>
              <span>
                <div
                  style={{
                    display: "block",
                    "font-size": "0.85rem",
                    "font-weight": 400,
                    color: "#c7d1d8"
                  }}
                >
                  My Network
                </div>
              </span>
            </div>
          </Link>
          <Link to="/jobs">
            <div
              style={{
                display: "inline-block",
                marginLeft: 20,
                textAlign: "center"
              }}
              className="nav-home"
            >
              <span
                id="jobs-tab-icon"
                class="nav-item__icon"
                lang="en"
                aria-role="presentation"
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: "24px", height: "24px" }}
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  class="nav-icon"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21,7H17V6a3,3,0,0,0-3-3H10A3,3,0,0,0,7,6V7H3A1,1,0,0,0,2,8V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8A1,1,0,0,0,21,7ZM9,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7H9V6ZM20,18H4V13H20v5Zm0-6H4V9H20v3Z"
                    class="inactive-item"
                    style={{ fill: "#e1e9ee" }}
                  />
                </svg>
              </span>
              <span>
                <div
                  style={{
                    display: "block",
                    "font-size": "0.85rem",
                    "font-weight": 400,
                    color: "#c7d1d8"
                  }}
                >
                  Jobs
                </div>
              </span>
            </div>
          </Link>
          <Link to="/messages">
            <div
              style={{
                display: "inline-block",
                marginLeft: 20,
                textAlign: "center"
              }}
              className="nav-home"
            >
              <span
                id="messaging-tab-icon"
                class="nav-item__icon"
                lang="en"
                aria-role="presentation"
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: "24px", height: "24px" }}
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  class="nav-icon"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21,8H8A1,1,0,0,0,7,9V19a1,1,0,0,0,1,1H18l4,3V9A1,1,0,0,0,21,8ZM20,19.11L18.52,18H9V10H20v9.11ZM12,15h5v1H12V15ZM4,13H5v2H3a1,1,0,0,1-1-1V4A1,1,0,0,1,3,3H16a1,1,0,0,1,1,1V6H15V5H4v8Zm14,0H11V12h7v1Z"
                    class="inactive-item"
                    style={{ fill: "#e1e9ee" }}
                  />
                </svg>
              </span>
              <span>
                <div
                  style={{
                    display: "block",
                    "font-size": "0.85rem",
                    "font-weight": 400,
                    color: "#c7d1d8"
                  }}
                >
                  Messaging
                </div>
              </span>
            </div>
          </Link>
          <Link to="">
            <div
              style={{
                display: "inline-block",
                marginLeft: 20,
                textAlign: "center"
              }}
              className="nav-home"
            >
              <span
                id="notifications-tab-icon"
                class="nav-item__icon"
                lang="en"
                aria-role="presentation"
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: "24px", height: "24px" }}
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  class="nav-icon"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.94,19L19,14.49s-0.41-3.06-.8-6.06A6.26,6.26,0,0,0,12,3h0A6.26,6.26,0,0,0,5.79,8.44L5,14.49,3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19ZM12,4.75h0a4.39,4.39,0,0,1,4.35,3.81c0.28,2.1.56,4.35,0.7,5.44H7L7.65,8.56A4.39,4.39,0,0,1,12,4.75ZM5.52,18l1.3-3H17.18l1.3,3h-13Z"
                    class="inactive-item"
                    style={{ fill: "#e1e9ee" }}
                  />
                </svg>
              </span>
              <span>
                <div
                  style={{
                    display: "block",
                    "font-size": "0.85rem",
                    "font-weight": 400,
                    color: "#c7d1d8"
                  }}
                >
                  Notifications
                </div>
              </span>
            </div>
          </Link>
          <span>
            <span className="dropdown">
              <button
                id="login-btn"
                className=" dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ border: "none", background: "transparent" }}
              >
                <div
                  style={{
                    display: "inline-block",
                    marginLeft: 20,
                    textAlign: "center"
                  }}
                  className="nav-home"
                >
                  <span
                    id="notifications-tab-icon"
                    class="nav-item__icon"
                    lang="en"
                    aria-role="presentation"
                  >
                    <img style={{ width: 25 }} src={ProfileIcon} />
                  </span>
                  <span>
                    <div
                      style={{
                        display: "block",
                        "font-size": "0.85rem",
                        "font-weight": 400,
                        color: "#c7d1d8"
                      }}
                    >
                      Profile
                    </div>
                  </span>
                </div>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link
                  to={{ pathname: "", state: "" }}
                  className="dropdown-item"
                >
                  Profile Page
                </Link>
                <Link
                  to={{ pathname: "", state: "" }}
                  className="dropdown-item"
                >
                  Logout
                </Link>
              </div>
            </span>
          </span>
          <Link to="">
            <div
              style={{
                display: "inline-block",
                marginLeft: 20,
                textAlign: "center"
              }}
              className="nav-home"
            >
              <span
                id="notifications-tab-icon"
                class="nav-item__icon"
                lang="en"
                aria-role="presentation"
              >
                <img src={PostJobIcon} style={{ width: 20 }} />
              </span>
              <span>
                <div
                  style={{
                    display: "block",
                    "font-size": "0.85rem",
                    "font-weight": 400,
                    color: "#c7d1d8"
                  }}
                >
                  Post Job
                </div>
              </span>
            </div>
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
