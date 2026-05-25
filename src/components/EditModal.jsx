"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { FaEdit } from "react-icons/fa";

export function EditModal({ destination }) {
  const {
    _id,
    category,
    country,
    departureDate,
    description,
    destinationName,
    duration,
    imageUrl,
    price,
  } = destination;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    console.log(destination);

    const res = await fetch(`http://localhost:5000/destination/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destination),
    });
    const data = await res.json();
    console.log(data);
    alert("Data Updated");
  };
  return (
    <Modal>
      <Button variant="secondary">
        {" "}
        <span className="flex items-center gap-2">
          <FaEdit />
          Edit
        </span>
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaEdit />
              </Modal.Icon>
              <Modal.Heading>Edit Destination</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="space-y-7" onSubmit={onSubmit}>
                  {/* Destination Name */}
                  <TextField
                    name="destinationName"
                    defaultValue={destinationName}
                    isRequired
                  >
                    <Label>Destination Name</Label>
                    <Input
                      placeholder="Enter Your Destination Name"
                      className="rounded-xl w-full outline-none"
                    />
                    <FieldError />
                  </TextField>

                  <div className="flex flex-col md:flex-row justify-between items-center gap-6  space-y-4">
                    {/* Country */}
                    <TextField
                      defaultValue={country}
                      name="country"
                      isRequired
                      className={"w-full"}
                    >
                      <Label>Country</Label>
                      <Input
                        placeholder="Indonesia"
                        className="rounded-xl outline-none"
                      />
                      <FieldError />
                    </TextField>

                    <Select
                      defaultValue={category}
                      name="category"
                      isRequired
                      className="w-full rounded-xl outline-none border border-none"
                      placeholder="Select category"
                    >
                      {/* <Label>Category</Label> */}
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover className={"rounded-xl"}>
                        <ListBox>
                          <ListBox.Item id="Beach" textValue="Beach">
                            Beach
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Mountain" textValue="Mountain">
                            Mountain
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="City" textValue="City">
                            City
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Adventure" textValue="Adventure">
                            Adventure
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Cultural" textValue="Cultural">
                            Cultural
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Luxury" textValue="Luxury">
                            Luxury
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center  space-y-4">
                    {/* Price */}
                    <TextField
                      defaultValue={price}
                      name="price"
                      type="number"
                      isRequired
                      className={"w-full"}
                    >
                      <Label>Price (USD)</Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-xl outline-none "
                      />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                      defaultValue={duration}
                      name="duration"
                      isRequired
                      className={"w-full"}
                    >
                      <Label>Duration</Label>
                      <Input
                        placeholder="7 Days / 6 Nights"
                        className="rounded-xl outline-none"
                      />
                      <FieldError />
                    </TextField>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4">
                    {/* Departure Date */}
                    <TextField
                      defaultValue={departureDate}
                      name="departureDate"
                      type="date"
                      isRequired
                      className={"w-full"}
                    >
                      <Label>Departure Date</Label>
                      <Input type="date" className="rounded-xl outline-none" />
                      <FieldError />
                    </TextField>

                    {/* Image URL */}
                    <TextField
                      defaultValue={imageUrl}
                      name="imageUrl"
                      isRequired
                      className={"w-full"}
                    >
                      <Label>Image URL</Label>
                      <Input
                        type="url"
                        placeholder="Enter Your Destination Image URL"
                        className="rounded-xl outline-none"
                      />
                      <FieldError />
                    </TextField>
                  </div>

                  {/* Description */}
                  <TextField
                    defaultValue={description}
                    name="description"
                    isRequired
                  >
                    <Label>Description</Label>
                    <TextArea
                      placeholder="Describe the travel experience..."
                      className="rounded-xl outline-none"
                    />
                    <FieldError />
                  </TextField>

                  {/* Buttons */}
                  <div className="flex flex-col md:flex-row items-center justify-end gap-4 pt-4">
                    <Button
                      radius="md"
                      slot="close"
                      className="px-8 bg-red-600"
                    >
                      Cancel
                    </Button>

                    <Button
                      slot="close"
                      type="submit"
                      radius="md"
                      className="px-8 bg-[#00A8E7] text-white"
                    >
                      Save
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
