import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"



const TechStackCard = ({ techStack }) => {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <img src={techStack?.logoDark} alt={techStack?.name} className="w-7 h-7" />
          </TooltipTrigger>
          <TooltipContent>
            <p>{techStack?.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

    </div>
  )
}

export default TechStackCard