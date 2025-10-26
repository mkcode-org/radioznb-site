import { FC } from "react";
import Recordings from "./Recordings";
import { Program } from "@/db/schema";

const ProgramComponent: FC<{ selectedProgram: Program | undefined }> = ({
  selectedProgram,
}) => {
  if (!selectedProgram) return null;
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="pl-4">
        <div className="text-2xl font-bold">{selectedProgram.name}</div>
        {selectedProgram.description}
      </div>
      <Recordings programId={selectedProgram.id} />
    </div>
  );
};

export default ProgramComponent;
