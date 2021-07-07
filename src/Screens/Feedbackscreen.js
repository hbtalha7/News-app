import React from "react";
import { Link } from "react-router-dom";

export default function Feedbacksceen() {
  return (
    <div>
      <div className="container" id="Home">
        <div className="row">
          <div className="col-3">
            <div className="container">
              <div className="row" id="Menulist">
                <div className="col-sm-1" id="DP"></div>
                <div className="col-sm-4">Hi!Reader</div>
              </div>
              <div className="row" id="Menulist">
                <b>Have a feedback</b>
                <div className="row" id="Listening">
                  <Link to="/feedback">
                    <button id="btnsubred">We're Listening</button>
                  </Link>
                  <Link to="/">Back</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8" id="newscontent">
            <h3>Thank you so much for taking time!</h3>
            <br />

            <form>
              Please provide the below detail!
              <label for="">First Name</label>
              <input
                type="text"
                class="form-control"
                name="First"
                id=""
                placeholder="First Name"
              />
              <label for="">Last Name</label>
              <input
                type="text"
                class="form-control"
                name="First"
                id=""
                placeholder="Last Name"
              />
              <label for="">Address</label>
              <textarea
                type="text"
                class="form-control"
                name="First"
                id="Address"
                placeholder="Address"
              ></textarea>
              <label for="">Country &nbsp;</label>
              <select className="selectpicker countrypicker">
                <option>India</option>
              </select>
              <br />
              <label for="">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id=""
                placeholder="Email"
                required
              />
              <label for="">Phone Number</label>
              <input
                type="Number"
                class="form-control"
                name="Moblie"
                id=""
                placeholder="Phone Number"
                required
              />
              {/* <input type="submit" id="btnsub" placeholder="Submit Feedback"></input> */}
              <button id="btnsub">Submit Feedback</button>
            </form>
          </div>
        </div>
      </div>      
    </div>
  );
}
