import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { FETCH_ALL_EXPERIENCES_QUERY } from '../apis/workExperienceQueries'
import sanityClient from '../apis/sanityClient'
import WorkExperience from './WorkExperience'
import moment from 'moment';

const Experience = () => {
  const [workExperiences, setWorkExperiences] = useState([]);

  const fetchWorkExperiences = async () => {
    try {
      let workExperiences = await sanityClient.fetch(FETCH_ALL_EXPERIENCES_QUERY);

      workExperiences = workExperiences?.map(workExperience => {
        workExperience.techStack = workExperience?.techStack?.map(tech => {
          tech.logoDark = tech?.logoDark?.asset?.url;
          tech.logoLight = tech?.logoLight?.asset?.url;
          return tech
        });
        
        workExperience.companyLogoDark = workExperience?.companyLogoDark?.asset?.url;
        workExperience.companyLogoLight = workExperience?.companyLogoLight?.asset?.url;
        if(workExperience?.isCurrent) {
          workExperience.endDate = moment().format("YYYY-MM-DD");
        }
        return workExperience;
      });
      return workExperiences;
    } catch(err) {
      console.log("Error: " + err);
    }
    
  }
  
  const { data } = useQuery({ queryKey: ['work-experience'], queryFn: fetchWorkExperiences});

  useEffect(() => {
    if(data?.length > 0) {
      setWorkExperiences([...data]);
    }
  }, [data]);

  return (
    <div className="lg:px-14 xs:py-28 xs:px-0 min-h-screen" id="experience">
      <p className="clash-display-bold text-white sm:text-6xl xs:text-4xl">Work Experience</p>

      <div className="mt-10 flex flex-col gap-10">
        {
          workExperiences?.map(workExperience => (
            <WorkExperience key={workExperience?._id} workExperience={workExperience} />
          ))
        }
      </div>
    </div>
  )
}

export default Experience