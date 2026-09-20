import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CreateExpenseForm from './CreateExpenseForm';
import { Typography } from '@mui/material';
import { useState } from 'react';



export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Add Expense</Button>
      <Modal
        open={open}
        onClose={handleClose}
        slotProps={{backdrop: {transitionDuration: 250,},
  }}
        className=" flex flex-col justify-center items-center">

        <Box className="w-1/2 bg-white shadow-2xl transform-100 rounded-2xl border border-solid border-gray-300 p-4 overflow-hidden">
          <CreateExpenseForm/>
        </Box>

      </Modal>
    </div>
  );
}