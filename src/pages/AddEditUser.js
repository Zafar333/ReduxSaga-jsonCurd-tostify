import React, { useState, useEffect } from "react";

import {
  MDBValidation,
  MDBInput,
  MDBBtn,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUsersStart, updateUsersStart } from "../redux/actions";
import { toast } from "react-toastify";

const AddEditUser = () => {
  const [editmode, seteditmode] = useState(false);
  const users = useSelector((state) => state.data.users);
  console.log("userss update", users);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      seteditmode(true);
      const singleEditView = users.find((item) => item.id == id);
      setformvalue({ ...singleEditView });
    } else {
      seteditmode(false);
      setformvalue({ ...initialstate });
    }
  }, [id]);
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
      if (!editmode) {
        dispatch(createUsersStart(formvalue));
        toast.success("User Added Data Successfully");
        setTimeout(() => navigate("/"), 500);
      } else {
        dispatch(updateUsersStart({ id, formvalue }));
        seteditmode(false);
        toast.success("User Updated Data Successfully");
        setTimeout(() => navigate("/"), 500);
      }
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
      <p className="fs-2 fw-bold">
        {!editmode ? "Add User detail" : "Edit User Detail"}
      </p>
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
            value={name || ""}
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
            value={email || ""}
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
            value={phone || ""}
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
            value={address || ""}
            name="address"
            type="Address"
            onChange={oninputChange}
            required
            label="address"
          ></MDBInput>
        </MDBValidationItem>
        <div className="col-12">
          <MDBBtn style={{ marginRight: "10px" }} type="submit">
            {!editmode ? "ADD" : "Update"}
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
