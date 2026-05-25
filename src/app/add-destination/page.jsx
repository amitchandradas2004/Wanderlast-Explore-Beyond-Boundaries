"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";

const categories = [
  "Beach",
  "Mountain",
  "City",
  "Adventure",
  "Cultural",
  "Luxury",
];

const AddDestinationPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    console.log(destination);

    const res = await fetch(`http://localhost:5000/destination`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destination),
    });
    const data = await res.json();
    console.log(data);
    alert("Data submitted");
  };
  return (
    <div className=" bg-gray-50 pt-20 pb-15 px-4">
      <div className="container mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-sm w-[90%]">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Add Travel Package
          </h1>

          <p className="text-gray-500 mt-2">
            Create and publish a new destination package.
          </p>
        </div>

        <form className="space-y-7" onSubmit={onSubmit}>
          {/* Destination Name */}
          <TextField name="destinationName" isRequired>
            <Label>Destination Name</Label>
            <Input
              placeholder="Bali Paradise"
              className="rounded-xl w-full outline-none"
            />
            <FieldError />
          </TextField>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6  space-y-4">
            {/* Country */}
            <TextField name="country" isRequired className={"w-full"}>
              <Label>Country</Label>
              <Input
                placeholder="Indonesia"
                className="rounded-xl outline-none"
              />
              <FieldError />
            </TextField>

            {/* Category - Updated Select Component */}

            <Select
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
            <TextField name="duration" isRequired className={"w-full"}>
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
            <TextField name="imageUrl" isRequired className={"w-full"}>
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="rounded-xl outline-none"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Description */}
          <TextField name="description" isRequired>
            <Label>Description</Label>
            <TextArea
              placeholder="Describe the travel experience..."
              className="rounded-xl outline-none"
            />
            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-end gap-4 pt-4">
            <Button radius="md" className="px-8 bg-red-600">
              Cancel
            </Button>

            <Button
              type="submit"
              radius="md"
              className="px-8 bg-[#00A8E7] text-white"
            >
              Add Travel Package
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDestinationPage;
