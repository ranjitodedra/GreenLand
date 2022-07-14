import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import './Display.css'

export default function Edit() {
  const [form, setForm] = useState({
    img: "",
    title: "",
    description: "",
    price: "",
    phone: "",
    type: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:3001/record/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      img: form.img,
      title: form.title,
      description: form.description,
      price: form.price,
      price: form.phone,
      type: form.type,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:3001/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <div class="container-fluid text-center display">
        <img class="houseimg" src={form.img} />
        <div class="data">
          <h1>{form.title}</h1>
          <h3>description - {form.description}</h3>
          <h2>price - {form.price}$</h2>
          <h2>Contact Number - {form.phone}</h2>
          <h3>On {form.type}</h3>
        </div>
      </div>
    </div>
  );
}