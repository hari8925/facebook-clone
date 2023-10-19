import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { imgDb } from "./Footer";

import Modal from "react-bootstrap/Modal";
import Navbar from "./Navbar";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   post modal by hari
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  //post image funcion;
  // const [txt, setTxt] = useState("");
  // const [img, setImg] = useState("");

  const handleupload = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
  };

  return (
    <>
      <Navbar />
      <div className=" container-fluid">
        <div className=" row justify-content-evenly">
          {/* sidebar */}
          <div className="col-12 col-lg-3  ">
            <div
              className=" d-none d-lg-block h-100 fixed-top overflow-hidden scrollbar "
              style={{ maxWidth: "360px", width: "100%", zIndex: "4" }}
            >
              <ul
                className=" navbar-nav mt-4 ms-3 d-flex flex-column pb-5 mb-5 "
                style={{ paddingTop: "56px" }}
              >
                {/* top */}

                {/* avathar */}
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <img
                        src="https://source.unsplash.com/collection/happy-people"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <p className="m-0">Hari</p>
                    </div>
                  </Link>
                </li>
                {/* items */}
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/i0pziEs5Wj6.png"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <p className="m-0">Friends</p>
                    </div>
                  </Link>
                </li>
                {/* item-3 */}
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <p className="m-0">Climate Science Center</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <p className="m-0">Memories</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/k0Svfg6IJtR.png"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <p className="m-0">Saved</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/MhkwI3R0SHP.png"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <p className="m-0">Groups</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/XNFKm5WC2yS.png"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <p className="m-0">Video</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/G_tsqBLQpdP.png"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <p className="m-0">Markplace</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <p className="m-0">Feeds</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <p className="m-0">Events</p>
                    </div>
                  </Link>
                </li>
                {/* seemore */}

                {/* shortcut */}
              </ul>
            </div>
          </div>
          {/* card */}
          <div className="col-12 col-lg-6 ">
            <div
              className=" d-flex flex-column justify-content-center w-100 mx-auto"
              style={{ paddingTop: "56px" }}
            >
              {/* story sec */}
              <div className=" d-flex mx-auto position-relative mt-5">
                {/* s-1 */}
                <div
                  className="  mx-1 bg-white rounded story"
                  style={{ width: "9em", height: "250px" }}
                >
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="story post"
                    className=" rounded-top card-img-top   "
                    style={{
                      minHeight: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className=" d-flex align-items-center justify-content-center position-relative"
                    style={{ minHeight: "50px" }}
                  >
                    <p className=" mt-2  text-center fs-7 fw-bold">
                      Create Story
                    </p>
                    <div className=" position-absolute top-0 start-50 translate-middle">
                      <i className=" fas fa-plus-circle fs-3 text-primary bg-white p-1 rounded-circle"></i>
                    </div>
                  </div>
                </div>
                {/* s-2 */}
                <div
                  className="rounded mx-1 story "
                  type="button"
                  style={{ width: "9em", height: "250px" }}
                >
                  <img
                    src="https://source.unsplash.com/random/1"
                    alt="story-2"
                    className=" card-img-top rounded"
                    style={{ minHeight: "250px", objectFit: "cover" }}
                  />
                </div>
                {/* s-3 */}
                <div
                  className="rounded mx-1 story"
                  type="button"
                  style={{ width: "9em", height: "250px" }}
                >
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="story-2"
                    className=" card-img-top rounded"
                    style={{ minHeight: "250px", objectFit: "cover" }}
                  />
                </div>
                {/* s-4 */}
                <div
                  className="rounded mx-1 story"
                  type="button"
                  style={{ width: "9em", height: "250px" }}
                >
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="story-2"
                    className=" card-img-top rounded"
                    style={{ minHeight: "250px", objectFit: "cover" }}
                  />
                </div>

                <div className=" position-absolute top-50 start-100 translate-middle mt-5 d-none d-lg-block">
                  <i className=" fas fa-arrow-right p-3 border text-muted bg-white rounded-circle"></i>
                </div>
              </div>
              {/* create post */}
              <div className=" row mx-auto w-100">
                <div className=" col-12 col-lg-9 bg-white  mx-auto  mt-3 border rounded shadow p-3">
                  <div type="button" className=" d-flex ">
                    <div className=" p-1">
                      <img
                        src="https://source.unsplash.com/collection/happy-people"
                        className=" rounded-circle "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                        alt="avathar"
                      />
                    </div>
                    <input
                      type="text"
                      className=" btn shadow-none form-control rounded-pill border-0 bg-gray "
                      placeholder="What's on your mind,Hari?"
                      onClick={handleShow1}
                    />
                  </div>
                  <hr />

                  {/* modal */}

                  <Modal dialogClassName="" show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                      <Modal.Title>Create Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className=" d-flex align-items-center  ">
                        <div className="">
                          <img
                            className=" rounded-circle"
                            src="https://source.unsplash.com/random/1"
                            alt="post"
                            style={{
                              width: "38px",
                              height: "38px",
                              objectFit: "cover",
                            }}
                          />
                          <span className=" m-0 fs-6 text-dark fw-bold mx-2 ">
                            HariPrasad
                          </span>
                        </div>
                      </div>
                      <div className=" mt-3">
                        <textarea
                          // onChange={(e) => setTxt(e.target.value)}
                          cols={20}
                          rows={5}
                          type="text"
                          className=" text-muted border-0 fs-3 form-control shadow-none"
                          placeholder="What's on your mind, Hari?"
                        />
                      </div>
                      <div className="my-1">
                        <input
                          type="file"
                          onChange={(e) => handleupload(e)}
                          className=" form-control"
                        />
                      </div>

                      <div className="mx-2 d-flex align-items-center justify-content-between">
                        <img
                          className=" rounded"
                          src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                          alt="colo img"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                        />
                        <i class="fa-regular fa-face-smile fs-4 text-muted"></i>
                      </div>
                      <div className="  bg-white border rounded mt-3 p-2">
                        <div className=" d-flex align-items-center justify-content-between">
                          <ul className=" list-unstyled mt-3">
                            <li>
                              <h6>Add to your post</h6>
                            </li>
                          </ul>
                          <div className="">
                            <ul className=" list-unstyled d-flex">
                              <li className=" rounded mx-2">
                                <img
                                  type="button"
                                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
                                  alt="post"
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    objectFit: "cover",
                                  }}
                                />
                              </li>
                              <li>
                                <img
                                  className=" rounded mx-2"
                                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png"
                                  alt="post"
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    objectFit: "cover",
                                  }}
                                />
                              </li>
                              <li>
                                <img
                                  className=" rounded mx-2"
                                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"
                                  alt="post"
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    objectFit: "cover",
                                  }}
                                />
                              </li>
                              <li>
                                <img
                                  className=" rounded mx-2"
                                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png"
                                  alt="post"
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    objectFit: "cover",
                                  }}
                                />
                              </li>
                              <li>
                                <img
                                  className=" rounded mx-2"
                                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png"
                                  alt="post"
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    objectFit: "cover",
                                  }}
                                />
                              </li>
                              <li>
                                <i
                                  className=" rounded mx-2 fas fa-ellipsis-h"
                                  src=""
                                  alt="post"
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    objectFit: "cover",
                                  }}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className=" btn btn-primary mt-3 w-100 fw-bold"
                      >
                        Post
                      </button>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                  </Modal>
                  {/* action */}
                  <div className=" d-flex   mt-3">
                    <div
                      className=" d-flex align-items-center justify-content-center rounded dropdown-item post-over p-2"
                      type="button"
                      onClick={handleShow1}
                    >
                      {/* <i className=" fas fa-video me-2 text-danger"></i> */}
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png"
                        alt="video"
                        className=" rounded mx-2"
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "cover",
                        }}
                      />
                      <p className=" m-0 text-muted fs-6 ">Live Video</p>
                    </div>
                    <div
                      className="post-over p-2 d-flex align-items-center justify-content-center rounded dropdown-item"
                      type="button"
                      onClick={handleShow1}
                    >
                      {/* <i className=" fas fa-photo-video me-2 text-success"></i> */}
                      <img
                        type="button"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
                        alt="video"
                        className=" rounded mx-2"
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "cover",
                        }}
                      />
                      <p className=" m-0 text-muted fs-6 ">Photo/Video</p>
                    </div>
                    <div
                      className=" d-flex align-items-center justify-content-center rounded dropdown-item post-over"
                      type="button"
                      onClick={handleShow1}
                    >
                      {/* <i className=" fas fa-smile me-2 text-warning"></i> */}
                      <img
                        type="button"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"
                        alt="video"
                        className=" rounded mx-2"
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "cover",
                        }}
                      />
                      <p className=" m-0 text-muted fs-6 ">Feeling/Activity</p>
                    </div>
                  </div>
                </div>
              </div>

              {/*  card-1 */}
              <div className=" row mx-auto   w-100">
                <div className=" col-12 col-lg-9 bg-white   mx-auto mt-3  rounded shadow p-4">
                  <div>
                    <h5 className=" text-muted mt-2">Suggested for you</h5>
                  </div>
                  <hr />
                  <div className=" d-flex   justify-content-between ">
                    <div className="d-flex  ">
                      <img
                        src="https://source.unsplash.com/random/3"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                        alt="avathar"
                      />
                      <h6 className=" text-muted ">Marvel Fans and more</h6>

                      <span className=" text-muted fs-7 mx-2 ">
                        Oct 15 at 1:20pm
                      </span>
                    </div>
                    <i
                      className=" fas fa-ellipsis-h text-muted fs-5 "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="post"
                    ></i>

                    <i class="fa-solid fa-x text-muted fs-5   "></i>
                    <ul
                      className=" dropdown-menu border-0 shadow "
                      aria-labelledby="post"
                    >
                      <li className=" d-flex align-items-center ">
                        <a
                          href="#d "
                          className=" dropdown-item d-flex align-items-center justify-content-around fs-7 "
                        >
                          Edit post
                        </a>
                      </li>
                      <li className=" d-flex align-items-center ">
                        <a
                          href="#d "
                          className=" dropdown-item d-flex align-items-center justify-content-around fs-7 "
                        >
                          Delete post
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className=" mt-3   "
                    // style={{ width: "100%", heigth: "600px" }}
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <img
                      // style={{
                      //   objectFit: "cover",
                      //   width: "100%",
                      //   height: "100%",
                      // }}
                      src="https://source.unsplash.com/random/6"
                      alt=".."
                      className=" img-fluid  "
                    />
                  </div>
                  <div className=" mt-1 d-flex justify-content-between align-items-center ">
                    <div>
                      <div className=" d-flex align-items-center ">
                        <img
                          src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.8'/%3E%3Cpath d='M12.5278 8.1957c.4057.1104.6772.4854.623.9024-.3379 2.6001-2.5167 4.9012-5.1542 4.9012s-4.8163-2.3011-5.1542-4.9012c-.0542-.417.2173-.792.623-.9024.8708-.237 2.5215-.596 4.5312-.596 2.0098 0 3.6605.359 4.5312.596Z' fill='%234B280E'/%3E%3Cpath d='M11.5809 12.3764c-.9328.9843-2.1948 1.6228-3.5841 1.6228-1.3892 0-2.6512-.6383-3.5839-1.6225a1.5425 1.5425 0 0 0-.016-.0174c.4475-1.0137 2.2-1.3599 3.5999-1.3599 1.4 0 3.1514.3468 3.5998 1.3599l-.0157.0171Z' fill='url(%23paint3_linear_15251_63610)'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.3049 5.8793c.1614-1.1485-.6387-2.2103-1.7872-2.3717l-.0979-.0138c-1.1484-.1614-2.2103.6388-2.3717 1.7872l-.0163.1164a.5.5 0 0 0 .9902.1392l.0163-.1164c.0846-.6016.6408-1.0207 1.2424-.9362l.0978.0138c.6016.0845 1.0207.6407.9362 1.2423l-.0164.1164a.5.5 0 0 0 .9903.1392l.0163-.1164ZM2.6902 5.8793c-.1614-1.1485.6387-2.2103 1.7872-2.3717l.0979-.0138c1.1484-.1614 2.2103.6388 2.3717 1.7872l.0164.1164a.5.5 0 1 1-.9903.1392l-.0163-.1164c-.0846-.6016-.6408-1.0207-1.2423-.9362l-.098.0138c-.6015.0845-1.0206.6407-.936 1.2423l.0163.1164a.5.5 0 0 1-.9902.1392l-.0164-.1164Z' fill='%231C1C1D'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23FF5758' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FF5758' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5272 10.9202) scale(10.1818)'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23FFF287' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.396' y1='2.3999' x2='13.5954' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23F68628'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear_15251_63610' x1='5.1979' y1='10.7996' x2='5.245' y2='14.2452' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF60A4'/%3E%3Cstop offset='.2417' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23BC0A26'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.002 0h16v15.9992h-16z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                          alt=""
                          style={{
                            width: "28px",
                            height: "28px",
                            objectFit: "cover",
                          }}
                        />
                        <img
                          className="mx-1"
                          src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                          alt=""
                          style={{
                            width: "28px",
                            height: "28px",
                            objectFit: "cover",
                          }}
                        />
                        <p className="text-muted mx-2 mt-3">500k</p>
                      </div>
                    </div>
                    {/* seconf */}
                    <div className=" d-flex align-items-center">
                      <p className=" m-0 text-muted mx-1">345k</p>
                      <i class="fa-solid fa-comment me-3"></i>
                      <p className=" m-0 text-muted mx-1">345k</p>

                      <i class="fa-solid fa-share"></i>
                    </div>
                  </div>
                  <hr />
                  <div className=" d-flex align-items-center justify-content-between">
                    <div className=" ">
                      <i class="fa-regular fa-thumbs-up fs-5 mx-2 text-muted"></i>
                      Like
                    </div>

                    <div className=" align-items-center d-flex">
                      <i class="fa-regular fa-comment fs-5 mx-2  text-muted"></i>
                      Comments
                    </div>

                    <div className=" d-flex align-items-center ">
                      <i class="fa-solid fa-share  fs-5 mx-2 text-muted"></i>
                      Share
                    </div>
                  </div>
                </div>
              </div>
              {/* card-2 */}
              <div className=" row mx-auto   w-100">
                <div className=" col-12 col-lg-9 bg-white mx-auto mt-3  rounded shadow p-4">
                  <div>
                    <h5 className=" text-muted mt-2">Suggested for you</h5>
                  </div>
                  <hr />
                  <div className=" d-flex   justify-content-between ">
                    <div className="d-flex  ">
                      <img
                        src="https://source.unsplash.com/random/3"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                        alt="avathar"
                      />
                      <h6 className=" text-muted ">Marvel Fans and more</h6>

                      <span className=" text-muted fs-7 mx-2 ">
                        Oct 15 at 1:20pm
                      </span>
                    </div>
                    <i
                      className=" fas fa-ellipsis-h text-muted fs-5 "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="post"
                    ></i>

                    <i class="fa-solid fa-x text-muted fs-5   "></i>
                    <ul
                      className=" dropdown-menu border-0 shadow "
                      aria-labelledby="post"
                    >
                      <li className=" d-flex align-items-center ">
                        <a
                          href="#d "
                          className=" dropdown-item d-flex align-items-center justify-content-around fs-7 "
                        >
                          Edit post
                        </a>
                      </li>
                      <li className=" d-flex align-items-center ">
                        <a
                          href="#d "
                          className=" dropdown-item d-flex align-items-center justify-content-around fs-7 "
                        >
                          Delete post
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className=" mt-3   "
                    // style={{ width: "100%", heigth: "600px" }}
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <img
                      // style={{
                      //   objectFit: "cover",
                      //   width: "100%",
                      //   height: "100%",
                      // }}
                      src="https://source.unsplash.com/random/9"
                      alt=".."
                      className=" img-fluid  "
                    />
                  </div>
                  <div className=" mt-1 d-flex justify-content-between align-items-center ">
                    <div>
                      <div className=" d-flex align-items-center ">
                        <img
                          src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.8'/%3E%3Cpath d='M12.5278 8.1957c.4057.1104.6772.4854.623.9024-.3379 2.6001-2.5167 4.9012-5.1542 4.9012s-4.8163-2.3011-5.1542-4.9012c-.0542-.417.2173-.792.623-.9024.8708-.237 2.5215-.596 4.5312-.596 2.0098 0 3.6605.359 4.5312.596Z' fill='%234B280E'/%3E%3Cpath d='M11.5809 12.3764c-.9328.9843-2.1948 1.6228-3.5841 1.6228-1.3892 0-2.6512-.6383-3.5839-1.6225a1.5425 1.5425 0 0 0-.016-.0174c.4475-1.0137 2.2-1.3599 3.5999-1.3599 1.4 0 3.1514.3468 3.5998 1.3599l-.0157.0171Z' fill='url(%23paint3_linear_15251_63610)'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.3049 5.8793c.1614-1.1485-.6387-2.2103-1.7872-2.3717l-.0979-.0138c-1.1484-.1614-2.2103.6388-2.3717 1.7872l-.0163.1164a.5.5 0 0 0 .9902.1392l.0163-.1164c.0846-.6016.6408-1.0207 1.2424-.9362l.0978.0138c.6016.0845 1.0207.6407.9362 1.2423l-.0164.1164a.5.5 0 0 0 .9903.1392l.0163-.1164ZM2.6902 5.8793c-.1614-1.1485.6387-2.2103 1.7872-2.3717l.0979-.0138c1.1484-.1614 2.2103.6388 2.3717 1.7872l.0164.1164a.5.5 0 1 1-.9903.1392l-.0163-.1164c-.0846-.6016-.6408-1.0207-1.2423-.9362l-.098.0138c-.6015.0845-1.0206.6407-.936 1.2423l.0163.1164a.5.5 0 0 1-.9902.1392l-.0164-.1164Z' fill='%231C1C1D'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23FF5758' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FF5758' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5272 10.9202) scale(10.1818)'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23FFF287' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.396' y1='2.3999' x2='13.5954' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23F68628'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear_15251_63610' x1='5.1979' y1='10.7996' x2='5.245' y2='14.2452' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF60A4'/%3E%3Cstop offset='.2417' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23BC0A26'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.002 0h16v15.9992h-16z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                          alt=""
                          style={{
                            width: "28px",
                            height: "28px",
                            objectFit: "cover",
                          }}
                        />
                        <img
                          className="mx-1"
                          src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                          alt=""
                          style={{
                            width: "28px",
                            height: "28px",
                            objectFit: "cover",
                          }}
                        />
                        <p className="text-muted mx-2 mt-3">500k</p>
                      </div>
                    </div>
                    {/* seconf */}
                    <div className=" d-flex align-items-center">
                      <p className=" m-0 text-muted mx-1">345k</p>
                      <i class="fa-solid fa-comment me-3"></i>
                      <p className=" m-0 text-muted mx-1">345k</p>

                      <i class="fa-solid fa-share"></i>
                    </div>
                  </div>
                  <hr />
                  <div className=" d-flex align-items-center justify-content-between">
                    <div className=" ">
                      <i class="fa-regular fa-thumbs-up fs-5 mx-2 text-muted"></i>
                      Like
                    </div>

                    <div className=" align-items-center d-flex">
                      <i class="fa-regular fa-comment fs-5 mx-2  text-muted"></i>
                      Comments
                    </div>

                    <div className=" d-flex align-items-center ">
                      <i class="fa-solid fa-share  fs-5 mx-2 text-muted"></i>
                      Share
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* chatbar */}
          <div className="col-12 col-lg-3 ">
            <div
              className=" d-none d-lg-block h-100 position-fixed   end-0 overflow-hidden scrollbar "
              style={{
                maxWidth: "360px",
                paddingTop: "56px",
                left: "initial !important",
                width: "100%",
                zIndex: "4",
              }}
            >
              <div className=" p-3 mt-4">
                <h5 className=" text-muted ">Sponsored</h5>
                <li className=" dropdown-item my-2 d-flex justify-content-between p-1">
                  <a
                    href="#h"
                    className=" text-decoration-none text-dark d-flex align-items-center"
                  >
                    <img
                      src="https://source.unsplash.com/random/1"
                      alt="sponser"
                      className=" rounded me-3"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <p className=" m-0">Lorem, ipsum dolor.</p>
                      <span className=" text-muted fs-7">game.com</span>
                    </div>
                  </a>
                  <div
                    className=" d-flex rounded-circle align-items-center justify-content-center p-2 bg-white mx-1 nav-item"
                    type="button"
                    style={{ width: "38px", height: "38px" }}
                  >
                    <i
                      className=" fas fa-ellipsis-h text-muted"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                    ></i>

                    <div class="dropdown">
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li className=" dropdown-item">
                          <a
                            href="#G"
                            className=" d-flex align-items-center text-decoration-none text-dark"
                          >
                            <i className=" far fa-window-close text-muted"></i>
                            <div className="mx-3">
                              <p className="m-0">Hide Ad</p>
                              <span className=" text-muted fs-7">
                                Never seen this add again.
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className=" dropdown-item">
                          <a
                            href="#G"
                            className=" d-flex align-items-center text-decoration-none text-dark"
                          >
                            {/* <i className=" far fa-window-close"></i> */}
                            <i class="fas fa-exclamation-triangle text-muted"></i>
                            <div className="mx-3">
                              <p className="m-0">Report ad</p>
                              <span className=" text-muted fs-7">
                                Tell us about a problem with this ad.
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className=" dropdown-item">
                          <a
                            href="#G"
                            className=" d-flex align-items-center text-decoration-none text-dark"
                          >
                            {/* <i className=" far fa-window-close"></i> */}
                            <i class="fas fa-info-circle text-muted"></i>
                            <div className="mx-3">
                              <p className="m-0">Why am i seeing this ad?</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className=" dropdown-item my-2 d-flex justify-content-between  p-1">
                  <a
                    href="#h"
                    className=" text-decoration-none text-dark d-flex align-items-center"
                  >
                    <img
                      src="https://source.unsplash.com/random/3"
                      alt="sponser"
                      className=" rounded me-3"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <p className=" m-0">Lorem, ipsum dolor.</p>
                      <span className=" text-muted fs-7">game.com</span>
                    </div>
                  </a>
                  <div
                    className=" d-flex rounded-circle  align-items-center  justify-content-center p-2 bg-white mx-1nav-item"
                    type="button"
                    style={{ width: "38px", height: "38px" }}
                  >
                    <i
                      className=" fas fa-ellipsis-h text-muted"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                    ></i>
                    <div class="dropdown">
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li className=" dropdown-item">
                          <a
                            href="#G"
                            className=" d-flex align-items-center text-decoration-none text-dark"
                          >
                            <i className=" far fa-window-close text-muted"></i>
                            <div className="mx-3">
                              <p className="m-0">Hide Ad</p>
                              <span className=" text-muted fs-7">
                                Never seen this add again.
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className=" dropdown-item">
                          <a
                            href="#G"
                            className=" d-flex align-items-center text-decoration-none text-dark"
                          >
                            {/* <i className=" far fa-window-close"></i> */}
                            <i class="fas fa-exclamation-triangle text-muted"></i>
                            <div className="mx-3">
                              <p className="m-0">Report ad</p>
                              <span className=" text-muted fs-7">
                                Tell us about a problem with this ad.
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className=" dropdown-item">
                          <a
                            href="#G"
                            className=" d-flex align-items-center text-decoration-none text-dark"
                          >
                            {/* <i className=" far fa-window-close"></i> */}
                            <i class="fas fa-info-circle text-muted"></i>
                            <div className="mx-3">
                              <p className="m-0">Why am i seeing this ad?</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <hr />
                <div className=" d-flex justify-content-between align-items-center my-3">
                  <p className="text-muted fs-5 m-0">Contacts</p>
                  <div className=" text-muted">
                    <i
                      class="fa-solid fa-magnifying-glass mx-2"
                      type="button"
                      onClick={handleShow}
                    ></i>
                    <i
                      className=" fas fa-ellipsis-h text-muted mx-2"
                      type="button"
                      data-bs-toggle="dropdown"
                    ></i>
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
                  </div>
                </div>

                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://source.unsplash.com/random/1"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Essai</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://source.unsplash.com/random/3"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Virat</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://source.unsplash.com/random/2"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Raghul</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://source.unsplash.com/random/4"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Gill</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://source.unsplash.com/random/5"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Shreyas</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://source.unsplash.com/random/6"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Hardik</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://source.unsplash.com/random/7"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Jadeja</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://source.unsplash.com/random/8"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Kuldeep</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://source.unsplash.com/random/9"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Bumrah</p>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div
          type="button"
          onClick={handleShow}
          className=" fixed-bottom me-5 p-3"
          style={{ zIndex: "6", left: "initial" }}
        >
          <i className=" fas fa-edit bg-white rounded-circle p-3 shadow"></i>
        </div>
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
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Home;
