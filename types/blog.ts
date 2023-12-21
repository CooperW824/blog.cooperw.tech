export interface Blog {
    id: string;
    head: {
        title: string;
        picture: string;
        description: string;
        tags: string[];
        date: string;
        author: string;
    };
    body: content[];
}

export type content = paragraph | heading | image | iframe | embed | code | quote | list | link;

export interface paragraph {
    type: 'paragraph';
    content: string;
}

export interface heading {
    type: 'heading';
    size: 2 | 3 | 4 | 5 | 6;
    content: string;
}

export interface image {
    type: 'image';
    src: string;
    alt: string;
}

export interface iframe {
    type: 'iframe';
    src: string;
    title: string;
}

export interface embed {
    type: 'embed';
    src: string;
    title: string;
}

export interface code {
    type: 'code';
    content: string;
    language: string;
}

export interface quote {
    type: 'quote';
    content: string;
}

export interface list {
    type: 'list';
    content: string[];
    ordered: boolean;
}

export interface link {
    type: 'link';
    content: string;
    href: string;
}



