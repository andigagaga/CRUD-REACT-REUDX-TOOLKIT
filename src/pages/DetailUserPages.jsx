import React, { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";
import { ButtonBackComponent } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getDetailUser } from "../redux/services/getDetailUser";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function DetailUserPages() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userDetail = useSelector((state) => state.users.selectedDetailUser);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    dispatch(getDetailUser(id))
      .then(() => setLoading(false))
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [dispatch, id]);

  const color = "#ffffff"; // Sesuaikan dengan warna yang diinginkan
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <Container className="mt-4 vh-100">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <ClipLoader
            color={color}
            loading={loading}
            css={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : error ? (
        <div className="d-flex justify-content-center align-items-center">
          <p key="error-message" className="text-danger">
            Error loading user detail.
          </p>
        </div>
      ) : (
        <>
          <ButtonBackComponent />
          <p className="my-4 fw-bold">
            DETAIL PENGGUNA :{" "}
            <span className="text-danger text-decoration-underline">
              {userDetail && userDetail.name}
            </span>
          </p>
          {userDetail ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className="p-4">Detail</th>
                  <th className="p-4 text-warning">Informasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="p-4 text-danger" scope="row">
                    ID
                  </th>
                  <td className="p-4 text-danger">{userDetail.id}</td>
                </tr>
                <tr>
                  <th className="p-4 text-success" scope="row">
                    Nama
                  </th>
                  <td className="p-4 text-success">{userDetail.name}</td>
                </tr>
                <tr>
                  <th className="p-4 text-warning-emphasis" scope="row">
                    Alamat
                  </th>
                  <td className="p-4 text-warning-emphasis">
                    {userDetail.alamat}
                  </td>
                </tr>
                <tr>
                  <th className="p-4 text-primary" scope="row">
                    Umur
                  </th>
                  <td className="p-4 text-primary">{userDetail.umur}</td>
                </tr>
                <tr>
                  <th className="p-4 text-black" scope="row">
                    No Handphone
                  </th>
                  <td className="p-4 text-black">{userDetail.noHp}</td>
                </tr>
              </tbody>
            </Table>
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <p key="user-not-found" className="text-danger">
                User not found.
              </p>
            </div>
          )}
        </>
      )}
    </Container>
  );
}
