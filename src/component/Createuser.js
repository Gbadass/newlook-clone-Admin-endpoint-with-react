import { Link } from "react-router-dom"
import { BsSpeedometer2,BsFillHandbagFill,BsPeopleFill,BsFillCartPlusFill } from "react-icons/bs";
import { useState } from "react";

function Createuser() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState(false)

  const handleEvent = (e) => {
    e.preventDefault()
    if (name === "" || phone === "" || email === "" || password === "" ) {
      setError(true)
      return;
    } 
      let objData = {
        name : name,
        phone: phone,
        email: email,
        password: password,
  
      };
      console.log(objData)
  
    fetch (`http://159.65.21.42:9000/register`, {
      method: "POST",
      headers:{"Content-Type": "Application/Json"},
      body:JSON.stringify(objData)
    })
    .then((resp) => resp.json())
    .then((data) => {
      alert("user created")
      // setTimeout(() => {
      //   setSuccess(false);
      // }, 9000);
      console.log(data)
    })
    .catch((err) => console.log(err))

   
   

  }

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
    <h2 className="create-h2">Create User </h2>
<hr className="custom-line"/>
    <form className="newest-form" action="" onSubmit={handleEvent}>
      <label htmlFor="">Full name <br /> 
        <input className="input01" value={name} onChange={(e) => setName(e.target.value)} type="text" /> <br />
        {error === true && name === ""? <span className="newred01">please enter name</span>: null}
      </label> <br /> <br />
      <label htmlFor="">Phone<br />
        <input className="input01" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br />
        {error === true && phone === ""? <span className="newred01">please enter phone</span>: null}
      </label> <br /> <br />
      <label htmlFor="">Email address <br />
        <input className="input01" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        {error === true && email === ""? <span className="newred01">please enter name</span>: null}
      </label> <br /> <br />
      <label htmlFor="">Password <br />
        <input className="input01" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
        {error === true && password === ""? <span className="newred01">please enter password</span>: null}
      </label> <br />
      <button className="button01">SUBMIT</button>
    </form>
    </div>
  </div>
  </div>
</div>
  )
}

export default Createuser