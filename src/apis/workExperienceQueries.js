export const FETCH_ALL_EXPERIENCES_QUERY = `*[_type == "workExperience"] | order(startDate desc) {
  _id,
  companyName,
  role,
  startDate,
  endDate,
  description,
  achievements,
  location,
  isCurrent,
  techStack[]->{
    name,
    logoDark {
      asset -> {
        url
      }
    },
    logoLight {
      asset -> {
        url
      }
    },
  },
  companyLogoDark {
    asset -> {
      url
    }
  },
  companyLogoLight {
    asset -> {
      url
    }
  },
}`;