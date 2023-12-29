import { type BlogHead } from '~/types/blog';

export const useArticles = () =>
	useState<BlogHead[]>(() => []);
export const usePage = () => useState<number>(() => 1);
export const useArticleNumber = () => useState<number>(() => 0);
export const useNextToken = () => useState<string | undefined | null>(() => '');
