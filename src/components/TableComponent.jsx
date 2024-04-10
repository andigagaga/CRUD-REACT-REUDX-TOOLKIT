import {
  faCircleInfo,
  faMagnifyingGlass,
  faPenToSquare,
  faTrashCan,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Input,
  InputGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { deleteUser } from "../redux/services/deleteUser";
import { getDetailUser } from "../redux/services/getDetailUser";
import { getUsers } from "../redux/services/getUsers";
import { clearDetailUser } from "../redux/userSlice";

function TableComponent() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.users);
  const selectedDetailUser = useSelector(
    (state) => state.users.selectedDetailUser
  );

  const handleDetailUser = (userId) => {
    if (selectedDetailUser) {
      dispatch(clearDetailUser());
    }
    dispatch(getDetailUser(userId));
  };

  const handleDeleteUser = (userId) => {
    // warning alert delete
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user data !!!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteUser(userId));
        swal("Your imaginary files have been deleted !!!", {
          icon: "success",
        });
      } else {
        swal("Your user data is safe !!!");
      }
    });
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // // ini ketika menggunakan data dummy saja
  // const [users, setUsers] = useState([
    // {
    //   id: 1,
    //   name: "Guswandi",
    //   alamat: "Padang",
    //   umur: 20,
    //   noHp: "0897836318",
    // },
    // {
    //   id: 2,
    //   name: "Desmi al syafira",
    //   alamat: "Padang",
    //   umur: 20,
    //   noHp: "0897836318",
    // },
    // {
    //   id: 3,
    //   name: "Julia putri",
    //   alamat: "Padang",
    //   umur: 20,
    //   noHp: "0897836318",
    // },
  // ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredUsers = user.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.alamat.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <InputGroup className="d-flex justify-content-between mt-5 mb-3 gap-5">
        <Link to={"/create"}>
          <Button className="shadow-lg">
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Create user
          </Button>
        </Link>
        <Input
          className="rounded shadow-lg"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        ></Input>
      </InputGroup>
      <div className="table-responsive rounded">
        <Table striped bordered hover className="shadow-lg">
          <thead>
            <tr>
              <th className="text-danger">Id</th>
              <th className="text-success">Full Name</th>
              <th className="text-warning-emphasis">Alamat</th>
              <th className="text-primary">Umur</th>
              <th className="text-black">No Handphone</th>
              <th className="text-warning text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((item) => (
              <tr key={item.id}>
                <td className="text-danger">{item.id}</td>
                <td className="text-success">{item.name}</td>
                <td className="text-warning-emphasis">{item.alamat}</td>
                <td className="text-primary">{item.umur}</td>
                <td className="text-black">{item.noHp}</td>
                <td className="d-flex justify-content-between">
                  <Link to={`/detail/${item.id}`}>
                    <Button
                      className="bg-info-subtle text-black mr-1"
                      onClick={() => handleDetailUser(item.id)}
                    >
                      <FontAwesomeIcon icon={faCircleInfo} className="me-2" />
                      Detail
                    </Button>
                  </Link>
                  <Link to={`/edit/${item.id}`}>
                    <Button className="bg-success">
                      <FontAwesomeIcon icon={faPenToSquare} className="me-2" />
                      Edit
                    </Button>
                  </Link>
                  <Button
                    className="bg-danger"
                    onClick={() => handleDeleteUser(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} className="me-2" />
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination className="float-end shadow-lg">
          <PaginationItem disabled={currentPage === 1}>
            <PaginationLink first onClick={() => handlePageChange(1)} />
          </PaginationItem>
          <PaginationItem disabled={currentPage === 1}>
            <PaginationLink
              previous
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          {[...Array(totalPages).keys()].map((page) => (
            <PaginationItem key={page} active={currentPage === page + 1}>
              <PaginationLink onClick={() => handlePageChange(page + 1)}>
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem disabled={currentPage === totalPages}>
            <PaginationLink
              next
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
          <PaginationItem disabled={currentPage === totalPages}>
            <PaginationLink last onClick={() => handlePageChange(totalPages)} />
          </PaginationItem>
        </Pagination>
      </div>
    </Container>
  );
}

export default TableComponent;
