import React, { useEffect } from "react";
import { Container, Table } from "reactstrap";
import { ButtonBackComponent } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getDetailUser } from "../redux/services/getDetailUser";
import { useParams } from "react-router-dom";

export default function DetailUserPages() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userDetail = useSelector((state) => state.users.selectedDetailUser);

  useEffect(() => {
    dispatch(getDetailUser(id));
  }, [dispatch, id]);

  return (
    <Container className="my-4">
      <ButtonBackComponent />
      <h1>Detail user</h1>
      {userDetail && (
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Full Name</th>
              <th>Alamat</th>
              <th>Umur</th>
              <th>No handphone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{userDetail.id}</th>
              <td>{userDetail.name}</td>
              <td>{userDetail.alamat}</td>
              <td>{userDetail.umur}</td>
              <td>{userDetail.noHp}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </Container>
  );
}
