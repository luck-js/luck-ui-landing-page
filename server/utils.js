const ROUTE_MAP = {
  'bot-politics': ['polityka-prywatnosci-pan-mikolaj-luck'],
  'webiste-politics': ['polityka-prywatnosci-strony'],
  blog: ['posts', 'posty'],
};

const ROUTE_MAP_SITEMAP = {
  'index': '',
  'bot-politics': 'polityka-prywatnosci-pan-mikolaj-luck',
  'webiste-politics': 'polityka-prywatnosci-strony',
  // 'blog/[id]': false,
};

const ROUTE_MAP_CONFIG = {
  'blog/[id]': false,
}

const withousSlash = (pathname) => {
  return pathname.replace(/^\/|\/$/g, '')
}

const getKeyByPathname = (pathname) => {
  return Object.keys(ROUTE_MAP).find(key => ROUTE_MAP[key].some(p => withousSlash(pathname) === p))
}

const getPathnameByKey = (key) =>{
  return ROUTE_MAP_SITEMAP[withousSlash(key)];
}

const isRouteDisabled = (pathname) => {
  const route = ROUTE_MAP_CONFIG[withousSlash(pathname)];
  return route !== undefined && route === false;
}

module.exports = { ROUTE_MAP, getKeyByPathname, getPathnameByKey, withousSlash, isRouteDisabled };
