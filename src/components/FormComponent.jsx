import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { createUser } from "../redux/services/createUser";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function FormComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    alamat: "",
    umur: 0,
    noHp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(formData))
      .then(() => {
        swal("Created data success!", {
          icon: "success",
        });
        navigate("/")
      })
      .catch(() => {
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
          placeholder="Masukkan nama user..."
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
          placeholder="Masukkan tempat tinggal user..."
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
          placeholder="Masukkan umur user..."
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
          placeholder="Masukkan no telepon user..."
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
