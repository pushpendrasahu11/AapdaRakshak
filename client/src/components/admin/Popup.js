import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Textarea from '@mui/joy/Textarea';

import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


export default function Popup({heading,data,att}) {
  const [open, setOpen] = useState(true);

  const [a,setA] = useState(data[0].a);
  const [b,setB] = useState(data[0].b);
  const [c,setC] = useState(data[0].c);
  const [d,setD] = useState(data[0].d);
  const [desc,setDesc] = useState(data[0].desc);
  const [itemImg,setItemImg] = useState(data[0].img);

console.log(data);
  useEffect(()=>{
    
    setA(data[0].a)
    setB(data[0].b)
    setC(data[0].c)
    setD(data[0].d)
    setDesc(data[0].desc)
    setItemImg(data[0].img)


    console.log(a)
    console.log(itemImg)
  },[data])

  console.log(a)
  console.log(b)
  console.log(itemImg)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReject = ()  =>{
    setOpen(false);
  }

  const handleAccept = ()  =>{
    setOpen(false);
  }


  const handleSubmit=()=>{

  }

  const handleChange=()=>{

  }


  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog  open={open}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
fullWidth={true}
maxWidth='md'>

<DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Card >
      <Typography style={{margin:'10px 20px',texAlign:'center'}} variant="h5" component="div">
          {heading}
        </Typography>
      <CardContent>
      <div style={{display:'flex',alignItems:'center',gap:'10px',margin:'10px'}}> <Typography style={{flex:1}}> {att[0].a} </Typography> <TextField style={{flex:5}} value={a} onChange={(e)=>setA(e.target.value)} id="outlined-basic" label="" variant="outlined" /></div>
      <div style={{display:'flex',alignItems:'center',gap:'10px',margin:'10px'}}> <Typography style={{flex:1}}> {att[0].b} </Typography> <TextField style={{flex:5}} value={b} onChange={(e)=>setB(e.target.value)} id="outlined-basic" label="" variant="outlined" /></div>
      <div style={{display:'flex',alignItems:'center',gap:'10px',margin:'10px'}}> <Typography style={{flex:1}}> {att[0].c} </Typography> <TextField style={{flex:5}} value={c} onChange={(e)=>setC(e.target.value)} id="outlined-basic" label="" variant="outlined" /></div>
      <div style={{display:'flex',alignItems:'center',gap:'10px',margin:'10px'}}> <Typography style={{flex:1}}> {att[0].d} </Typography> <TextField style={{flex:5}} value={d} onChange={(e)=>setD(e.target.value)} id="outlined-basic" label="" variant="outlined" /></div>
      <div style={{display:'flex',alignItems:'center',gap:'10px',margin:'10px'}}> <Typography style={{flex:1}}> Description </Typography> <Textarea style={{flex:5}} value={desc} onChange={(e)=>setDesc(e.target.value)} id="outlined-basic" label="" variant="outlined" minRows={2} maxRows={5} /></div>
      <div style={{display:'flex',alignItems:'center',gap:'10px',margin:'10px'}}> <Typography style={{flex:1}}> Supporting Documents </Typography> 
      <ImageList sx={{ width: 500, height: 450 }} cols={1} >
      {itemImg.map((item) => (
        <ImageListItem key={item}>
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
</div>
      </CardContent>

      
      
    </Card>
          </DialogContentText>
        </DialogContent>
      
      

       
        <DialogActions>
          <Button color='error' onClick={handleReject} variant="contained">Reject</Button>
          <Button color='success' onClick={handleAccept} variant="contained">Accept</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const itemData = [
    
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    
    
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    
  ];