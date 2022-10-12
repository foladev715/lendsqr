import React from "react";

const Filter = (props) => {
  return (
    <div className="filter-form">
      <form onSubmit={props.handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="text" className="form-label ">
            Organization
          </label>
          <input
            type="text"
            className="form-select "
            value={props.handleChange.organization}
            name="organization"
            placeholder="Select"
            onChange={props.handleChange}
          />
          <label htmlFor="text" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            value={props.handleChange.username}
            name="username"
            placeholder="User"
            onChange={props.handleChange}
          />
          <label htmlFor="text" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            value={props.handleChange.email}
            name="email"
            placeholder="Email"
            onChange={props.handleChange}
          />
          <label htmlFor="text" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            value={props.handleChange.date}
            name="date"
            placeholder="Date"
            onChange={props.handleChange}
          />
          <label htmlFor="text" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            value={props.handleChange.phoneNumber}
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={props.handleChange}
          />
          <label htmlFor="text" className="form-label">
            Status
          </label>
          <input
            type="select"
            className="form-select"
            value={props.handleChange.status}
            name="status"
            placeholder="Select"
            onChange={props.handleChange}
          />
        </div>
        <div className="filter-buttons">
          <button type="submit" className="btn btn-secondary">
            Reset
          </button>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
