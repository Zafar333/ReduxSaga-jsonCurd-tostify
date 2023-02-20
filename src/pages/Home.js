import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersStart, loadUsersStart } from "../redux/actions";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Home = () => {
  const userss = useSelector((state) => state.data.users);
  const { users, loading, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);
  if (loading) {
    return (
      <MDBSpinner style={{ marginTop: "150px" }} role="status">
        <span className="visually-hidden">...Loading</span>
      </MDBSpinner>
    );
  }
  function handleDelete(id) {
    window.confirm("Are you sure you want to delete this item");
    dispatch(deleteUsersStart(id));
    toast.success("User deleted successfully");
  }
  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th className="col">No</th>
            <th className="col">Name</th>
            <th className="col">Email</th>
            <th className="col">Phone</th>
            <th className="col">Address</th>
            <th className="col">Action</th>
          </tr>
        </MDBTableHead>
        {userss.map((item, index) => {
          return (
            <MDBTableBody key={index}>
              <tr>
                <th className="scope">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <MDBBtn
                    className="m-1"
                    tag="a"
                    color="none"
                    onClick={() => handleDelete(item.id)}
                  >
                    <MDBTooltip title="Delete" tag="a">
                      <MDBIcon
                        fas
                        icon="trash"
                        style={{ color: "#dd4b39" }}
                        size="lg"
                      ></MDBIcon>
                    </MDBTooltip>
                  </MDBBtn>{" "}
                  <Link to={`/edituser/${item.id}`}>
                    <MDBTooltip title="Edit" tag="a">
                      <MDBIcon
                        fas
                        icon="pen"
                        style={{ color: "#55acee", marginBottom: "10px" }}
                        size="lg"
                      ></MDBIcon>
                    </MDBTooltip>
                  </Link>{" "}
                  <Link to={`/userinfo/${item.id}`}>
                    <MDBTooltip title="view" tag="a">
                      <MDBIcon
                        fas
                        icon="eye"
                        style={{ color: "#3b5998", marginBottom: "10px" }}
                        size="lg"
                      ></MDBIcon>
                    </MDBTooltip>
                  </Link>
                </td>
              </tr>
            </MDBTableBody>
          );
        })}
      </MDBTable>
    </div>
  );
};

export default Home;
