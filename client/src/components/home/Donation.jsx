import React,{useEffect,useState} from "react";
import DonationCard from "./DonationCard";
import burger1 from "../../assets/burger1.jpg";
import burger2 from "../../assets/img1.jpg";
import burger3 from "../../assets/maps.jpg";
import Fab from '@mui/material/Fab';
import '../../styles/donation.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert'
import {  Cookies } from 'react-cookie'
const Donation = () => {
  const cookie=new Cookies();
  // const addToCartHandler = (itemNum) => {};
  const [data,setData]=useState([]);
  const [supporting,setsupporting]=useState()
  const [des,setdes]=useState()
  const [vicname,setvicname]=useState()
  const [id,setid]=useState()
  const navigate = useNavigate();
  const handledata=(value)=>{
    setData(value)
  }
  useEffect(() => {
   const callfirst=async ()=>{
    try {
      let token=cookie.get('userid')
      var result= await axios.post('http://localhost:5000/user/getdonate',{
          token
      })
      // setData([...result.data.data])
      setData(result.data.data)
      console.log(result.data.data)
      result=result.data.data;
      let len=result.length
      var arr=[]
      var arr2=[]
      var arr3=[]
      var arr4=[]
      for(let i=0;i<len;i++){
        arr.push(result[i].supportingdocs)
        arr2.push(result[i].desc)
        arr3.push(result[i].vicName)
        arr4.push(result[i]._id)

      }
      console.log(arr);
      setdes(arr2)
      setid(arr4)
      setvicname(arr3)
      setsupporting(arr)
      console.log(data);
      return result
    } catch (error) {
      console.log(error);
      return swal({
        title:'Something went wrong.Please login first',
        icon:'error'
      })
    }
   }
   callfirst()
  
  },[])

 
  const handleRaise=()=>{
    navigate("/raisefund");
  }
  return (
    <section id="menu">
      <h1>DONATE</h1>
      <div>
        {
          data.map((e)=>{
           return  <DonationCard
           key={e._id}
           extraData = {e}
          itemNum={e._id}
          imagesrc={e.supportingdocs[0].Url}
          title={e.desc}
          delay={0.1}
        />
          })
        }
        
      
      </div>
    </section> 
  );
};

export default Donation;