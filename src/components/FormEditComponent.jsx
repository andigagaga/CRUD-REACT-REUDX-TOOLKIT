import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { editUser } from "../redux/services/editUser";
import swal from "sweetalert";

export default function FormEditComponent() {
  const { id } = useParams();
  const users = useSelector((state) => state.users.users);
  const existingUser = users.find((user) => user.id === id);

  const [formData, setFormData] = useState({
    name: existingUser ? existingUser.name : "",
    alamat: existingUser ? existingUser.alamat : "",
    umur: existingUser ? existingUser.umur : 0,
    noHp: existingUser ? existingUser.noHp : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(editUser({ userId: id, userData: formData }))
      .then(() => {
        swal("Edit data success!", {
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        swal("Created data failed!", {
          icon: "error",
        });
      });
  };

  return (
    <div className="my-4">
    <Container className="shadow-lg p-5 bg-body">

    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Nama</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Masukkan nama anda..."
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="alamat">Alamat</Label>
        <Input
          id="alamat"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          placeholder="Masukkan tempat tinggal anda..."
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="umur">Umur</Label>
        <Input
          id="umur"
          name="umur"
          value={formData.umur}
          onChange={handleChange}
          placeholder="Masukkan umur anda..."
          type="number"
        />
      </FormGroup>
      <FormGroup>
        <Label for="noHp">No. handphone</Label>
        <Input
          id="noHp"
          name="noHp"
          value={formData.noHp}
          onChange={handleChange}
          placeholder="Masukkan no telepon anda..."
          type="text"
        />
      </FormGroup>
      <Button className="float-end" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  );
}
