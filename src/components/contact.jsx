import { useState } from "react";
import React from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const LoadingStatus = {
  IDLE: "idle",
  LOADING: "loading",
  COMPLETED: "completed",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.IDLE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingStatus(LoadingStatus.LOADING);
    const formData = {
      firstName: name,
      lastName: name,
      email: email,
      phoneNumber: email,
      projectDescription: message,
    };
    axios
      .post("https://landing-page-api.onrender.com/api/send-email", formData)
      .then((response) => {
        setLoadingStatus(LoadingStatus.COMPLETED);
        clearState();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setLoadingStatus(LoadingStatus.IDLE);
      });
  };

  const getButtonText = () => {
    switch (loadingStatus) {
      case LoadingStatus.LOADING:
        return "Please Wait";
      case LoadingStatus.COMPLETED:
        return "Message Sent!";
      case LoadingStatus.IDLE:
      default:
        return "Send Message";
    }
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <button
                    type="submit"
                    className="btn btn-custom btn-lg"
                    style={{
                      borderRadius: "25px",
                      fontSize: "15px",
                      padding: "14px 34px",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {getButtonText()}
                    {loadingStatus === LoadingStatus.LOADING && (
                      <Oval
                        wrapperStyle={{ marginLeft: "10px" }}
                        height={20}
                        width={20}
                        color="#FFFF"
                        ariaLabel="oval-loading"
                        secondaryColor="#FFFF"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; Copyright 2023, Altiro, LLC. All Right Reserved.
            {/* <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
};
