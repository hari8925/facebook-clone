import React from "react";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { signOut } from "firebase/auth";

import { auth } from "./Firebase";

const Navbar = () => {
  const history = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history("/");
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // msg-1
  const [chat, setchat] = useState(false);

  const handleclose = () => setchat(false);
  const handleshow = () => setchat(true);
  // msg-2
  const [chat2, setchat2] = useState(false);

  const handleclose2 = () => setchat2(false);
  const handleshow2 = () => setchat2(true);
  // msg-3
  const [chat3, setchat3] = useState(false);

  const handleclose3 = () => setchat3(false);
  const handleshow3 = () => setchat3(true);
  // msg-4
  const [chat4, setchat4] = useState(false);

  const handleclose4 = () => setchat4(false);
  const handleshow4 = () => setchat4(true);

  return (
    <>
      <div
        className="bg-white align-items-center shadow d-flex  fixed-top"
        style={{ minHeight: "56px", zIndex: "5" }}
      >
        <div className=" container-fluid">
          <div className="row align-items-center">
            <div className="col d-flex align-items-center">
              <i class="fa-brands fa-facebook text-primary fs-1"></i>

              <div className="input-group ms-2">
                {/* mobile */}

                <span
                  className="input-group-prepend  d-lg-none"
                  id="searchmenu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                  data-bs-auto-close="outside"
                >
                  <div
                    className=" input-group-text bg-gray border-0 rounded-circle"
                    style={{ minHeight: "40px" }}
                  >
                    <i class="fa-solid fa-magnifying-glass text-muted"></i>
                  </div>
                </span>
                {/* desktop */}
                <span
                  className="input-group-prepend d-none d-lg-block"
                  id="searchmenu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                  data-bs-auto-close="outside"
                >
                  <div
                    className=" input-group-text bg-gray border-0 rounded-pill"
                    style={{ minHeight: "40px", minWidth: "230px" }}
                  >
                    <i class="fa-solid fa-magnifying-glass me-2 text-muted"></i>
                    <p className=" m-0 fs-7 text-muted">Search Facebook</p>
                  </div>
                </span>
                {/* drop down */}

                <ul
                  class="dropdown-menu border-0 shadow p-3 overflow-auto"
                  aria-labelledby="dropdownMenuButton1"
                  style={{ width: "20em", maxHeight: "600px" }}
                >
                  <li>
                    <input
                      type="text"
                      className="rounded-pill border-0 bg-gray dropdown-item"
                      placeholder="search Facebook..."
                      autoFocus
                    />
                  </li>
                  <li className="my-4">
                    <div
                      class="alert fade show dropdown-item p-1 m-0 d-flex align-items-center justify-content-between"
                      role="alert"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src="https://source.unsplash.com/random/1"
                          alt="avathar"
                          className=" rounded-circle me-2"
                          style={{
                            width: "35px",
                            height: "35px",
                            objectfit: "cover",
                          }}
                        />
                        <p className="m-0">Hariprasad</p>
                      </div>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  </li>
                  {/* result 2 */}
                  <li className="my-4">
                    <div
                      class="alert fade show dropdown-item p-1 m-0 d-flex align-items-center justify-content-between"
                      role="alert"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src="https://source.unsplash.com/random/2"
                          alt="avathar"
                          className=" rounded-circle me-2"
                          style={{
                            width: "35px",
                            height: "35px",
                            objectfit: "cover",
                          }}
                        />
                        <p className="m-0">Raghul</p>
                      </div>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  </li>
                  {/* result */}
                  <li className="my-4">
                    <div
                      class="alert fade show dropdown-item p-1 m-0 d-flex align-items-center justify-content-between"
                      role="alert"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src="https://source.unsplash.com/random/3"
                          alt="avathar"
                          className=" rounded-circle me-2"
                          style={{
                            width: "35px",
                            height: "35px",
                            objectfit: "cover",
                          }}
                        />
                        <p className="m-0">Essai</p>
                      </div>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col d-none d-lg-flex justify-content-center ">
              {/* home */}
              <div className="mx-4 nav__btn nav__btn-active">
                <Link to="/home">
                  <button className="btn px-4">
                    <i class="fa-solid fa-house text-muted fs-4"></i>
                  </button>
                </Link>
              </div>
              {/* market */}
              <div className="mx-4 nav__btn">
                <Link to="/market">
                  <button className="btn px-4">
                    <i class="fa-solid fa-store text-muted fs-4"></i>
                  </button>
                </Link>
              </div>
              {/* group */}
              <div className="mx-4 nav__btn">
                <Link to="/groups">
                  <button type="button" class="btn px-4 ">
                    <i class="fa-solid fa-users position-relative  text-muted fs-4">
                      <span
                        style={{ fontSize: ".5rem" }}
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      >
                        1<span class="visually-hidden"></span>
                      </span>
                    </i>
                  </button>
                </Link>
              </div>
              {/* gaming */}
              <div className="mx-4 nav__btn">
                <Link to="/game">
                  <button className="btn px-4">
                    <i class="fa-solid fa-gamepad text-muted fs-4"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="col  d-flex justify-content-end align-items-center">
              {/* avathar */}
              <div className="d-none d-xl-flex align-items-center justify-content-center">
                <img
                  className=" rounded-circle me-2"
                  style={{ width: "38px", height: "38px", objectfit: "cover" }}
                  src="https://source.unsplash.com/collection/happy-people"
                  alt="avathha"
                />
                <p className="m-0"> Hari</p>
              </div>
              {/* main menu */}
              <div
                id="mainmenu"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className=" d-flex align-items-center justify-content-center p-1 mx-2 rounded-circle bg-gray"
                style={{ width: "38px", height: "38px", objectfit: "cover" }}
              >
                <i class="fa-solid fa-ellipsis"></i>
              </div>
              {/* main menu */}

              <ul
                class="dropdown-menu border-0 shadow p-3 overflow-auto"
                style={{ width: "23em", maxHeight: "600px" }}
                aria-labelledby="mainmenu"
              >
                {/* menu */}
                <div>
                  {/* headrer */}
                  <li className="p-1 mx-2">
                    <h2>Menu</h2>
                  </li>
                  {/* search */}
                  <li className="p-1">
                    <div
                      className=" input-group-text border-0 bg-gray rounded-pill "
                      style={{ minHeight: "40px", minWidth: "230px" }}
                      type="text"
                    >
                      <i className="fas fa-search me-2 text-muted"></i>
                      <input
                        className="  shadow-none form-control rounded-pill border-0 bg-gray"
                        placeholder="Search Menu"
                        type="text"
                      />
                    </div>
                  </li>
                  {/* social item */}
                  <h4 className="m-2">Social</h4>
                  {/* sl */}
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center justify-content-between">
                      <div className="p-2 d-flex">
                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0Z9vTl99JH8eoVYVRfGfipGkWSPTxG_aUg&usqp=CAU"
                          alt="icon fb"
                          className=""
                        />
                        <div className=" mx-3">
                          <h5 className=" m-0">Events</h5>
                          <span className="  fs-7 text-muted ">
                            Organize or find events and other things to do
                            online and nearby.
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center justify-content-between">
                      <div className="p-2 d-flex">
                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/i0pziEs5Wj6.png"
                          //
                          alt="icon fb"
                          className=""
                        />
                        <div className=" mx-3">
                          <h5 className=" m-0">Friends</h5>
                          <span className="  fs-7 text-muted ">
                            Search for friends or people you may know.
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center justify-content-between">
                      <div className="p-2 d-flex">
                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/MhkwI3R0SHP.png"
                          //
                          alt="icon fb"
                          className=""
                        />
                        <div className=" mx-3">
                          <h5 className=" m-0">Groups</h5>
                          <span className="  fs-7 text-muted ">
                            Connect with people who share your interests .
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center justify-content-between">
                      <div className="p-2 d-flex">
                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/-6zDH4i8Hrw.png"
                          alt="icon fb"
                          className=""
                        />
                        <div className=" mx-3">
                          <h5 className=" m-0">News Feed</h5>
                          <span className="  fs-7 text-muted ">
                            See relevant posts from people and pages you follow.
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center justify-content-between">
                      <div className="p-2 d-flex">
                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png"
                          alt="icon fb"
                          className=""
                        />
                        <div className=" mx-3">
                          <h5 className=" m-0">Feeds</h5>
                          <span className="  fs-7 text-muted ">
                            See the most recent posts from your friends groups.
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center justify-content-between">
                      <div className="p-2 d-flex">
                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/7RdHDScIkAe.png"
                          alt="icon fb"
                          className=""
                        />
                        <div className=" mx-3">
                          <h5 className=" m-0">Pages</h5>
                          <span className="  fs-7 text-muted ">
                            Discover and connect with business on Facebook.
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  {/* entertainment item */}
                  <hr />
                  <h4 className="m-2">Entertainment</h4>
                  {/* sl */}
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center justify-content-between">
                      <div className="p-2 d-flex">
                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/fGWbDwbx9W4.png"
                          alt="icon fb"
                          className=""
                        />
                        <div className=" mx-3">
                          <h5 className=" m-0">Gaming video</h5>
                          <span className="  fs-7 text-muted ">
                            Watch and connect with your favorite games and
                            streamers.
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center justify-content-between">
                      <div className="p-2 d-flex">
                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/JzYamtSussX.png"
                          alt="icon fb"
                          className=""
                        />
                        <div className=" mx-3">
                          <h5 className=" m-0">Play Games</h5>
                          <span className="  fs-7 text-muted ">
                            Play your favorite games.
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center justify-content-between">
                      <div className="p-2 d-flex">
                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/XNFKm5WC2yS.png"
                          alt="icon fb"
                          className=""
                        />
                        <div className=" mx-3">
                          <h5 className=" m-0">Video</h5>
                          <span className="  fs-7 text-muted ">
                            A video destination personalized to your interests
                            and connections.
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
                <hr />
                {/* create */}
                <div>
                  {/* header */}
                  <li className="p-1 mx-2">
                    <h2>Create</h2>
                  </li>
                  {/* cl */}
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center">
                      <div
                        style={{ width: "38px", height: "38px" }}
                        className="d-flex align-items-center justify-content-center rounded-circle bg-gray p-1 me-3"
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </div>
                      <div>
                        <h5 className="m-0">Post</h5>
                      </div>
                    </Link>
                  </li>
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center">
                      <div
                        style={{ width: "38px", height: "38px" }}
                        className="d-flex align-items-center justify-content-center rounded-circle bg-gray p-1 me-3"
                      >
                        <i class="fa-solid fa-book-open"></i>
                      </div>
                      <div>
                        <h5 className="m-0">Story</h5>
                      </div>
                    </Link>
                  </li>
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center">
                      <div
                        style={{ width: "38px", height: "38px" }}
                        className="d-flex align-items-center justify-content-center rounded-circle bg-gray p-1 me-3"
                      >
                        <i class="fa-solid fa-video"></i>
                      </div>
                      <div>
                        <h5 className="m-0">Video</h5>
                      </div>
                    </Link>
                  </li>
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center">
                      <div
                        style={{ width: "38px", height: "38px" }}
                        className="d-flex align-items-center justify-content-center rounded-circle bg-gray p-1 me-3"
                      >
                        <i class="fa-solid fa-flag"></i>
                      </div>
                      <div>
                        <h5 className="m-0">Page</h5>
                      </div>
                    </Link>
                  </li>
                  <hr />
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center">
                      <div
                        style={{ width: "38px", height: "38px" }}
                        className="d-flex align-items-center justify-content-center rounded-circle bg-gray p-1 me-3"
                      >
                        <i class="fa-solid fa-bullhorn"></i>
                      </div>
                      <div>
                        <h5 className="m-0">Add</h5>
                      </div>
                    </Link>
                  </li>
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center">
                      <div
                        style={{ width: "38px", height: "38px" }}
                        className="d-flex align-items-center justify-content-center rounded-circle bg-gray p-1 me-3"
                      >
                        <i class="fa-solid fa-users"></i>
                      </div>
                      <div>
                        <h5 className="m-0">Group</h5>
                      </div>
                    </Link>
                  </li>
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center">
                      <div
                        style={{ width: "38px", height: "38px" }}
                        className="d-flex align-items-center justify-content-center rounded-circle bg-gray p-1 me-3"
                      >
                        <i class="fa-solid fa-book"></i>
                      </div>
                      <div>
                        <h5 className="m-0">Event</h5>
                      </div>
                    </Link>
                  </li>
                  <li className="my-2 p-1">
                    <Link className=" text-decoration-none text-dark d-flex align-items-center">
                      <div
                        style={{ width: "38px", height: "38px" }}
                        className="d-flex align-items-center justify-content-center rounded-circle bg-gray p-1 me-3"
                      >
                        <i class="fa-solid fa-shopping-basket"></i>
                      </div>
                      <div>
                        <h5 className="m-0">Marketplace Listing</h5>
                      </div>
                    </Link>
                  </li>
                </div>
              </ul>

              {/* chat */}
              <div
                id="chatmenu"
                type="button"
                data-bs-auto-close="outside"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className=" d-flex align-items-center justify-content-center p-1 mx-2 rounded-circle bg-gray"
                style={{ width: "38px", height: "38px", objectfit: "cover" }}
              >
                <i class="fa-solid fa-comment"></i>
              </div>
              {/* chat dd */}
              <ul
                class="dropdown-menu border-0 shadow p-3 overflow-auto"
                style={{ width: "23em", maxHeight: "600px" }}
                aria-labelledby="chatmenu"
              >
                {/* header */}
                <li className="p-1">
                  <div className="d-flex justify-content-between">
                    <h2>Message</h2>
                    <div>
                      {/* setting */}
                      <i
                        className="fa-solid fa-ellipsis text-muted mx-2"
                        type="button"
                        data-bs-toggle="dropdown"
                      ></i>
                      {/* setting dropdown */}
                      <ul
                        className="dropdown-menu shadow"
                        style={{ width: "18em" }}
                      >
                        {/* tittle */}
                        <div className="p-2">
                          <h5>Chat Setting</h5>
                          <span className=" text-muted fs-7">
                            Customize your Messenger experience.
                          </span>
                        </div>
                        {/* item 1 */}
                        <li>
                          <div className=" dropdown-item d-flex align-items-center justify-content-between">
                            {/* icon */}
                            <div className="d-flex align-items-center">
                              <i class="fa-solid fa-phone me-3"></i>
                              <p className="m-0">Incoming call sounds</p>
                            </div>
                            {/* toogle */}
                            <div class="form-check form-switch m-0">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                              <label
                                class="form-check-label"
                                for="flexSwitchCheckChecked"
                              ></label>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className=" dropdown-item d-flex align-items-center justify-content-between">
                            {/* icon */}
                            <div className="d-flex align-items-center">
                              <i class="fa-solid fa-volume-low me-3"></i>
                              <p className="m-0">Message Sounds</p>
                            </div>
                            {/* toogle */}
                            <div class="form-check form-switch m-0">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="flexSwitchCheckChecked"
                              ></label>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className=" dropdown-item d-flex align-items-center justify-content-between">
                            {/* icon */}
                            <div className="d-flex align-items-center">
                              <i className="fa-solid fa-spinner me-3"></i>

                              <p className="m-0">Pop-Up new messages</p>
                            </div>
                            {/* toogle */}
                            <div class="form-check form-switch m-0">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                              <label
                                class="form-check-label"
                                for="flexSwitchCheckChecked"
                              ></label>
                            </div>
                          </div>
                          <span className=" text-muted ms-5 fs-7">
                            Automatically open new messages.
                          </span>
                        </li>
                        <hr className=" m-0" />
                        <li>
                          <div className=" dropdown-item d-flex align-items-center justify-content-between">
                            {/* icon */}
                            <div className="d-flex align-items-center">
                              <i class="fa-solid fa-toggle-off me-3"></i>
                              <p className="m-0">Turn Off Active Status</p>
                            </div>
                            {/* toogle */}
                          </div>
                        </li>
                        <li>
                          <div className=" dropdown-item d-flex align-items-center justify-content-between">
                            {/* icon */}
                            <div className="d-flex align-items-center">
                              <i class="fa-solid fa-comment-alt me-3"></i>
                              <p className="m-0">Message Request</p>
                            </div>
                            {/* toogle */}
                          </div>
                        </li>
                        <li>
                          <div className=" dropdown-item d-flex align-items-center justify-content-between">
                            {/* icon */}
                            <div className="d-flex align-items-center">
                              <i class="fa-solid fa-share-square me-3"></i>
                              <p className="m-0">Message delivery settings</p>
                            </div>
                            {/* toogle */}
                          </div>
                        </li>
                        <li>
                          <div className=" dropdown-item d-flex align-items-center justify-content-between">
                            {/* icon */}
                            <div className="d-flex align-items-center">
                              <i className="fa-solid fa-shield-alt me-3"></i>
                              <p className="m-0">Block settings</p>
                            </div>
                            {/* toogle */}
                          </div>
                        </li>
                      </ul>
                      {/* expand */}
                      <i className="fa-solid fa-expand-arrows-alt text-muted mx-2"></i>
                      {/* new mesage */}
                      <i
                        className="fa-solid fa-edit text-muted mx-2"
                        typeof="button"
                        onClick={handleShow}
                      ></i>
                    </div>
                  </div>
                </li>
                {/* search */}
                <li className="p-1">
                  <div
                    className=" input-group-text border-0 bg-gray rounded-pill "
                    style={{ minHeight: "40px", minWidth: "230px" }}
                    type="text"
                  >
                    <i className="fas fa-search me-2 text-muted"></i>
                    <input
                      className="  shadow-none form-control rounded-pill border-0 bg-gray"
                      placeholder="Search Messages"
                      type="text"
                    />
                  </div>
                </li>
                {/* messages */}
                <li className="my-2 p-1" typeof="button" onClick={handleshow}>
                  <div className="d-flex align-items-center justify-content-between">
                    {/* big avathar */}
                    <div className="d-flex align-items-center justify-content-evenly">
                      <div className=" p-2">
                        <img
                          src="https://source.unsplash.com/random/1"
                          alt="avathar"
                          className=" rounded-circle"
                          style={{
                            width: "58px",
                            height: "58px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className=" ">
                        <p className=" fs-7  m-0 ">Raghul</p>
                        <span className=" fs-7 text-muted ">
                          Lorem ipsum dolor sit amet &#8226;7days
                        </span>
                      </div>
                    </div>
                    {/* small avathar */}
                    <div className="p-1">
                      <img
                        src="https://source.unsplash.com/random/1"
                        alt="vhjvvj"
                        className=" rounded-circle "
                        style={{
                          width: "15px",
                          height: "15px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </li>
                <li className="my-2 p-1" typeof="button" onClick={handleshow2}>
                  <div className="d-flex align-items-center justify-content-between">
                    {/* big avathar */}
                    <div className="d-flex align-items-center justify-content-evenly">
                      <div className=" p-2">
                        <img
                          src="https://source.unsplash.com/random/2"
                          alt="avathar"
                          className=" rounded-circle"
                          style={{
                            width: "58px",
                            height: "58px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className=" ">
                        <p className=" fs-7  m-0 ">Essai</p>
                        <span className=" fs-7 text-muted ">
                          Lorem ipsum dolor sit amet &#8226;7days
                        </span>
                      </div>
                    </div>
                    {/* small avathar */}
                    <div className="p-1">
                      <img
                        src="https://source.unsplash.com/random/1"
                        alt="vhjvvj"
                        className=" rounded-circle "
                        style={{
                          width: "15px",
                          height: "15px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </li>
                <li className="my-2 p-1" typeof="button" onClick={handleshow3}>
                  <div className="d-flex align-items-center justify-content-between">
                    {/* big avathar */}
                    <div className="d-flex align-items-center justify-content-evenly">
                      <div className=" p-2">
                        <img
                          src="https://source.unsplash.com/random/3"
                          alt="avathar"
                          className=" rounded-circle"
                          style={{
                            width: "58px",
                            height: "58px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className=" ">
                        <p className=" fs-7  m-0 ">Virat</p>
                        <span className=" fs-7 text-muted ">
                          Lorem ipsum dolor sit amet &#8226;7days
                        </span>
                      </div>
                    </div>
                    {/* small avathar */}
                    <div className="p-1">
                      <img
                        src="https://source.unsplash.com/random/1"
                        alt="vhjvvj"
                        className=" rounded-circle "
                        style={{
                          width: "15px",
                          height: "15px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </li>
                <li className="my-2 p-1" typeof="button" onClick={handleshow4}>
                  <div className="d-flex align-items-center justify-content-between">
                    {/* big avathar */}
                    <div className="d-flex align-items-center justify-content-evenly">
                      <div className=" p-2">
                        <img
                          src="https://source.unsplash.com/random/4"
                          alt="avathar"
                          className=" rounded-circle"
                          style={{
                            width: "58px",
                            height: "58px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className=" ">
                        <p className=" fs-7  m-0 ">Rohit</p>
                        <span className=" fs-7 text-muted ">
                          Lorem ipsum dolor sit amet &#8226;7days
                        </span>
                      </div>
                    </div>
                    {/* small avathar */}
                    <div className="p-1">
                      <img
                        src="https://source.unsplash.com/random/1"
                        alt="vhjvvj"
                        className=" rounded-circle "
                        style={{
                          width: "15px",
                          height: "15px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </li>
              </ul>

              {/* notification */}
              <div
                id="notmenu"
                type="button"
                data-bs-auto-close="outside"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className=" d-flex align-items-center justify-content-center p-1 mx-2 rounded-circle bg-gray"
                style={{ width: "38px", height: "38px", objectfit: "cover" }}
              >
                <i class="fa-solid fa-bell"></i>
              </div>
              {/* not dd */}
              <ul
                className="dropdown-menu border-0 shadow p-3 overflow-auto"
                style={{ width: "23em", maxHeight: "600px" }}
                aria-labelledby="notmenu"
              >
                {/* header */}
                <li className="p-1">
                  <div class="d-flex justify-content-between">
                    <h2>Notifications</h2>
                    <div>
                      <i
                        className="
                        fas
                        fa-ellipsis-h
                        pointer
                        p-2
                        rounded-circle
                        bg-gray
                      "
                        type="button"
                        data-bs-toggle="dropdown"
                      ></i>
                      <ul className="dropdown-menu">
                        <li
                          className="dropdown-item d-flex align-items-center"
                          type="button"
                        >
                          <i className="fas fa-check me-3 text-muted"></i>
                          <p className="m-0">Mark all as read</p>
                        </li>
                        <li
                          className="dropdown-item d-flex align-items-center"
                          type="button"
                        >
                          <i className="fas fa-cog me-3 text-muted"></i>
                          <p className="m-0">Privacy Checkup</p>
                        </li>
                        <li
                          className="dropdown-item d-flex align-items-center"
                          type="button"
                        >
                          <i className="fas fa-desktop me-3 text-muted"></i>
                          <p className="m-0">Privacy Shortcuts</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex" type="button">
                    <p className="rounded-pill bg-gray p-2">All</p>
                    <p className="ms-3 rounded-pill bg-primary p-2 text-white">
                      Unread
                    </p>
                  </div>
                </li>
                {/* <!-- news --> */}
                <div className="d-flex justify-content-between mx-2">
                  <h5>New</h5>
                  <a href="#h" className="text-decoration-none">
                    See All
                  </a>
                </div>
                {/* <!-- news 1 --> */}
                <li className="my-2 p-1">
                  <a
                    href="#h"
                    className="
                    d-flex
                    align-items-center
                    justify-content-evenly
                    text-decoration-none text-dark
                  "
                  >
                    <div className="d-flex align-items-center justify-content-evenly">
                      <div className="p-2">
                        <img
                          src="https://source.unsplash.com/random/1"
                          alt="avatar"
                          className="rounded-circle"
                          style={{
                            width: "58px",
                            height: "58px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div>
                        <p className="fs-7 m-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Harum unde amet at nulla quae porro.
                        </p>
                        <span className="fs-7 text-primary">
                          about an hour ago
                        </span>
                      </div>
                    </div>
                    <i className="fas fa-circle fs-7 text-primary"></i>
                  </a>
                </li>
                {/* <!-- news 2 --> */}
                <li className="my-2 p-1">
                  <a
                    href="#h"
                    className="
                    d-flex
                    align-items-center
                    justify-content-evenly
                    text-decoration-none text-dark
                  "
                  >
                    <div className="d-flex align-items-center justify-content-evenly">
                      <div className="p-2">
                        <img
                          src="https://source.unsplash.com/random/2"
                          alt="avatar"
                          className="rounded-circle"
                          style={{
                            width: "58px",
                            height: "58px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div>
                        <p className="fs-7 m-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Harum unde amet at nulla quae porro.
                        </p>
                        <span className="fs-7 text-primary">
                          about an hour ago
                        </span>
                      </div>
                    </div>
                    <i className="fas fa-circle fs-7 text-primary"></i>
                  </a>
                </li>
                {/* <!-- news 3 --> */}
                <li className="my-2 p-1">
                  <a
                    href="#h"
                    className="
                    d-flex
                    align-items-center
                    justify-content-evenly
                    text-decoration-none text-dark
                  "
                  >
                    <div className="d-flex align-items-center justify-content-evenly">
                      <div className="p-2">
                        <img
                          src="https://source.unsplash.com/random/3"
                          alt="avatar"
                          className="rounded-circle"
                          style={{
                            width: "58px",
                            height: "58px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div>
                        <p className="fs-7 m-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Harum unde amet at nulla quae porro.
                        </p>
                        <span className="fs-7 text-primary">
                          about an hour ago
                        </span>
                      </div>
                    </div>
                    <i className="fas fa-circle fs-7 text-primary"></i>
                  </a>
                </li>
                {/* <!-- news 4 --> */}
                <li className="my-2 p-1">
                  <a
                    href="#h"
                    className="
                    d-flex
                    align-items-center
                    justify-content-evenly
                    text-decoration-none text-dark
                  "
                  >
                    <div className="d-flex align-items-center justify-content-evenly">
                      <div className="p-2">
                        <img
                          src="https://source.unsplash.com/random/4"
                          alt="avatar"
                          className="rounded-circle"
                          style={{
                            width: "58px",
                            height: "58px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div>
                        <p className="fs-7 m-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Harum unde amet at nulla quae porro.
                        </p>
                        <span className="fs-7 text-primary">
                          about an hour ago
                        </span>
                      </div>
                    </div>
                    <i className="fas fa-circle fs-7 text-primary"></i>
                  </a>
                </li>
                {/* <!-- news 5 --> */}

                <li className="my-2 p-1">
                  <a
                    href="#h"
                    className="
                    d-flex
                    align-items-center
                    justify-content-evenly
                    text-decoration-none text-dark
                  "
                  >
                    <div className="d-flex align-items-center justify-content-evenly">
                      <div className="p-2">
                        <img
                          src="https://source.unsplash.com/random/5"
                          alt="avatar"
                          className="rounded-circle"
                          style={{
                            width: "58px",
                            height: "58px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div>
                        <p className="fs-7 m-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Harum unde amet at nulla quae porro.
                        </p>
                        <span className="fs-7 text-primary">
                          about an hour ago
                        </span>
                      </div>
                    </div>
                    <i className="fas fa-circle fs-7 text-primary"></i>
                  </a>
                </li>

                {/* new 1 */}
              </ul>

              {/* seondary menu */}
              <div
                id="secmenu"
                type="button"
                data-bs-auto-close="outside"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className=" d-flex align-items-center justify-content-center p-1 mx-2 rounded-circle bg-gray"
                style={{ width: "38px", height: "38px", objectfit: "cover" }}
              >
                <i className="fa-solid fa-caret-down"></i>
              </div>
              {/* sec dd  */}
              <ul
                className="dropdown-menu border-0 shadow p-3 "
                style={{ width: "23em", maxHeight: "600px" }}
                aria-labelledby="secmenu"
              >
                <li className="dropdown-item p-1 rounded d-flex" type="button">
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "45px",
                      height: "45px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <p className="m-0">John</p>
                    <p className="m-0 text-muted">See your profile</p>
                  </div>
                </li>
                <hr />

                <li
                  className="dropdown-item p-1 rounded d-flex align-items-center"
                  type="button"
                >
                  <i className="fas fa-exclamation-circle bg-gray p-2 rounded-circle"></i>
                  <div className="ms-3">
                    <p className="m-0">Give Feedback</p>
                    <p className="m-0 text-muted fs-7">
                      Help us improve the new Flexbook.
                    </p>
                  </div>
                </li>
                <hr />
                {/* <!-- options --> */}
                {/* <!-- 1 --> */}
                <li className="dropdown-item p-1 my-3 rounded" type="button">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <div className="d-flex" data-bs-toggle="dropdown">
                        <i className="fas fa-cog bg-gray p-2 rounded-circle"></i>
                        <div
                          className="
                          ms-3
                          d-flex
                          justify-content-between
                          align-items-center
                          w-100
                        "
                        >
                          <p className="m-0">Settings & Privacy</p>
                          <i className="fas fa-chevron-right"></i>
                        </div>
                      </div>
                      {/* <!-- nested menu --> */}
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-cog"></i>
                            </div>
                            <p className="m-0">Settings</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-lock"></i>
                            </div>
                            <p className="m-0">Privacy Checkup</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-unlock-alt"></i>
                            </div>
                            <p className="m-0">Privacy Shortcuts</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-list"></i>
                            </div>
                            <p className="m-0">Activity Log</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-newspaper"></i>
                            </div>
                            <p className="m-0">News Feed Preferences</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-globe"></i>
                            </div>
                            <p className="m-0">Language</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* <!-- 2 --> */}
                <li className="dropdown-item p-1 my-3 rounded" type="button">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <div className="d-flex" data-bs-toggle="dropdown">
                        <i
                          className="
                          fas
                          fa-question-circle
                          bg-gray
                          p-2
                          rounded-circle
                        "
                        ></i>
                        <div
                          className="
                          ms-3
                          d-flex
                          justify-content-between
                          align-items-center
                          w-100
                        "
                        >
                          <p className="m-0">Help & Support</p>
                          <i className="fas fa-chevron-right"></i>
                        </div>
                      </div>
                      {/* <!-- nested menu --> */}
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              // style="width: 38px; height: 38px"
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-cog"></i>
                            </div>
                            <p className="m-0">Settings</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-lock"></i>
                            </div>
                            <p className="m-0">Privacy Checkup</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-unlock-alt"></i>
                            </div>
                            <p className="m-0">Privacy Shortcuts</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-list"></i>
                            </div>
                            <p className="m-0">Activity Log</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-newspaper"></i>
                            </div>
                            <p className="m-0">News Feed Preferences</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-globe"></i>
                            </div>
                            <p className="m-0">Language</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* <!-- 3 --> */}
                <li className="dropdown-item p-1 my-3 rounded" type="button">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <div className="d-flex" data-bs-toggle="dropdown">
                        <i className="fas fa-moon bg-gray p-2 rounded-circle"></i>
                        <div
                          className="
                          ms-3
                          d-flex
                          justify-content-between
                          align-items-center
                          w-100
                        "
                        >
                          <p className="m-0">Display & Accessibility</p>
                          <i className="fas fa-chevron-right"></i>
                        </div>
                      </div>
                      {/* <!-- nested menu --> */}
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-cog"></i>
                            </div>
                            <p className="m-0">Settings</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-lock"></i>
                            </div>
                            <p className="m-0">Privacy Checkup</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-unlock-alt"></i>
                            </div>
                            <p className="m-0">Privacy Shortcuts</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-list"></i>
                            </div>
                            <p className="m-0">Activity Log</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-newspaper"></i>
                            </div>
                            <p className="m-0">News Feed Preferences</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#h"
                          >
                            <div
                              className="
                              rounded-circle
                              p-1
                              bg-gray
                              d-flex
                              align-items-center
                              justify-content-center
                              me-2
                            "
                              style={{ width: "38px", height: "38px" }}
                            >
                              <i className="fas fa-globe"></i>
                            </div>
                            <p className="m-0">Language</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* <!-- 4 --> */}
                <li className="dropdown-item p-1 my-3 rounded" type="button">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        href="./index.html"
                        className="d-flex text-decoration-none text-dark"
                      >
                        <i className="fas fa-cog bg-gray p-2 rounded-circle"></i>
                        <div
                          className="
                          ms-3
                          d-flex
                          justify-content-between
                          align-items-center
                          w-100
                        "
                        >
                          <Link
                            type="button"
                            onClick={handleLogout}
                            // to="/logout"
                            className="m-0 text-decoration-none"
                          >
                            Log Out
                          </Link>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* modal */}
        <Modal
          dialogClassName=" modal-dialog modal-sm w-75 position-absolute bottom-0 end-0 shadow  "
          style={{ transform: "translateX(-80px)" }}
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <div>
              <h2>New Message</h2>
              <h5>To:</h5>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className=" d-flex">
              <span>
                <h6>Use end-to-end encryption</h6>
              </span>
              <div className="form-check form-switch mx-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked
                />
                <label
                  className="form-check-label"
                  for="flexSwitchCheckChecked"
                ></label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Footer>
        </Modal>
        {/* chat modal */}

        <Modal
          show={chat}
          style={{
            transform: "translateX(-80px)",
          }}
          onHide={handleclose}
          dialogClassName="modal-dialog modal-sm position-absolute bottom-0 end-0 border-0 w-75"
        >
          <Modal.Header closeButton>
            <div className=" dropdown-item d-flex rounded">
              <div className=" position-relative">
                <img
                  src="https://source.unsplash.com/random/1"
                  alt="ava"
                  className=" rounded-circle me-2 "
                  style={{ width: "38px", height: "38px", objectFit: "cover" }}
                />
                <span
                  className=" position-absolute m-2 bottom-0  border-0  translate-middle bg-success border border-light rounded-circle p-1 "
                  style={{ left: "75%" }}
                >
                  <span className=" visually-hidden"></span>
                </span>
              </div>
              <div className=" ">
                <p className=" m-0 ">
                  Raghul <i className="fa-solid fa-chevron-down"></i>
                </p>
                <span className=" text-muted fs-7 ">Active Now</span>
              </div>
            </div>
            <i
              className="fa-solid fa-video mx-2  text-primary"
              type="button"
            ></i>
            <i
              className="fa-solid fa-phone mx-2 text-primary "
              type="button"
            ></i>
          </Modal.Header>
          <Modal.Body>
            <div className=" overflow-auto " style={{ maxHeight: "300px" }}>
              <li className="list-group-item border-0 d-flex">
                <div>
                  <img
                    src="https://source.unsplash.com/random/1"
                    alt="msg"
                    className=" rounded-circle me-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="list-group-item border-0 d-flex justify-content-end">
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="msg"
                    className=" rounded-circle ms-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </li>
              <li className="list-group-item border-0 d-flex">
                <div>
                  <img
                    src="https://source.unsplash.com/random/1"
                    alt="msg"
                    className=" rounded-circle me-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="list-group-item border-0 d-flex justify-content-end">
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="msg"
                    className=" rounded-circle ms-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </li>
              <li className="list-group-item border-0 d-flex">
                <div>
                  <img
                    src="https://source.unsplash.com/random/1"
                    alt="msg"
                    className=" rounded-circle me-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="list-group-item border-0 d-flex justify-content-end">
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="msg"
                    className=" rounded-circle ms-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </li>
            </div>
          </Modal.Body>
          <Modal.Footer dialogclassName=" border-0 p-0 m-0">
            <div className=" d-flex ">
              <div className="  d-flex align-items-center">
                <i
                  class="fa-solid fa-circle-plus mx-1 text-primary fs-5"
                  type="button"
                ></i>
                <i
                  class="fa-solid fa-file-image mx-1 text-primary fs-5"
                  type="button"
                ></i>
                <i
                  class="fa-solid fa-portrait mx-1 text-primary fs-5"
                  type="button"
                ></i>
                <i
                  class="fa-solid fa-adjust mx-1 text-primary fs-5"
                  type="button"
                ></i>
              </div>
              <div className=" ">
                <input
                  type="text"
                  placeHolder="Aa"
                  className=" form-control rounded-pill border-0 bg-gray"
                />
              </div>
              <div className=" d-flex align-items-center mx-2">
                <i
                  class="fa-solid fa-thumbs-up text-muted fs-5 "
                  type="button"
                ></i>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
        <Modal
          show={chat2}
          style={{ transform: "translateX(-80px)" }}
          onHide={handleclose2}
          dialogClassName=" modal-dialog modal-sm position-absolute bottom-0 end-0 border-0 w-75  "
        >
          <Modal.Header closeButton>
            <div className=" dropdown-item d-flex rounded">
              <div className=" position-relative">
                <img
                  src="https://source.unsplash.com/random/2"
                  alt="ava"
                  className=" rounded-circle me-2 "
                  style={{ width: "38px", height: "38px", objectFit: "cover" }}
                />
                <span
                  className=" position-absolute m-2 bottom-0  border-0  translate-middle bg-success border border-light rounded-circle p-1 "
                  style={{ left: "75%" }}
                >
                  <span className=" visually-hidden"></span>
                </span>
              </div>
              <div className=" ">
                <p className=" m-0 ">
                  Essai <i className="fa-solid fa-chevron-down"></i>
                </p>
                <span className=" text-muted fs-7 ">Active Now</span>
              </div>
            </div>
            <i
              className="fa-solid fa-video mx-2  text-primary"
              type="button"
            ></i>
            <i
              className="fa-solid fa-phone mx-2 text-primary "
              type="button"
            ></i>
          </Modal.Header>
          <Modal.Body>
            <div className=" overflow-auto " style={{ maxHeight: "300px" }}>
              <li className="list-group-item border-0 d-flex">
                <div>
                  <img
                    src="https://source.unsplash.com/random/2"
                    alt="msg"
                    className=" rounded-circle me-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="list-group-item border-0 d-flex justify-content-end">
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="msg"
                    className=" rounded-circle ms-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </li>
              <li className="list-group-item border-0 d-flex">
                <div>
                  <img
                    src="https://source.unsplash.com/random/2"
                    alt="msg"
                    className=" rounded-circle me-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="list-group-item border-0 d-flex justify-content-end">
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="msg"
                    className=" rounded-circle ms-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </li>
              <li className="list-group-item border-0 d-flex">
                <div>
                  <img
                    src="https://source.unsplash.com/random/2"
                    alt="msg"
                    className=" rounded-circle me-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="list-group-item border-0 d-flex justify-content-end">
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="msg"
                    className=" rounded-circle ms-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </li>
            </div>
          </Modal.Body>
          <Modal.Footer dialogclassName=" border-0 p-0 m-0">
            <div className=" d-flex ">
              <div className="  d-flex align-items-center">
                <i
                  className="fa-solid fa-circle-plus mx-1 text-primary fs-5"
                  type="button"
                ></i>
                <i
                  className="fa-solid fa-file-image mx-1 text-primary fs-5"
                  type="button"
                ></i>
                <i
                  className="fa-solid fa-portrait mx-1 text-primary fs-5"
                  type="button"
                ></i>
                <i
                  className="fa-solid fa-adjust mx-1 text-primary fs-5"
                  type="button"
                ></i>
              </div>
              <div className=" ">
                <input
                  type="text"
                  placeHolder="Aa"
                  className=" form-control rounded-pill border-0 bg-gray"
                />
              </div>
              <div className=" d-flex align-items-center mx-2">
                <i
                  className="fa-solid fa-thumbs-up text-muted fs-5 "
                  type="button"
                ></i>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
        <Modal
          show={chat3}
          style={{ transform: "translateX(-80px)" }}
          onHide={handleclose3}
          dialogClassName=" modal-dialog modal-sm position-absolute bottom-0 end-0 border-0 w-75  "
        >
          <Modal.Header closeButton>
            <div className=" dropdown-item d-flex rounded">
              <div className=" position-relative">
                <img
                  src="https://source.unsplash.com/random/3"
                  alt="ava"
                  className=" rounded-circle me-2 "
                  style={{ width: "38px", height: "38px", objectFit: "cover" }}
                />
                <span
                  className=" position-absolute m-2 bottom-0  border-0  translate-middle bg-success border border-light rounded-circle p-1 "
                  style={{ left: "75%" }}
                >
                  <span className=" visually-hidden"></span>
                </span>
              </div>
              <div className=" ">
                <p className=" m-0 ">
                  Virat <i className="fa-solid fa-chevron-down"></i>
                </p>
                <span className=" text-muted fs-7 ">Active Now</span>
              </div>
            </div>
            <i
              className="fa-solid fa-video mx-2  text-primary"
              type="button"
            ></i>
            <i
              className="fa-solid fa-phone mx-2 text-primary "
              type="button"
            ></i>
          </Modal.Header>
          <Modal.Body>
            <div className=" overflow-auto " style={{ maxHeight: "300px" }}>
              <li className="list-group-item border-0 d-flex">
                <div>
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="msg"
                    className=" rounded-circle me-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="list-group-item border-0 d-flex justify-content-end">
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="msg"
                    className=" rounded-circle ms-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </li>
              <li className="list-group-item border-0 d-flex">
                <div>
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="msg"
                    className=" rounded-circle me-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="list-group-item border-0 d-flex justify-content-end">
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="msg"
                    className=" rounded-circle ms-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </li>
              <li className="list-group-item border-0 d-flex">
                <div>
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="msg"
                    className=" rounded-circle me-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="list-group-item border-0 d-flex justify-content-end">
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="msg"
                    className=" rounded-circle ms-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </li>
            </div>
          </Modal.Body>
          <Modal.Footer dialogclassName=" border-0 p-0 m-0">
            <div className=" d-flex ">
              <div className="  d-flex align-items-center">
                <i
                  className="fa-solid fa-circle-plus mx-1 text-primary fs-5"
                  type="button"
                ></i>
                <i
                  className="fa-solid fa-file-image mx-1 text-primary fs-5"
                  type="button"
                ></i>
                <i
                  className="fa-solid fa-portrait mx-1 text-primary fs-5"
                  type="button"
                ></i>
                <i
                  className="fa-solid fa-adjust mx-1 text-primary fs-5"
                  type="button"
                ></i>
              </div>
              <div className=" ">
                <input
                  type="text"
                  placeHolder="Aa"
                  className=" form-control rounded-pill border-0 bg-gray"
                />
              </div>
              <div className=" d-flex align-items-center mx-2">
                <i
                  className="fa-solid fa-thumbs-up text-muted fs-5 "
                  type="button"
                ></i>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
        <Modal
          show={chat4}
          style={{ transform: "translateX(-80px)" }}
          onHide={handleclose4}
          dialogClassName=" modal-dialog modal-sm position-absolute bottom-0 end-0 border-0 w-75  "
        >
          <Modal.Header closeButton>
            <div className=" dropdown-item d-flex rounded">
              <div className=" position-relative">
                <img
                  src="https://source.unsplash.com/random/4"
                  alt="ava"
                  className=" rounded-circle me-2 "
                  style={{ width: "38px", height: "38px", objectFit: "cover" }}
                />
                <span
                  className=" position-absolute m-2 bottom-0  border-0  translate-middle bg-success border border-light rounded-circle p-1 "
                  style={{ left: "75%" }}
                >
                  <span className=" visually-hidden"></span>
                </span>
              </div>
              <div className=" ">
                <p className=" m-0 ">
                  Rohit <i className="fa-solid fa-chevron-down"></i>
                </p>
                <span className=" text-muted fs-7 ">Active Now</span>
              </div>
            </div>
            <i
              className="fa-solid fa-video mx-2  text-primary"
              type="button"
            ></i>
            <i
              className="fa-solid fa-phone mx-2 text-primary "
              type="button"
            ></i>
          </Modal.Header>
          <Modal.Body>
            <div className=" overflow-auto " style={{ maxHeight: "300px" }}>
              <li className="list-group-item border-0 d-flex">
                <div>
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="msg"
                    className=" rounded-circle me-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="list-group-item border-0 d-flex justify-content-end">
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="msg"
                    className=" rounded-circle ms-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </li>
              <li className="list-group-item border-0 d-flex">
                <div>
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="msg"
                    className=" rounded-circle me-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="list-group-item border-0 d-flex justify-content-end">
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="msg"
                    className=" rounded-circle ms-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </li>
              <li className="list-group-item border-0 d-flex">
                <div>
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="msg"
                    className=" rounded-circle me-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="list-group-item border-0 d-flex justify-content-end">
                <p className="   bg-gray p-2 rounded">
                  Lorem ipsum dolor sit amet.
                </p>
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="msg"
                    className=" rounded-circle ms-2 "
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </li>
            </div>
          </Modal.Body>
          <Modal.Footer dialogclassName=" border-0 p-0 m-0">
            <div className=" d-flex ">
              <div className="  d-flex align-items-center">
                <i
                  className="fa-solid fa-circle-plus mx-1 text-primary fs-5"
                  type="button"
                ></i>
                <i
                  className="fa-solid fa-file-image mx-1 text-primary fs-5"
                  type="button"
                ></i>
                <i
                  className="fa-solid fa-portrait mx-1 text-primary fs-5"
                  type="button"
                ></i>
                <i
                  className="fa-solid fa-adjust mx-1 text-primary fs-5"
                  type="button"
                ></i>
              </div>
              <div className=" ">
                <input
                  type="text"
                  placeHolder="Aa"
                  className=" form-control rounded-pill border-0 bg-gray"
                />
              </div>
              <div className=" d-flex align-items-center mx-2">
                <i
                  class="fa-solid fa-thumbs-up text-muted fs-5 "
                  type="button"
                ></i>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>

      {/* <Home /> */}
    </>
  );
};

export default Navbar;
