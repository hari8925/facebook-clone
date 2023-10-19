import React from "react";
// import Home from "./Home";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Market = () => {
  return (
    <>
      <Navbar />
      <div className=" container-fluid">
        <div className=" row justify-content-evenly">
          <div className="col-12 col-lg-3 ">
            <div
              className=" d-none bg-white d-lg-block h-100 fixed-top overflow-hidden scrollbar "
              style={{ maxWidth: "360px", width: "100%", zIndex: "4" }}
            >
              <ul
                className=" navbar-nav mt-4 ms-3 d-flex flex-column pb-5 mb-5 "
                style={{ paddingTop: "56px" }}
              >
                {/* top */}

                <li className=" dropdown-item p-1 rounded">
                  <div className=" d-flex justify-content-between align-items-center">
                    <div className=" p-2">
                      <h4>Marketplace</h4>
                    </div>

                    <div>
                      <i class="fa-solid fa-gear  text-muted fs-4"></i>
                    </div>
                  </div>
                  {/* <Link className=" text-decoration-none text-dark d-flex align-items-center">
                  
                  </Link> */}
                </li>
                {/* items */}
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2 w-100">
                      <input
                        type="text"
                        placeholder="Search Marketplace "
                        className="bg-gray w-100 form-control border-0 shadow-none rounded-pill"
                      />
                    </div>
                  </Link>
                </li>
                {/* <li className=" "> */}
                <li className="dropdown-item  rounded bg-gray mx-auto  d-flex align-items-center">
                  <div className=" p-1">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/G_tsqBLQpdP.png"
                      alt="img"
                      className=" rounded-circle me-2 "
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <p className="m-0">Browser all</p>
                  </div>
                </li>
                {/* </li> */}
                {/* item-3 */}
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <i class="fa-solid fa-bell fs-5 text-muted"></i>
                    </div>
                    <div>
                      <p className="m-0">Notification</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      {/* <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      /> */}
                      <i class="fa-solid fa-inbox fs-5 text-muted"></i>
                    </div>
                    <div>
                      <p className="m-0">Inbox</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      {/* <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/k0Svfg6IJtR.png"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      /> */}
                      <i class="fa-solid fa-bag-shopping fs-5 text-muted"></i>
                    </div>
                    <div>
                      <p className="m-0">Buying</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      {/* <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/MhkwI3R0SHP.png"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      /> */}
                      <i class="fa-solid fa-tag fs-5 text-muted"></i>
                    </div>
                    <div>
                      <p className="m-0">Selling</p>
                    </div>
                  </Link>
                </li>
                {/* create new list */}
                <li className="dropdown-item p-1  rounded bg-gray mx-auto justify-content-center  d-flex align-items-center">
                  <div className=" p-1">
                    <i class="fa-solid fa-plus text-primary"></i>
                  </div>
                  <div>
                    <p className="m-0 text-primary">Create new listing</p>
                  </div>
                </li>
                <hr />
                <li>
                  <h5 className="">Filters</h5>
                </li>

                <li className="dropdown-item p-1  rounded  mx-auto  d-flex align-items-center">
                  <div>
                    <p className="m-0 text-primary">
                      Chennai,india - Within 65 kilometers
                    </p>
                  </div>
                </li>
                <hr />
                <li>
                  <h5 className="">Categories</h5>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <i class="fa-solid fa-car fs-5 text-muted"></i>
                    </div>
                    <div>
                      <p className="m-0">Vehicles</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <i class="fa-solid fa-house-medical-flag text-muted"></i>
                    </div>
                    <div>
                      <p className="m-0">Property Rentals</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <i class="fa-solid fa-shirt text-muted"></i>
                    </div>
                    <div>
                      <p className="m-0">Apparel</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <i class="fa-solid fa-tag text-muted"></i>
                    </div>
                    <div>
                      <p className="m-0">Classifields</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <i class="fa-solid fa-mobile-screen-button text-muted"></i>
                    </div>
                    <div>
                      <p className="m-0">Electronics</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <i class="fa-solid fa-heart text-muted"></i>
                    </div>
                    <div>
                      <p className="m-0">Family</p>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <i class="fa-solid fa-film text-muted"></i>
                    </div>
                    <div>
                      <p className="m-0">Entertainment</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-12 col-lg-8">
            <br />

            <div className="d-flex align-items-center justify-content-between">
              <h4 className=" text-muted my-5">Today's picks</h4>
              <div className=" d-flex  justify-content-evenly align-items-center">
                <i class="fa-solid  fa-location-dot mx-1  text-primary align-items-center"></i>
                <p className=" mt-3 text-primary mx-1 align-items-center">
                  Chennai-65 Km
                </p>
              </div>
            </div>

            <div className=" d-flex align-items-center my-3">
              {/* card-1 */}
              <div class="card mx-2" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/1600x1000/?car"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">$69,00</h5>
                  <p class="card-text text-muted fs-7">Chennai ,TN</p>
                </div>
              </div>
              {/* card-2 */}
              <div class="card mx-2" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/1600x1000/?mobile"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">$69,00</h5>
                  <p class="card-text text-muted fs-7">Chennai ,TN</p>
                </div>
              </div>

              {/* card-3 */}
              <div class="card mx-2" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/1600x1000/?bike"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">$69,00</h5>
                  <p class="card-text text-muted fs-7">Chennai ,TN</p>
                </div>
              </div>
            </div>
            <div className=" d-flex align-items-center my-3">
              {/* card-1 */}
              <div class="card mx-2" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/1600x1000/?car"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">$69,00</h5>
                  <p class="card-text text-muted fs-7">Chennai ,TN</p>
                </div>
              </div>
              {/* card-2 */}
              <div class="card mx-2" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/1600x1000/?mobile"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">$69,00</h5>
                  <p class="card-text text-muted fs-7">Chennai ,TN</p>
                </div>
              </div>

              {/* card-3 */}
              <div class="card mx-2" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/1600x1000/?bike"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">$69,00</h5>
                  <p class="card-text text-muted fs-7">Chennai ,TN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
