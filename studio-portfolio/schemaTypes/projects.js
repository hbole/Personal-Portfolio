import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Project Title',
      description: 'The name of the project',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'URL-friendly identifier for this project',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'description',
      type: 'markdown',
      title: 'Description',
      description: 'Detailed description of the project (supports Markdown)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack',
      description: 'Technologies or tools used in this project',
      of: [{ type: 'reference', to: { type: 'techStack' } }],
    }),
    defineField({
      name: 'repositoryLink',
      type: 'url',
      title: 'Repository Link',
      description: 'Link to the GitHub/Bitbucket/other repository for this project',
    }),
    defineField({
      name: 'liveLink',
      type: 'url',
      title: 'Live Link',
      description: 'Link to the live demo or deployed version of the project',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Project',
      description: 'Mark this project as featured for portfolio highlights',
      initialValue: false,
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Project Image',
      description: 'Upload an image representing this project',
      options: {
        hotspot: true,
      },
    }),
  ],
});
