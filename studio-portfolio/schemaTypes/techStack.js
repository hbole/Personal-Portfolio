import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'techStack',
  type: 'document',
  title: 'Tech Stack',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Tech Stack Name',
      validation: (Rule) => Rule.required().error('Tech Stack Name is required'),
    }),
    defineField({
      name: 'logoDark',
      type: 'image',
      title: 'Tech Stack Logo In Dark Mode',
      options: { hotspot: true },
      description: 'Upload the tech stack logo',
    }),
    defineField({
      name: 'logoLight',
      type: 'image',
      title: 'Tech Stack Logo In Light Mode',
      options: { hotspot: true },
      description: 'Upload the tech stack logo',
    }),
  ],
});
