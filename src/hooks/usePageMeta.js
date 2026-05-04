import { useEffect } from 'react';
import { SITE } from '../config/constants';

function setMeta(property, content) {
  const attr = property.startsWith('og:') || property.startsWith('twitter:') ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function usePageMeta({ title, description, path } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.NAME}` : SITE.DEFAULT_TITLE;
    const metaDescription = description || SITE.DEFAULT_DESCRIPTION;
    const url = path ? `${SITE.URL}${path}` : SITE.URL;

    document.title = fullTitle;
    setMeta('description', metaDescription);
    setMeta('og:title', fullTitle);
    setMeta('og:description', metaDescription);
    setMeta('og:url', url);
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', metaDescription);

    return () => {
      document.title = SITE.DEFAULT_TITLE;
      setMeta('description', SITE.DEFAULT_DESCRIPTION);
      setMeta('og:title', SITE.DEFAULT_TITLE);
      setMeta('og:description', SITE.DEFAULT_DESCRIPTION);
      setMeta('og:url', SITE.URL);
      setMeta('twitter:title', SITE.DEFAULT_TITLE);
      setMeta('twitter:description', SITE.DEFAULT_DESCRIPTION);
    };
  }, [title, description, path]);
}
