"use client";

import { AlertDialog, Button } from "@heroui/react";
// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { RiDeleteBinLine } from "react-icons/ri";

export function DeleteDestination({ destination }) {
  const { _id, destinationName } = destination;

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/destination/${_id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    // revalidatePath("/destination");
    console.log(data);
    alert(`${destinationName} is deleted permanantly.`);
    redirect("/destinations");
  };

  return (
    <AlertDialog>
      <Button variant="danger">
        {" "}
        <span className="flex items-center gap-2  text-white">
          <RiDeleteBinLine />
          Delete
        </span>
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete
                <strong> {destinationName} </strong>
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Destination
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
