import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { auth } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import Footer from "./Footer";

const Login = () => {
  //modal use state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //sign up function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("sucessfully SignUp!");
      console.log(userCredential);

      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  //login function
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");

  const history = useNavigate();
  const handlesubmit1 = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email1,
        password1
      );
      console.log(userCredential);
      alert("sucessfully login:have a nice day ");
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      history("/home");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="row p-5 mt-lg-5   mx-auto main-div ">
      <div className="heading col col-12 col-lg-5 col-md-4 col-sm-4 text-center mt-sm-3 text-lg-start mt-lg-5 pt-lg-5">
        <h1 className="text-primary">facebook</h1>
        <p className=" fs-3">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="col col-12 py-2 mx-2 shadow rounded mx-auto col-lg-4 col-md-5 col-sm-4 bg-white">
        <form onSubmit={handlesubmit1}>
          <input
            className=" p-3 form-control shadow-none mt-3"
            type="email"
            value={email1}
            onChange={(e) => setEmail1(e.target.value)}
            placeholder="Email address or phone number"
          />
          <input
            name="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            className="p-3 form-control shadow-none mt-3"
            type="password"
            placeholder="Password"
          />
          {/* <Link className=" text-white text-decoration-none" to="/navbar"> */}
          <button className="btn p-2 fs-5 mt-3 btn-primary w-100" type="submit">
            Log in
          </button>
          {/* </Link> */}

          <div className="mt-3 text-center">
            <Link className=" text-decoration-none">Forgotten Password?</Link>
          </div>

          <hr />
          <div className="text-center btn-account mb-3">
            <Button
              className="btn btn-success new-account p-2 fs-5 shadow-none"
              onClick={handleShow}
            >
              Create new account
            </Button>
          </div>
        </form>
      </div>
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <div>
              {/* <h3 ></h3> */}
              <h1>sign up</h1>
              <p>it's quick and easy</p>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handlesubmit}>
              <div className="row">
                <div className="col">
                  <input
                    className=" form-control shadow-none bg-light"
                    type="text"
                    placeholder="First name"
                  />
                </div>
                <div className="col">
                  <input
                    className=" form-control shadow-none bg-light"
                    type="text"
                    placeholder="Surname"
                  />
                </div>
              </div>
              <input
                className=" form-control mt-3 shadow-none bg-light"
                type="email"
                // name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email adress"
              />
              <input
                className=" form-control mt-3 shadow-none bg-light"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // name="password"
                placeholder="New password"
              />
              <div className=" row mt-2">
                <span className=" text-muted fs-7 ">
                  Date of birth
                  <i class="fa-solid fa-circle-question"></i>
                </span>
                <div className="col">
                  <select
                    class="form-select shadow-none"
                    aria-label="Default select example"
                  >
                    <option selected>1</option>
                    {/* <option value="1">1</option> */}
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="10">11</option>
                    <option value="10">12</option>
                    <option value="10">13</option>
                    <option value="10">14</option>
                    <option value="10">15</option>
                    <option value="10">16</option>
                    <option value="10">17</option>
                    <option value="10">18</option>
                    <option value="10">19</option>
                    <option value="10">20</option>
                    <option value="10">21</option>
                    <option value="10">22</option>
                    <option value="10">23</option>
                    <option value="10">24</option>
                    <option value="10">25</option>
                    <option value="10">26</option>
                    <option value="10">27</option>
                    <option value="10">28</option>
                    <option value="10">29</option>
                    <option value="10">30</option>
                    <option value="10">31</option>
                  </select>
                </div>
                <div className="col">
                  <select className=" form-select shadow-none">
                    <option value="jan">Jan</option>
                    <option value="jan">Feb</option>
                    <option value="jan">Mar</option>
                    <option value="jan">April</option>
                    <option value="jan">May</option>
                    <option value="jan">Jun</option>
                    <option value="jan">July</option>
                    <option value="jan">Aug</option>
                    <option value="jan">Sep</option>
                    <option value="jan">Oct</option>
                    <option value="jan">Nov</option>
                    <option value="jan">Dec</option>
                  </select>
                </div>
                <div className="col">
                  <select className=" form-select shadow-none">
                    <option value="jan">2023</option>
                    <option value="jan">2022</option>
                    <option value="jan">2021</option>
                    <option value="jan">2020</option>
                    <option value="jan">2019</option>
                    <option value="jan">2018</option>
                    <option value="jan">2017</option>
                    <option value="jan">2016</option>
                    <option value="jan">2015</option>
                    <option value="jan">2014</option>
                    <option value="jan">2013</option>
                    <option value="jan">2012</option>
                    <option value="jan">2011</option>
                    <option value="jan">2010</option>
                    <option value="jan">2009</option>
                    <option value="jan">2008</option>
                    <option value="jan">2007</option>
                    <option value="jan">2006</option>
                    <option value="jan">2005</option>
                    <option value="jan">2004</option>
                    <option value="jan">2003</option>
                    <option value="jan">2002</option>
                    <option value="jan">2001</option>
                    <option value="jan">2000</option>
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <span className=" text-muted fs-7">
                  Gender<i class="fa-solid fa-circle-question"></i>
                </span>
                <div className="col">
                  <div class=" border rounded p-2">
                    <label class="form-check-label" for="flexRadioDefault2">
                      Male
                    </label>
                    <input
                      class="form-check-input ms-5 shadow-none"
                      type="radio"
                      name="gender"
                      id="male"
                    />
                  </div>
                </div>
                <div className="col">
                  <div class=" border rounded p-2">
                    <label class="form-check-label" for="flexRadioDefault2">
                      Female
                    </label>
                    <input
                      class="form-check-input ms-5 shadow-none"
                      type="radio"
                      name="gender"
                      id="female"
                    />
                  </div>
                </div>
                <div className="col">
                  <div class=" border rounded p-2">
                    <label class="form-check-label" for="flexRadioDefault2">
                      Custom
                    </label>
                    <input
                      class="form-check-input ms-5 shadow-none"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                  </div>
                </div>
              </div>
              <div className=" mt-2">
                <span className="fs-7">
                  People who use our service may have uploaded your contact
                  information to Facebook.
                  <Link className=" text-decoration-none">Learn more.</Link>
                </span>
              </div>
              <div className=" mt-2">
                <span className="fs-7">
                  By clicking Sign Up, you agree to our{" "}
                  <Link className=" text-decoration-none">
                    Terms,Privacy Policy
                  </Link>
                  and <Link className=" text-decoration-none">Cookies</Link>.
                  You may receive SMS notifications from us and can opt out at
                  any time.
                </span>
              </div>
              <div className="text-center btn-account mt-3">
                {/* <Link className=" text-white text-decoration-none" to="/navbar"> */}
                <Button
                  type="submit"
                  className="btn btn-success new-account btn-lg shadow-none px-5 fw-bold "
                >
                  sign up
                </Button>
                {/* </Link> */}
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default Login;
