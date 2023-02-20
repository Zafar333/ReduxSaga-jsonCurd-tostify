import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MDBBtn } from "mdb-react-ui-kit";
const UserInfo = () => {
  const users = useSelector((state) => state.data.users);
  const { id } = useParams();
  const navigate = useNavigate();
  const singleview = users?.find((item) => item.id == id);

  return (
    <div style={{ marginTop: "100px" }}>
      <div
        className="row"
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
        }}
      >
        <p className="col-md-12 fs-3">User Detail </p>
        <hr></hr>
        <p className="col-md-6 fw-bold">ID:</p>
        <p className="col-md-6 ">{singleview.id}</p>
        <p className="col-md-6 fw-bold">Name::</p>
        <p className="col-md-6 ">{singleview.name}</p>
        <p className="col-md-6 fw-bold">Email:</p>
        <p className="col-md-6 ">{singleview.email}</p>
        <p className="col-md-6 fw-bold">Phone::</p>
        <p className="col-md-6 ">{singleview.phone}</p>
        <p className="col-md-6 fw-bold">Address:</p>
        <p className="col-md-6 ">{singleview.address}</p>
      </div>
      <MDBBtn onClick={() => navigate("/")}>GO BACK</MDBBtn>
    </div>
  );
};

export default UserInfo;
