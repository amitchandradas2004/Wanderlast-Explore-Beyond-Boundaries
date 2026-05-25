import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
      </div>
    </div>
  );
};

export default loading;
