import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Game = () => {
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
                      <h4>Gaming</h4>
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
                <li className="dropdown-item p-2 rounded bg-gray mx-auto  d-flex align-items-center">
                  <div className=" p-1">
                    <i class="fa-solid fa-gamepad fs-5"></i>
                  </div>
                  <div>
                    <h6 className="m-0 ms-1">Play Games</h6>
                  </div>
                </li>
                {/* </li> */}
                {/* item-3 */}
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <i class="fa-regular fa-circle-user text-muted fs-4"></i>
                    </div>
                    <div>
                      <h6 className="m-0">Gaming Activity</h6>
                    </div>
                  </Link>
                </li>
                <li className=" dropdown-item p-1 rounded">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <i class="fa-solid fa-bell text-muted fs-4"></i>
                    </div>
                    <div>
                      <h6 className="m-0">Notifications</h6>
                    </div>
                  </Link>
                </li>

                <hr />
                <div className=" d-flex justify-content-between align-items-center">
                  <li>
                    <h5 className="">Yours games</h5>
                  </li>
                  <p className=" text-primary">See all</p>
                </div>

                <li className="dropdown-item p-1  rounded  mx-auto  d-flex align-items-center">
                  <p className="m-0 ">
                    Save a game to your games to create shortcut.
                  </p>
                </li>
                {/* save game */}
                <li className=" dropdown-item p-1 rounded mt-2">
                  <Link className=" text-decoration-none text-dark d-flex align-items-center">
                    <div className=" p-2">
                      <i class="fa-solid fa-bookmark fs-5 text-muted"></i>
                    </div>
                    <div>
                      <h6 className="m-0 ms-3">Save games</h6>
                    </div>
                  </Link>
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
              <h4 className=" text-muted my-5">Games we love</h4>
              <div className=" d-flex  justify-content-evenly align-items-center">
                {/* <i class="fa-solid  fa-location-dot mx-1  text-primary align-items-center"></i>
                <p className=" mt-3 text-primary mx-1 align-items-center">
                  Chennai-65 Km
                </p> */}
              </div>
            </div>

            <div className=" d-flex align-items-center my-3">
              {/* card-1 */}
              <div class="card mx-2" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/1600x1000/?games"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Mergest Kingdom</h5>
                </div>
                <div className=" rounded-pill bg-black text-white w-50 ms-2 mb-3 p-1">
                  193k players
                </div>
              </div>
              {/* card-2 */}
              <div class="card mx-2" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/1600x1000/?games/2"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Solitaire</h5>
                </div>
                <div className=" rounded-pill bg-black text-white w-50 ms-2 mb-3 p-1">
                  1.2M players
                </div>
              </div>
              {/* card-3 */}
              <div class="card mx-2" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/1600x1000/?games/3"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Car Parking Tycoon</h5>
                </div>
                <div className=" rounded-pill bg-black text-white w-50 ms-2 mb-3 p-1">
                  34k players
                </div>
              </div>
            </div>
            {/* second-card */}
            <div className=" d-flex align-items-center my-3">
              {/* card-1 */}
              <div class="card mx-2" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/1600x1000/?games/6"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Mergest Kingdom</h5>
                </div>
                <div className=" rounded-pill bg-black text-white w-50 ms-2 mb-3 p-1">
                  193k players
                </div>
              </div>
              {/* card-2 */}
              <div class="card mx-2" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/1600x1000/?games/4"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Ludo King</h5>
                </div>
                <div className=" rounded-pill bg-black text-white w-50 ms-2 mb-3 p-1">
                  Board
                </div>
              </div>
              {/* card-3 */}
              <div class="card mx-2" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/1600x1000/?games/8"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Ultimate Glory</h5>
                </div>
                <div className=" rounded-pill bg-black text-white w-50 ms-2 mb-3 p-1">
                  Simulation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
