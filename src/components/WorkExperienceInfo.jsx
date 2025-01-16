import React, { useEffect, useState } from 'react';
import moment from 'moment';
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const WorkExperienceInfo = ({ workExperience }) => {
  const [timeSpentInCompany, setTimeSpentInCompany] = useState("");

  useEffect(() => {
    if(workExperience?._id) {
      const startDate = moment(workExperience?.startDate);
      const endDate = workExperience?.isCurrent ? moment() : moment(workExperience?.endDate);

      const years = endDate.diff(startDate, 'years');
      startDate.add(years, 'years'); // Adjust the startDate to account for the full years

      const months = endDate.diff(startDate, 'months');

      const time = `${years} ${years === 1 ? 'Year' : 'Years'} ${months} ${months === 1 ? 'Month' : 'Months'}`;
      setTimeSpentInCompany(time);
    }
  }, [workExperience])

  return (
    
    <DialogPrimitive.Root>
      <div className="w-full flex justify-end">
        <DialogPrimitive.Trigger asChild>
          <div className="flex justify-center md:w-fit xs:w-full items-center clash-display-bold text-lg p-4 h-10 text-black rounded-3xl tracking-wider bg-white outline-none">
            Know More
          </div>
        </DialogPrimitive.Trigger>
      </div>
      
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed z-50 inset-0 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="w-[75%] fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 card-bg text-white md:px-10 md:py-8 xs:p-4 shadow-lg rounded-xl">
          <DialogPrimitive.Title className="sr-only">
            Work Experience Details
          </DialogPrimitive.Title>
          <div className="flex flex-col max-h-[80vh] px-2 overflow-auto">
            <div className="w-full flex justify-start items-center gap-4">
              <img src={workExperience?.companyLogoLight} alt={workExperience?.companyName} className="h-16 w-16" />
              <p className="lg:text-4xl md:text-4xl xs:text-2xl clash-display-bold tracking-wider">{ workExperience?.companyName }</p>
            </div>
            <hr className="my-4 border-[1px]" />
            
            <div className="w-full flex md:flex-row xs:flex-col md:justify-between md:items-center xs:justify-start xs:items-start gap-4 my-2">
              <p className="lg:text-3xl md:text-2xl xs:text-xl clash-display-bold tracking-wide">{ workExperience?.role }</p>
              <p className="clash-display-regular italic text-lg">
                {`${moment(workExperience?.startDate).format("MMM YYYY")} - ${workExperience?.isCurrent ? 'Present' : moment(workExperience?.endDate).format("MMM YYYY")}`}
              </p>
            </div>
            <div className="w-full flex justify-start items-center gap-2">
              <i className="fa-solid fa-clock"></i>
              {
                timeSpentInCompany && (
                  <p className="clash-display-medium text-md">
                    {timeSpentInCompany}
                  </p>
                )
              }
            </div>
            <div className="my-4">
              <Markdown remarkPlugins={[remarkGfm]} className="text-xl clash-display-medium tracking-wider leading-relaxed">
                {workExperience?.achievements}
              </Markdown>
            </div>

            <div>
              <p className="lg:text-3xl md:text-2xl xs:text-xl clash-display-bold tracking-wider my-4">Tech Stack & Tools</p>
              <div className="flex md:flex-row xs:flex-col flex-wrap justify-start gap-4">
                {
                  workExperience?.techStack?.map((techStack) => (
                    <div key={techStack?._id} className="flex items-center gap-3 bg-black text-white rounded-3xl py-2 px-4 md:min-w-36 xs:min-w-fit">
                      <img src={techStack?.logoLight} alt={techStack?.name} className="w-5 h-5" />
                      <p className="clash-display-medium text-lg">{techStack?.name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          
          <DialogPrimitive.Close className="absolute btn rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground top-3 right-4">
            <span className="text-2xl clash-display-bold">X</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default WorkExperienceInfo;
