import { type BlogHead } from '~/types/blog';
import { testBlog } from '~/types/testblog';

export const useArticles = () =>
	useState<BlogHead[]>(() => [testBlog.head, testBlog.head, testBlog.head, testBlog.head, testBlog.head]);
export const usePage = () => useState<number>(() => 1);
export const useArticleNumber = () => useState<number>(() => 0);
export const useActiveArticle = () => useState<BlogHead | undefined>(() => undefined);
