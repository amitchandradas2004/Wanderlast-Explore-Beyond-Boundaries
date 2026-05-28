"use client";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function BookingDeleteAlert({ bookingId }) {
  const handleCancelBooking = async () => {
    try {
      const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      window.location.reload();
      if (data.deletedCount > 0) {
        toast.success("Booking cancelled successfully");
      } else {
        toast.error("Booking not found");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <AlertDialog>
      <Button
        variant="danger"
        className="rounded-full  px-6 py-2 text-sm font-medium "
      >
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Booking permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={handleCancelBooking}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
