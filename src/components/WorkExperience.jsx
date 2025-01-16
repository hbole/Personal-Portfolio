import React from 'react';
import moment from 'moment';
import TechStackCard from './TechStackCard';
import WorkExperienceInfo from './WorkExperienceInfo';

const WorkExperience = ({ workExperience }) => {
  return (
    <div className="p-6 card-bg text-white rounded-2xl">
      <div className="flex sm:flex-row xs:flex-col justify-start lg:items-center xs:items-center gap-6">
        <div>
          <img src={workExperience?.companyLogoLight} alt={workExperience?.companyName} className="lg:h-10 lg:w-10 xs:h-20 xs:w-20" />
        </div>
        <div className="w-full flex lg:flex-row xs:flex-col justify-between items-start gap-4">
          <div className="flex flex-col justify-between">
            <p className="clash-display-bold text-white text-2xl tracking-wider">{workExperience?.companyName} - {workExperience?.role}</p>
            <p className="clash-display-regular text-white text-[16px]">
              {`${moment(workExperience?.startDate).format("MMM YYYY")} - ${workExperience?.isCurrent ? 'Present' : moment(workExperience?.endDate).format("MMM YYYY")}`}
            </p>
          </div>
          <div className="flex justify-between items-center gap-3">
            {
              workExperience?.techStack.map((techStack) => (
                <TechStackCard key={techStack._id} techStack={techStack} />
                ))
              }
          </div>
        </div>
      </div>
      <p className="my-4 lg:ml-16 sm:ml-24 xs:ml-0">
        {workExperience?.description}
      </p>
      <WorkExperienceInfo workExperience={workExperience} />
    </div>
  )
}

export default WorkExperience