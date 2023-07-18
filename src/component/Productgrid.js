import { BsSpeedometer2,BsFillHandbagFill,BsPeopleFill,BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import image01 from "./images/new3.webp"
import image02 from "./images/new3.webp"
import image03 from "./images/new3.webp"
import image04 from "./images/new3.webp"
import { useState, useEffect } from "react";

function Productgrid() {
  const [geraldData, setGeraldData] = useState([])

  useEffect(() => {
    fetch(`http://159.65.21.42:9000/products`)
    .then((resp) => resp.json())
    .then((data) => {
      const filteredData = data.filter((item) => item.category === "Gerald");
      setGeraldData(filteredData)
    })
    .catch((err) => {
      console.log("error fetching Gerald category Data",err)
    });
  }, []);

  const deleteProduct = (productId) => {
    fetch(`http://159.65.21.42:9000/product/${productId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setGeraldData(recentData => recentData.filter(items => items._d !== productId))
        alert("product deleted")
      })
      .catch((err) => {
        console.log("Error deleting product:", err);
      });
  };



  return(
<div>
<div className="divided-two">
<div className="background-container">
    <div className="inner-div01">
      <div className="dashboard-div">
        <Link to="/sidebar" className="link01">
        <BsSpeedometer2 className="dash-icon"/>
      <p>Dashboard</p>
        </Link>

      </div>
      
    
    </div>
    <div className="inner-div01">
      <div className="dashboard-div">
        <Link to="/createproduct" className="link01">
        <BsFillHandbagFill className="dash-icon"/>
      <p>Create Product</p>
        </Link>

      </div>
      
    
    </div>
    <div className="inner-div01">
      <div className="dashboard-div">
        <Link to="/createuser" className="link01">
        <BsPeopleFill className="dash-icon"/>
      <p>Create Users</p>
        </Link>

      </div>
      
    
    </div>
    <div className="inner-div01">
      <div className="dashboard-div">
        <Link to="/productpage" className="link01">
        <BsFillHandbagFill className="dash-icon"/>
      <p>Product Page</p>
        </Link>

      </div>
      
    
    </div>
    <div className="inner-div01">
      <div className="dashboard-div">
        <Link to="/userpage" className="link01">
        <BsPeopleFill className="dash-icon"/>
      <p>Users Page</p>
        </Link>

      </div>
      
    
    </div>
  </div>
  <div className="eighty-percent">
<div className="shift">
<h2 className="create-h2">Product Grid </h2>
<hr className="custom-line"/>

  <div className="product-detailsgrid" >
  {geraldData.map((items) => (
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
      <button className="delete-button" onClick={() => deleteProduct(items._id)}>DELETE</button>
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

export default Productgrid