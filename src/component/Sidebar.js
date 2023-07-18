
import { BsSpeedometer2, BsFillHandbagFill, BsPeopleFill, BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Sidebar() {

  const [geraldDataCount, setGeraldDataCount] = useState(0)
  const [userCount, setUserCount] = useState(0)
  const [recentProducts, setRecentProducts] = useState([]);




  const getProducts = () => {
    fetch(`http://159.65.21.42:9000/products`)
      .then((resp) => resp.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.category === "Gerald");
        setGeraldDataCount(filteredData.length)
        setRecentProducts(filteredData.slice(0, 6));
      })
      .catch((err) => {
        console.log("error fetching Gerald category Data", err)
      });
  }

  const getUsers = () => {
    fetch(`http://159.65.21.42:9000/users`)
      .then((resp) => resp.json())
      .then((data) => {
        setUserCount(data.length)
        console.log(data)

      })
      .catch((err) => {
        console.log("error fetching data")
      })
  }

  useEffect(() => {
    getProducts()
    getUsers()
  }, []);

  const cartLength = () => {
    const localStoring = localStorage.getItem
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
          <div className="dashboard-details">
            <div className="total-productdiv">
              <div className="raduis-icon">
                <BsFillHandbagFill className="dash-iconnn" />
              </div>
              <h4 className="total-p">Total Products</h4>
              <span className="span01">{geraldDataCount}</span>

            </div>
            <div className="total-productdiv">
              <div className="raduis-icon">
                <BsPeopleFill className="dash-iconnn" />
              </div>
              <h4 className="total-p">Total Users</h4>
              <span className="span01">{userCount}</span>

            </div>
            <div className="total-productdiv">
              <div className="raduis-icon">
                <BsFillCartPlusFill className="dash-iconnn" />
              </div>
              <h4 className="total-p">Total Products in Cart</h4>
              <span className="span01">5</span>

            </div>
          </div>

          <h4 className="recent-product">Recent Product display</h4>
          <hr className="custom-line" />
          <div className="shift">
            <div className="product-detailsgrid" >
              {recentProducts.map((items) => (
                <div className="first-product" key={items.id}>
                  <div className="image-div">
                    <img src={items.image} alt="" />
                  </div>
                  <div className="desc-div">
                    <p className="title-p01">{items.name}</p>
                    <p className="price-p01">&pound;{items.price}</p>
                    <p className="dec-p">{items.description}</p>

                  </div>
                  <div className="button-divvs">
                    <button className="edit-button">EDIT</button>
                    <button className="delete-button">DELETE</button>
                  </div>

                </div>
              ))}
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Sidebar