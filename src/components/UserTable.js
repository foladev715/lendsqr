import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      const data = await response.json();
      setUserData(data.slice(0, 10));
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <div>
      <div className="user-table">
        <table className="table table-responsive">
          <thead className="t-head">
            <tr>
              <th scope="col">
                <span>ORGANIZATION </span>
                <img src="/images/filter-button.png" alt="filter-button" />
              </th>
              <th scope="col">
                <span>USERNAME </span>
                <img src="/images/filter-button.png" alt="filter-button" />
              </th>
              <th scope="col">
                <span>EMAIL </span>{" "}
                <img src="/images/filter-button.png" alt="filter-button" />
              </th>
              <th scope="col">
                <span>PHONE NUMBER </span>
                <img src="/images/filter-button.png" alt="filter-button" />
              </th>
              <th scope="col">
                <span>DATE JOINED </span>
                <img src="/images/filter-button.png" alt="filter-button" />
              </th>
              <th scope="col">
                <span>STATUS </span>{" "}
                <img src="/images/filter-button.png" alt="filter-button" />
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, key) => (
              <tr key={key}>
                <td className="table-column">{user.orgName}</td>
                <td className="table-column">{user.userName}</td>
                <td className="table-column">{user.email}</td>
                <td className="table-column">{user.phoneNumber}</td>
                <td className="table-column">{user.createdAt}</td>
                <td className="table-column">
                  {user.education.employmentStatus}
                  <button
                    className="btn"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis-vertical ellipsis"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item">
                        <Link
                          to={`/userdetails/${user.id}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <i class="fa-regular fa-eye"></i> View Details
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="fa-solid fa-user-slash"></i> Blacklist User
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="fa-regular fa-user"></i>{" "}
                        <span className="dropdown-item-span">
                          {" "}
                          Activate User
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <img src="/images/pagination.png" alt="" className="pagination" />
    </div>
  );
};

export default UserTable;
