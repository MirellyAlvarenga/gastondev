import React from "react";
import { Timeline } from "../_components/ui/timeline";
import { experience } from "@/lib/data";

export default async function Page() {
  return (
    <div className="container flex items-center justify-center px-10 lg:px-4 mx-auto sm:pt-36">
      <div className="flex flex-col w-[450px] sm:w-[900px] mx-auto mt-14 sm:mt-0 gap-12">
        <div className="w-full overflow-clip">
          <Timeline data={experience} />
        </div>
      </div>
    </div>
  );
}
