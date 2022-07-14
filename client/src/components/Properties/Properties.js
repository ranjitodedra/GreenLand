import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import './Properties.css'

const Record = (props) => (
  <div class="col-md-4">
    <div className="content">
      <div class="card shadow">
        <img class="card-img-top" src={props.record.img} alt="Property Image" />
        <div class="card-body">
          <h5 class="card-title">{props.record.title}</h5>
          <p class="card-text">description: {props.record.description}</p>
          <p class="card-text">price: {props.record.price}$</p>
          <NavLink to={`/edit/${props.record._id}`} className="btn btn-primary">{props.record.type}</NavLink>

          <button className="btn btn-primary"
            onClick={() => {
              props.deleteRecord(props.record._id);
            }}
          >
            Delete
        </button>

        </div>
      </div>

    </div>
  </div>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3001/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:3001/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3 class="text-center">Properties</h3>
      <div class="row container-fluid">
        {recordList()}
      </div>
    </div>
  );
}