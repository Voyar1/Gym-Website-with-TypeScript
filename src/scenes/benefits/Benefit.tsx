import { SelectedPage } from "@/shared/types";
import React from "react";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <div className="rounder-md mt-5 border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounder-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Benefit;
