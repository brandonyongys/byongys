import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import remarkFloatImage from '../utils/remarkFloatImage.js';

const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), 'figure', 'figcaption'],
  attributes: {
    ...defaultSchema.attributes,
    figure: ['className', 'style'],
    figcaption: [],
    div: [...(defaultSchema.attributes?.div ?? []), 'className'],
    img: [...(defaultSchema.attributes?.img ?? []), 'style'],
  },
};

export const REMARK_PLUGINS = [remarkGfm, remarkDirective, remarkFloatImage];
export const REHYPE_PLUGINS = [rehypeRaw, [rehypeSanitize, sanitizeSchema]];
