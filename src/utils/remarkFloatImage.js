import { visit } from 'unist-util-visit';

// Transforms ::image and :::image-row directive nodes into raw HTML figure elements.
export default function remarkFloatImage() {
  return (tree) => {
    // Handle :::image-row container directive
    visit(tree, 'containerDirective', (node, index, parent) => {
      if (node.name !== 'image-row') return;

      const figures = node.children
        .filter(child => child.type === 'leafDirective' && child.name === 'image')
        .map(child => buildFigureHtml(child.attributes || {}, true))
        .join('\n');

      const html = `<div class="image-row">\n${figures}\n</div>`;
      parent.children.splice(index, 1, { type: 'html', value: html });
    });

    // Handle standalone ::image leaf directive
    visit(tree, 'leafDirective', (node, index, parent) => {
      if (node.name !== 'image') return;
      const html = buildFigureHtml(node.attributes || {}, false);
      parent.children.splice(index, 1, { type: 'html', value: html });
    });
  };
}

function buildFigureHtml(attrs, inRow) {
  // Attrs are author-written markdown only — not user input. rehype-sanitize runs downstream.
  const src = attrs.src || '';
  const alt = attrs.alt || '';
  const caption = attrs.caption || '';
  const float = attrs.float || 'right';
  const width = attrs.width || '250';

  let figureStyle = '';
  let figureClass = 'float-image';

  if (inRow) {
    // Inside image-row: width is a percentage, no float class applied
    figureStyle = `style="width:${width}"`;
  } else if (float === 'center') {
    figureClass += ' float-center';
    figureStyle = '';
  } else {
    figureClass += ` float-${float}`;
    figureStyle = `style="width:${width}px"`;
  }

  const captionHtml = caption
    ? `\n  <figcaption>${caption}</figcaption>`
    : '';

  const styleAttr = figureStyle ? ` ${figureStyle}` : '';
  return `<figure class="${figureClass}"${styleAttr}>\n  <img src="${src}" alt="${alt}" style="width:100%" />${captionHtml}\n</figure>`;
}
