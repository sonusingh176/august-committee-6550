import React from 'react'
import banner1 from '../../assests/img/banner1.jpg'
import banner2 from '../../assests/img/1X.jpg'
import banner3 from '../../assests/img/ban3.jpg'
import prod1 from '../../assests/img/prod1.jpg'
import prod2 from '../../assests/img/prod2.jpg'
import prod3 from '../../assests/img/prod3.jpg'
import prod4 from '../../assests/img/prod4.jpg'
import prod5 from '../../assests/img/prod5.jpg'
import prod6 from '../../assests/img/prod6.jpg'
import borla from '../../assests/img/Borla.jpg'
import harmony from '../../assests/img/Mogra.jpg'
import mogra from '../../assests/img/Harmony.jpg'
import d1 from '../../assests/img/2X.jpg'
import d2 from '../../assests/img/2X2.jpg'
import d3 from '../../assests/img/2x3.gif'
import d4 from '../../assests/img/2x4.jpg'
import d6 from '../../assests/img/OLD-GOLD_.png'
import tan from '../../assests/img/d3.png'
import './content.css'


const Content = () => {
  const prodImages=[prod1,prod2,prod3,prod4,prod5,prod6];
  const ds=[d1,d2,d3,d4]
   
  return (
    <>
      <div className='main'>
        <div className='item1'><img src={banner1} alt=""/></div>
        <div className='item2'><img src={banner2} className="banner" alt=""/></div>
        <div className='item3'> <img src={banner3} className="banner" alt=""/></div>    
      </div>

      <div className='prodContain'>
        {/* <div><img src={prod1} className="banner" alt=""/></div>
        <div><img src={prod2} className="banner" alt=""/></div>
        <div><img src={prod3} className="banner" alt=""/></div>
        <div><img src={prod4} className="banner" alt=""/></div>
        <div><img src={prod5} className="banner" alt=""/></div>
        <div><img src={prod6} className="banner" alt=""/></div> */}
        {
          prodImages.map((elem)=>{
            return(
            <div><img src={elem} className="banner" alt=""/></div>
            )

          })
        }
      </div>

      <div  className='prodContain collection'>
      <div className='borladiv'><img src={borla} className="banner" alt=""/></div>
      <div className='mogradiv'>
        <img src={mogra} className="banner" alt=""/>
        <button className='viewcollection'>View All Collection</button>
      </div>
      
      <div className='harmonydiv'><img src={harmony} className="banner" alt=""/></div>
      </div>

      <div className='prodContain2'>
        {
          ds.map((el)=>{
            return(
                <div><img src={el} alt="" className="banner"/></div>
            )
          })
        }
      </div>

      <div className='oldGold'>
        <div style={{marginLeft:'11%'}}><img src={d6} alt=""/></div>
        <div className='oldGold2'>
          <div className='txtdiv'><h2>Your precious gold. Our new designs!</h2></div>
          <hr style={{width:'130px', height:'3px' ,    background: 'linear-gradient(to left,#8263e5,#e553ed)'}}/>
          <div  className='txtdiv2'>
            <ul>
              <li>
              - A Gold Exchange Program that lets you preserve your memories and  
              <li>make new ones! Please note: The old gold doesn’t have to be from only</li>
              <li> CaratLane, it can be any gold jewellery you have. </li>
              </li>
            </ul>
            </div>
          <div>
            <button style={{width:'40%' ,color:'white',border:'none', marginBottom:'5%' ,padding:'12px' , borderRadius:'5px' ,background: 'linear-gradient(to left,#8263e5,#e553ed)'}}>Know More</button>
          </div>
        </div>
      </div>

      {/* ------------------------ */}

      <div className='bluediv'>
        <div style={{margin:' auto', width: 'fit-content'}}>
          <img src={tan} alt="cggc"/>
          <p style={{color:'white',textAlign:'center',fontSize:'1.2rem'}}>The highest quality of craftsmanship and innovation,<br/> that brings you modern, everyday designs.</p>

          <button className='btn-gradient-1'>Know More</button>
        </div>
     
      </div>

    
    

    </>
  )
}

export default Content


