import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function RemoveExpenseModal({ expenseId, onRemove, expenseTitle }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function handleConfirmRemove() {
    try {
      await onRemove(expenseId);
      handleClose();
    } catch (error) {
      console.error("Error removing expense:", error);
    }
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        <DeleteIcon />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        slotProps={{
          backdrop: {
            transitionDuration: 250,
          },
        }}
        className="flex flex-col justify-center items-center"
      >
        <Box className="w-1/4 bg-white shadow-2xl rounded-2xl border border-gray-300 p-4 overflow-hidden flex flex-col text-center">
          <Typography>
            {`Are you sure you want to remove ${expenseTitle} as an expense?`}
          </Typography>

          <section className="flex justify-evenly gap-2 mt-4">
            <Button onClick={handleConfirmRemove}>
              Remove
            </Button>

            <Button onClick={handleClose}>
              Cancel
            </Button>
          </section>
        </Box>
      </Modal>
    </>
  );
}