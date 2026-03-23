import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Autor",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Foto",
      type: "image",
    }),

    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
    }),
  ],
});