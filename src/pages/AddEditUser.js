import React, { useState, useEffect } from "react";

import {
  MDBValidation,
  MDBInput,
  MDBBtn,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUsersStart } from "../redux/actions";
import { toast } from "react-toastify";

const AddEditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialstate = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };
  const [formvalue, setformvalue] = useState(initialstate);
  const { name, email, phone, address } = formvalue;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && address) {
      dispatch(createUsersStart(formvalue));
      toast.success("User Added Data Successfully");
      setTimeout(() => navigate("/"), 500);
    }
  };
  function oninputChange(e) {
    let { name, value } = e.target;
    setformvalue({ ...formvalue, [name]: value });
  }
  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 fw-bold">Edit User Detail</p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBValidationItem feedback="Please provide a name" invalid>
          <MDBInput
            value={name}
            name="name"
            type="text"
            onChange={oninputChange}
            required
            label="name"
          ></MDBInput>
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provide a email" invalid>
          <MDBInput
            value={email}
            name="email"
            type="email"
            onChange={oninputChange}
            required
            label="email"
          ></MDBInput>
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provide a phone no" invalid>
          <MDBInput
            value={phone}
            name="phone"
            type="number"
            onChange={oninputChange}
            required
            label="phone"
          ></MDBInput>
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provide a address" invalid>
          <MDBInput
            value={address}
            name="address"
            type="Address"
            onChange={oninputChange}
            required
            label="address"
          ></MDBInput>
        </MDBValidationItem>
        <div className="col-12">
          <MDBBtn style={{ marginRight: "10px" }} type="submit">
            ADD
          </MDBBtn>
          <MDBBtn onClick={() => navigate("/")} color="danger">
            Go Back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};

export default AddEditUser;
