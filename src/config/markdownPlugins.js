import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkFloatImage from '../utils/remarkFloatImage.js';

export const REMARK_PLUGINS = [remarkGfm, remarkDirective, remarkFloatImage];
export const REHYPE_PLUGINS = [rehypeRaw, rehypeSanitize];
