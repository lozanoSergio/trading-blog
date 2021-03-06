export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    initialValue: {
        views: 0,
    },
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
            fields: [
                {
                    name: 'alternativeText',
                    type: 'string',
                    title: 'Alternative Text',
                },
            ],
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'views',
            title: 'Views',
            type: 'number',
            readOnly: true,
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
            validation: (Rule) => Rule.max(125).warning('Shorter summaries are usually better'),
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            });
        },
    },
};
