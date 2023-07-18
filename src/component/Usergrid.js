import { Link } from "react-router-dom"
import { BsSpeedometer2, BsFillHandbagFill, BsPeopleFill, BsFillCartPlusFill } from "react-icons/bs";
import { useEffect, useState } from "react";

import { FaTrashCan } from "react-icons/fa6";

function Usergrid() {

  const [tableData, setTableData] = useState([])



  const getAllData = () => {
    fetch(`http://159.65.21.42:9000/users`)
      .then((resp) => resp.json())
      .then((data) => {
        setTableData(data.slice(0, 15))
        console.log(data)

      })
      .catch((err) => {
        console.log("error fetching data")
      })
  }

  useEffect(() => {
    getAllData()
  }, [])

  const deleteItems = (productId) => {
    fetch(`http://159.65.21.42:9000/user/${productId}`, {
      method: "DELETE",

    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("user deleted")
        console.log(data)
        setTableData(prevData => prevData.filter(item => item._id !== productId));
      })
      .catch((err) => {
        console.log("error deleted", err)
      })

  }


  return (
    <div>
      <div className="divided-two">
        <div className="background-container">
          <div className="inner-div01">
            <div className="dashboard-div">
              <Link to="/sidebar" className="link01">
                <BsSpeedometer2 className="dash-icon" />
                <p>Dashboard</p>
              </Link>
            </div>
          </div>
          <div className="inner-div01">
            <div className="dashboard-div">
              <Link to="/createproduct" className="link01">
                <BsFillHandbagFill className="dash-icon" />
                <p>Create Product</p>
              </Link>
            </div>
          </div>
          <div className="inner-div01">
            <div className="dashboard-div">
              <Link to="/createuser" className="link01">
                <BsPeopleFill className="dash-icon" />
                <p>Create Users</p>
              </Link>
            </div>
          </div>
          <div className="inner-div01">
            <div className="dashboard-div">
              <Link to="/productpage" className="link01">
                <BsFillHandbagFill className="dash-icon" />
                <p>Product Page</p>
              </Link>
            </div>
          </div>
          <div className="inner-div01">
            <div className="dashboard-div">
              <Link to="/userpage" className="link01">
                <BsPeopleFill className="dash-icon" />
                <p>Users Page</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="eighty-percent">
          <div className="shift">
            <h4 className="user-p">Users table</h4>
            <hr className="custom-line" />

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>

                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}<FaTrashCan className="trash-can" onClick={() => deleteItems(item._id)} /></td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usergrid