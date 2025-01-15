import { defineType, defineField } from 'sanity';

export default defineType({
  name: "workExperience",
  type: "document",
  title: "Work Experience",
  fields: [
    defineField({
      name: "companyName",
      type: "string",
      title: "Company Name",
      validation: (Rule) => Rule.required().error("Company Name is required"),
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role/Position',
      validation: (Rule) => Rule.required().error('Role/Position is required'),
    }),
    defineField({
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
      validation: (Rule) => Rule.required().error('Start Date is required'),
    }),
    defineField({
      name: 'endDate',
      type: 'date',
      title: 'End Date',
      description: 'Leave blank if currently working here',
    }),
    defineField({
      name: 'isCurrent',
      type: 'boolean',
      title: 'Currently Working Here',
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location',
      description: 'City and country of the workplace',
    }),
    defineField({
      name: "description",
      type: "text",  // Standard text field for description
      title: "Description",
      description: "Brief description of your role and responsibilities",
    }),
    defineField({
      name: "achievements",
      type: "markdown", // Markdown for achievements
      title: "Achievements",
      description: "List of key achievements in markdown format",
    }),
    defineField({
      name: "techStack",
      type: "array",
      title: "Tech Stack Used",
      of: [
        {
          type: "reference",
          to: [{ type: "techStack" }],
        },
      ],
      description: "Select tech stack/tools used in this role",
    }),
    defineField({
      name: "companyLogoDark",
      type: "image",
      title: "Company Logo In Dark Mode",
      options: { hotspot: true },
      description: "Upload the company logo",
    }),
    defineField({
      name: "companyLogoLight",
      type: "image",
      title: "Company Logo In Light Mode",
      options: { hotspot: true },
      description: "Upload the company logo",
    }),
  ],
});
