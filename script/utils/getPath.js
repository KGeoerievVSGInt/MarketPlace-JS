export function isValidUrl(urlString) {
  try {
    new URL(urlString);
    return true;
  } catch (e) {
    return false;
  }
}

export function getPath(href) {
  if (isValidUrl(href)) {
    const url = new URL(href);
    return url.pathname;
  } else {
    return href;
  }
}
