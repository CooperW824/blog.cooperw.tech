export interface Blog {
    head: BlogHead;
    body: Content[];
}

export interface BlogHead {
    title: string;
    picture: string;
    description: string;
    tags: string[];
    date: string;
    id: string;
    author: string;
}

export type Content = paragraph | heading | image  | embed | code | quote | list | link;

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
    caption: string;
    s3: boolean; // if true, src is an s3 key
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
    quoted: string;
    content: string;
}

export interface list {
    type: 'list';
    content: Content[];
    ordered: boolean;
}

export interface link {
    type: 'link';
    content: string;
    href: string;
}



