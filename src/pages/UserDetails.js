import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  let { id } = useParams();
  const user = userData[id - 1];

  return (
    <div>
      <Header />
      <div className="dashboard-body">
        <SideBar />
        <div className="user-details">
          <div className="users-back-button">
            <Link to="/users">
              {" "}
              <button type="button" class="btn btn-light">
                <i class="fa-solid fa-arrow-left-long"></i> Back to Users
              </button>
            </Link>
          </div>
          <div className="user-details-header-div">
            <h3 className="user-details-header">User Details</h3>
            <button type="button" class="btn btn-danger">
              BLACKLIST USER
            </button>
            <button type="button" class="btn btn-success">
              ACTIVATE USER
            </button>
          </div>
          <div className="user-summary">
            <div className="user-summary-top">
              <div className="user-summary-left">
                <div className="avatar-div">
                  <img
                    src={user.profile.avatar}
                    alt=""
                    className="avatar-div-image"
                  />
                </div>
                <div className="user-name-id">
                  <h5 className="user-name">{user.userName}</h5>
                  <span className="user-id">{user.id}</span>
                </div>
              </div>
              <div className="vr"></div>
              <div className="user-summary-middle">
                <span className="user-tier">User's Tier</span>
                <span>
                  ⭐<i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </span>
              </div>
              <div className="vr"></div>

              <div className="user-summary-right">
                <h5 className="user-balance">₦{user.accountBalance}</h5>
                <span className="user-bank">
                  {user.accountNumber}/Providus Bank
                </span>
              </div>
            </div>
            <div className="user-summary-bottom">
              <span className="general-tab">General Details</span>
              <span>Documents</span>
              <span>Bank Details</span>
              <span>Loans</span>
              <span>Savings</span>
              <span>App and System</span>
            </div>
          </div>
          <div className="user-comprehensive-details">
            <div className="comprehensive-personal">
              <div className="comprehensive-heading">
                <h6>Personal information</h6>
              </div>
              <div className="comprehensive-details">
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">
                    FULL NAME
                  </span>
                  <span className="comprehensive-detail-body">
                    {`${user.profile.firstName} ${user.profile.lastName}`}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">
                    PHONE NUMBER
                  </span>
                  <span className="comprehensive-detail-body">
                    {user.profile.phoneNumber}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">
                    EMAIL ADDRESS
                  </span>
                  <span className="comprehensive-detail-body">
                    {user.email}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">BVN</span>
                  <span className="comprehensive-detail-body">
                    {user.profile.bvn}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">GENDER</span>
                  <span className="comprehensive-detail-body">
                    {user.profile.gender}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">
                    MARITAL STATUS
                  </span>
                  <span className="comprehensive-detail-body">Single</span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">CHILDREN</span>
                  <span className="comprehensive-detail-body">2</span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">
                    TYPE OF RESIDENCE
                  </span>
                  <span className="comprehensive-detail-body">Apartment</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="comprehensive-education">
              <div className="comprehensive-heading">
                <h6>Education and Employment</h6>
              </div>
              <div className="comprehensive-details">
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">
                    LEVEL OF EDUCATION
                  </span>
                  <span className="comprehensive-detail-body">
                    {user.education.level}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">
                    EMPLOYMENT STATUS
                  </span>
                  <span className="comprehensive-detail-body">
                    {user.education.employmentStatus}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">
                    SECTOR OF EMPLOYMENT
                  </span>
                  <span className="comprehensive-detail-body">
                    {user.education.sector}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading duration">
                    DURATION OF EMPLOYMENT
                  </span>
                  <span className="comprehensive-detail-body">
                    {user.education.duration}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">
                    OFFICE EMAIL
                  </span>
                  <span className="comprehensive-detail-body">
                    {user.education.officeEmail}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">
                    MONTHLY INCOME
                  </span>
                  <span className="comprehensive-detail-body">
                    {`₦${user.education.monthlyIncome[1]} - ₦${user.education.monthlyIncome[0]}`}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">
                    LOAN REPAYMENT
                  </span>
                  <span className="comprehensive-detail-body">
                    {user.education.loanRepayment}
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="comprehensive-socials">
              <div className="comprehensive-heading">
                <h6>Socials</h6>
              </div>
              <div className="comprehensive-details">
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">TWITTER</span>
                  <span className="comprehensive-detail-body">
                    {user.socials.twitter}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">FACEBOOK</span>
                  <span className="comprehensive-detail-body">
                    {user.socials.facebook}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">
                    INSTAGRAM
                  </span>
                  <span className="comprehensive-detail-body">
                    {user.socials.instagram}
                  </span>
                </div>
              </div>
            </div>

            <hr />
            <div className="comprehensive-guarantor">
              <div className="comprehensive-heading">
                <h6>Guarantor</h6>
              </div>
              <div className="comprehensive-details">
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">
                    FULL NAME
                  </span>
                  <span className="comprehensive-detail-body">
                    {`${user.guarantor.firstName} ${user.guarantor.lastName}`}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">
                    PHONE NUMBER
                  </span>
                  <span className="comprehensive-detail-body">
                    {user.guarantor.phoneNumber}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">ADDRESS</span>
                  <span className="comprehensive-detail-body">
                    {user.guarantor.address}
                  </span>
                </div>
                <div className="comprehensive-detail">
                  <span className="comprehensive-detail-heading">GENDER</span>
                  <span className="comprehensive-detail-body">
                    {user.guarantor.gender}
                  </span>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
