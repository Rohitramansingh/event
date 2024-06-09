import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from '../Store/store';
import Item from './Item';
import axios from 'axios';
import { getCartData } from './Api';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1100,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function BasicModal() {
    const dispatch=useDispatch();
  const handleOpen = () => dispatch(Action.openModal())
  const handleClose = () => dispatch(Action.closeModal())
   const [data,setdata]=React.useState([]);
  const modalValue=useSelector(state=>state.Modal)
  const user=useSelector(state=>state.userdata)


  // const cartdata=useSelector(state=>state.cartList);
  // console.log(cartdata,"gggg")
   React.useEffect(()=>{
          const fetch=async()=>{
            
            const arr= await getCartData(user.id)
             console.log(arr,"bbb");
            // if(arr!==null)
            //   {
            //     setdata(arr)
            //   }
            
          }

          fetch()
   },[user])
  console.log(data,"ttt");

  return (
    <div  className='bg-green-500 '>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={modalValue}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style} className="bg-gray-400">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           
            { data && data.length===0 ?  <p>No item in cart</p> : 

          <div>


<div className="grid grid-cols-8 bg-black text-white p-1 mx-1 ">
<p>product</p>
<p className="col-span-2 ">Title</p>
<p>price</p>
<p>quantity</p>
<p>total</p>
<p>delete</p>

</div>
<div className="p-1 ">
    {data && data.map((val)=><Item datas={val}/>  )}

</div>
</div>
}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}