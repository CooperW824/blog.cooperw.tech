import type { Blog } from "./blog";

export const testBlog: Blog = {
    id: 'test',
    head: {
        title: 'Test Blog',
        picture: 'https://images.unsplash.com/photo-1702135214290-3d64446356c5?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'This is a test blog',
        tags: ['test', 'blog'],
        date: '2021-09-16',
        author: 'Test Author',
    },
    body: [
        {
            type: 'heading',
            size: 2,
            content: 'H2 Heading'
        },
        {
            type: 'heading',
            size: 3,
            content: 'H3 Heading'
        },
        {
            type: 'heading',
            size: 4,
            content: 'H4 Heading'
        },
        {
            type: 'heading',
            size: 5,
            content: 'H5 Heading'
        },
        {
            type: 'heading',
            size: 6,
            content: 'H6 Heading'
        },
        {
            type: 'paragraph',
            content: 'This is a paragraph'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1702135214290-3d64446356c5?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'This is an image'
        },
        {
            type: 'iframe',
            src: 'https://www.youtube.com/embed/6n3pFFPSlW4',
            title: 'This is an iframe'
        },
        {
            type: 'embed',
            src: 'https://www.youtube.com/embed/6n3pFFPSlW4',
            title: 'This is an embed'
        },
        {
            type: 'code',
            content: 'console.log("This is code");',
            language: 'javascript'
        },
        {
            type: 'quote',
            content: 'This is a quote'
        },
        {
            type: 'list',
            content: [{type: 'paragraph', content: 'This is a list item'}, {type: 'paragraph', content: 'This is another list item'}],
            ordered: false
        },
        {
            type: 'list',
            content: [{type: 'paragraph', content: 'This is a list item'}, {type: 'paragraph', content: 'This is another list item'}],
            ordered: true
        },
        {
            type: 'link',
            content: 'This is a link',
            href: 'https://google.com'
        }
        
    ]
}