import React from 'react'
import logo from '../../assests/img/vector.svg'


function Navbar() {
   let styles={
        backgroundColor: 'linear-gradient(to right,#de57e5 0%,#8863fb 100%)'
    }
  return (
    <div>
        <div style={{width:"100%", height:"30px" ,backgroundColor:"#231535"}}></div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <img src={logo} alt="" style={{width:"12%"}}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{color:"#4f3267"}}>FREE TRY AT HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color:"#4f3267"}}>FIND STORE</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href='#' style={{color:"#4f3267"}}>PLAN OF PURCHASE</a>
         </li>
        <li class="nav-item">
          <a class="nav-link"  href="#" style={{color:"#4f3267",fontsize:'1.1rem'}}>BUT DIGITAL GOLD</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit"  style={styles}><i class="ri-search-line"></i></button>
      </form>
    </div>
  </div>
</nav>




    </div>
  )
}

export default Navbar