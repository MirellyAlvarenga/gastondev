import React from 'react'
import { Timeline } from '../_components/timeline'
import { experience } from "@/lib/data";

export default async function Page() {
  return (
    <div className='h-full'>
      <Timeline data={experience} />
    </div>
  );
}