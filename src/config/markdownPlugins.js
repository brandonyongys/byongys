import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

export const REMARK_PLUGINS = [remarkGfm];
export const REHYPE_PLUGINS = [rehypeRaw, rehypeSanitize];
