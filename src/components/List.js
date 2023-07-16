import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "./List.css";

const ListToDo = ({ listData, onFinsh }) => {
  const handelonFinsh = (index) => {
    onFinsh(index);
  };

  return (
    <>
      {listData.map((list, index) => (
        <div key={index}>
          <Table striped bordered hover className="table">
            <thead>
              <tr>
                <th>Title of to do list </th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {list.description} </td>
                <td>{list.date}</td>
              </tr>
              <button className="button" onClick={() => handelonFinsh(index)}>
                Finsh
              </button>
            </tbody>
          </Table>
        </div>
      ))}
    </>
  );
};

const NewlistToDo = ({ onlistSubmit }) => {
  const [description, setDesc] = useState("");
  const [date, setDate] = useState("");
  const handelonsubmit = (e) => {
    e.preventDefault();
    const newtodo = {
      description: description,
      date: date,
      completed: false,
    };
    onlistSubmit(newtodo);
    setDesc("");
    setDate("");
  };

  return (
    <>
      <h2>Added list to do</h2>
      <form onSubmit={handelonsubmit}>
        <label id="label">
          Title of to do List
          <input
            type="text"
            value={description}
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        <br />
        <label id="label">
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button className="button2" type="submit">
          Add to do
        </button>
      </form>
    </>
  );
};

const DataOfList = () => {
  const [listData, setlistData] = useState([
    {
      id: 1,
      description: "appointment with the construction company",
      date: "12/10/2023",
      completed: false,
    },
    {
      id: 2,
      description: "Shopping for the trip",
      date: "18/7/2023",
      completed: false,
    },
    {
      id: 3,
      description: "I have meeting with sara",
      date: "20/7/2023",
      completed: false,
    },
  ]);
  const handlelistsubmit = (newtodo) => {
    setlistData([...listData, newtodo]);
  };
  const handelofFinsh = (index) => {
    const updatedListData = listData.filter((_, i) => i !== index);
    setlistData(updatedListData);
  };

  return (
    <>
      <NewlistToDo onlistSubmit={handlelistsubmit} />
      <ListToDo listData={listData} onFinsh={handelofFinsh} />
    </>
  );
};
export default DataOfList;
