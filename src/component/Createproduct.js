
import { Link } from "react-router-dom"
import { BsSpeedometer2, BsFillHandbagFill, BsPeopleFill, BsFillCartPlusFill } from "react-icons/bs";
import { useState } from "react";

function Createproduct() {

  const [error, setError] = useState(false)
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Gerald")
  const [quantity, setQuantity] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [success, setSuccess] = useState(false);


  const handleEvent = (e) => {
    e.preventDefault()
    if (name === "" || category === "" || description === "" || price === "" || image === "") {
      setError(true)
      return;
    } 
      let objectData = {
        
        name : name,
        category: category,
        price: price,
        quantity: quantity,
        image: image,
        description: description,
  
      };
      console.log(objectData)
  
    fetch (`http://159.65.21.42:9000/create/product`, {
      method: "POST",
      headers:{"Content-Type": "Application/Json"},
      body:JSON.stringify(objectData)
    })
    .then((resp) => resp.json())
    .then((data) => {
      alert("product created")
      setSuccess(true);
      // setTimeout(() => {
      //   setSuccess(false);
      // }, 9000);
      console.log(data)
    })
    .catch((err) => console.log(err))

   
   

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
            <h2 className="create-h2">Create Product </h2>
            <hr className="custom-line" />
            {success && (
              <div className="success-message">
                Product successfully created
              </div>
            )}
            <form className="newest-form" action="" onSubmit={handleEvent}>
              <label htmlFor="">Title <br />
                <input value={name} onChange={(e) => setName(e.target.value)} className="input01" type="text"/> <br />
                {error === true && name === "" ? (<span className="spanerror">please enter a title</span>): null }
                

              </label> <br /> <br />
              <label htmlFor="">Category <br />
                <input value={category} onChange={(e)=> setCategory(e.target.value)} className="input01" type="text" /> <br />
                {error === true && category=== "" ? <span className="spanerror">please enter a category</span>: null}
              </label> <br /> <br />
              <label htmlFor="">Description <br />
                <input value={description} onChange={(e) => setDescription(e.target.value)} 
                className="input01" type="text" /> <br />
                {error === true && description === "" ? <span className="spanerror">please enter a description</span>: null}

              </label> <br /> <br />
              <label htmlFor="">Price <br />
                <input value={price} onChange={(e) =>setPrice(e.target.value)} className="input01" type="number" />  <br />
                {error === true && price === "" ? <span className="spanerror">please enter a price</span>: null}
              </label> <br /> <br />
              <label htmlFor="">quantity <br />
                <input value={quantity} onChange={(e)=> setQuantity(e.target.value)} className="input01" type="number" /> <br />
                {error === true && category=== "" ? <span className="spanerror">please enter a quantity</span>: null}
              </label> <br /> <br />
              <label htmlFor="">image <br />
                <input value={image} onChange={(e) => setImage(e.target.value)} className="input01-img" type="text" /> <br />
                {error === true && image === "" ? <span className="spanerror">please insert an image</span> : null}
              </label> <br />
              <button className="button01">SUBMIT</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Createproduct