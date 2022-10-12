import { useState, useEffect } from "react";
import UserTable from "./UserTable";
import Filter from "./Filter";

const UserComponent = () => {
  const [filter, setFilter] = useState(false);

  function toggleFilter() {
    setFilter((prevValue) => !prevValue);
  }

  const [formData, setFormData] = useState({
    organization: "",
    rating: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  function addFormData(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function submitForm(event) {
    event.preventDefault();
  }

  return (
    <div className="users-component">
      <h3 className="users-header">Users</h3>
      <div className="user-categories">
        <img
          src="/images/user-category1.png"
          alt=""
          className="user-category"
        />
        <img
          src="/images/user-category2.png"
          alt=""
          className="user-category"
        />
        <img
          src="/images/user-category3.png"
          alt=""
          className="user-category"
        />
        <img
          src="/images/user-category4.png"
          alt=""
          className="user-category"
        />
      </div>
      <button
        type="button"
        class="btn btn-secondary btn-filter"
        onClick={toggleFilter}
      >
        Filter
      </button>
      {filter && (
        <Filter
          updateForm={formData}
          handleChange={addFormData}
          handleSubmit={submitForm}
        />
      )}
      <UserTable />
    </div>
  );
};

export default UserComponent;
