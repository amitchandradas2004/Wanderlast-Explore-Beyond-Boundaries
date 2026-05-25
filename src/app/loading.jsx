import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Spinner size="xl" className="w-10" />
    </div>
  );
};

export default loading;
