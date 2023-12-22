import type { Blog } from './blog';

export const testBlog: Blog = {
	id: 'test',
	head: {
		title: 'This is a really long title that should wrap ',
		picture:
			'https://images.unsplash.com/photo-1702135214290-3d64446356c5?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus nunc tellus. Donec imperdiet fermentum arcu vitae porta. Morbi ut tellus vel turpis pharetra interdum. Cras neque nisl, convallis lacinia laoreet nec, hendrerit sit amet turpis. Donec eget metus rutrum, imperdiet nulla vitae, ultricies lacus. In placerat, nulla non porttitor aliquet, lectus odio aliquet nisi, finibus ornare magna lectus nec tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque at ex lacinia ligula aliquet luctus. Morbi porttitor turpis leo, nec posuere nulla dapibus vel. Aliquam erat volutpat. Vivamus tincidunt, risus nec molestie sodales, magna erat accumsan justo. ',
		tags: ['test', 'blog', 'nuxt', 'typescript', 'tailwindcss', 'API', 'content', 'headless', 'cms', 'strapi'],
		date: '2021-09-16',
		author: 'Cooper Werner',
	},
	body: [
		{
			type: 'heading',
			size: 2,
			content: 'H2 Heading',
		},
		{
			type: 'paragraph',
			content:
				'Lorem ispum dolor sit amet, consectetur adipiscing elit. Cras finibus nunc tellus. Donec imperdiet fermentum arcu vitae porta. Morbi ut tellus vel turpis pharetra interdum. Cras neque nisl, convallis lacinia laoreet nec, hendrerit sit amet turpis. Donec eget metus rutrum, imperdiet nulla vitae, ultricies lacus. In placerat, nulla non porttitor aliquet, lectus odio aliquet nisi, finibus ornare magna lectus nec tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque at ex lacinia ligula aliquet luctus. Morbi porttitor turpis leo, nec posuere nulla dapibus vel. Aliquam erat volutpat. Vivamus tincidunt, risus nec molestie sodales, magna erat accumsan justo. ',
		},
		{
			type: 'heading',
			size: 3,
			content: 'H3 Heading',
		},
		{
			type: 'paragraph',
			content:
				'Lorem ispum dolor sit amet, consectetur adipiscing elit. Cras finibus nunc tellus. Donec imperdiet fermentum arcu vitae porta. Morbi ut tellus vel turpis pharetra interdum. Cras neque nisl, convallis lacinia laoreet nec, hendrerit sit amet turpis. Donec eget metus rutrum, imperdiet nulla vitae, ultricies lacus. In placerat, nulla non porttitor aliquet, lectus odio aliquet nisi, finibus ornare magna lectus nec tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque at ex lacinia ligula aliquet luctus. Morbi porttitor turpis leo, nec posuere nulla dapibus vel. Aliquam erat volutpat. Vivamus tincidunt, risus nec molestie sodales, magna erat accumsan justo. ',
		},
		{
			type: 'heading',
			size: 4,
			content: 'H4 Heading',
		},
		{
			type: 'paragraph',
			content:
				'Lorem ispum dolor sit amet, consectetur adipiscing elit. Cras finibus nunc tellus. Donec imperdiet fermentum arcu vitae porta. Morbi ut tellus vel turpis pharetra interdum. Cras neque nisl, convallis lacinia laoreet nec, hendrerit sit amet turpis. Donec eget metus rutrum, imperdiet nulla vitae, ultricies lacus. In placerat, nulla non porttitor aliquet, lectus odio aliquet nisi, finibus ornare magna lectus nec tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque at ex lacinia ligula aliquet luctus. Morbi porttitor turpis leo, nec posuere nulla dapibus vel. Aliquam erat volutpat. Vivamus tincidunt, risus nec molestie sodales, magna erat accumsan justo. ',
		},
		{
			type: 'heading',
			size: 5,
			content: 'H5 Heading',
		},
		{
			type: 'paragraph',
			content:
				'Lorem ispum dolor sit amet, consectetur adipiscing elit. Cras finibus nunc tellus. Donec imperdiet fermentum arcu vitae porta. Morbi ut tellus vel turpis pharetra interdum. Cras neque nisl, convallis lacinia laoreet nec, hendrerit sit amet turpis. Donec eget metus rutrum, imperdiet nulla vitae, ultricies lacus. In placerat, nulla non porttitor aliquet, lectus odio aliquet nisi, finibus ornare magna lectus nec tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque at ex lacinia ligula aliquet luctus. Morbi porttitor turpis leo, nec posuere nulla dapibus vel. Aliquam erat volutpat. Vivamus tincidunt, risus nec molestie sodales, magna erat accumsan justo. ',
		},
		{
			type: 'heading',
			size: 6,
			content: 'H6 Heading',
		},
		{
			type: 'paragraph',
			content:
				'Lorem ispum dolor sit amet, consectetur adipiscing elit. Cras finibus nunc tellus. Donec imperdiet fermentum arcu vitae porta. Morbi ut tellus vel turpis pharetra interdum. Cras neque nisl, convallis lacinia laoreet nec, hendrerit sit amet turpis. Donec eget metus rutrum, imperdiet nulla vitae, ultricies lacus. In placerat, nulla non porttitor aliquet, lectus odio aliquet nisi, finibus ornare magna lectus nec tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque at ex lacinia ligula aliquet luctus. Morbi porttitor turpis leo, nec posuere nulla dapibus vel. Aliquam erat volutpat. Vivamus tincidunt, risus nec molestie sodales, magna erat accumsan justo. ',
		},
		{
			type: 'image',
			src: 'https://images.unsplash.com/photo-1702135214290-3d64446356c5?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			alt: 'This is an image',
			caption: 'This is a caption',
		},
		{
			type: 'embed',
			src: 'https://www.youtube.com/embed/dCxSsr5xuL8?si=rt5NnHO4wJLXYAL7',
			title: 'This is an embed',
		},
		{ type: 'embed', src: 'https://www.wfc.cooperw.tech/', title: 'This is an embed' },

		{
			type: 'code',
			content: 'console.log("This is code");',
			language: 'javascript',
		},
		{
			type: 'quote',
			content: 'This is a quote',
		},
		{
			type: 'list',
			content: [
				{ type: 'paragraph', content: 'This is a list item' },
				{ type: 'paragraph', content: 'This is another list item' },
			],
			ordered: false,
		},
		{
			type: 'list',
			content: [
				{ type: 'paragraph', content: 'This is a list item' },
				{ type: 'paragraph', content: 'This is another list item' },
			],
			ordered: true,
		},
		{
			type: 'link',
			content: 'This is a link',
			href: 'https://google.com',
		},
	],
};
