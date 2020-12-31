const ROUTE_MAP = {
  'webiste-politics': ['polityka-prywatnosci-strony'],
  blog: ['posts', 'posty'],
  'app/happening/new-happening': ['app'],
  'app/happening/share': ['app/udostepnij-linki'],
  'app/participation-happening/participation-happening': ['app/losuj'],
  'app/admin/dashboard': ['app/admin'],
};

const ROUTE_MAP_SITEMAP = {
  'index': '',
  'webiste-politics': 'polityka-prywatnosci-strony',
  // 'blog/[id]': false,
};

const ROUTE_MAP_CONFIG = {
  'blog/[id]': false,
  'tag/[id]': false,
  'app/happening/new-happening': false,
  'app/happening/share': false,
  'app/participation-happening/participation-happening': false,
  'app/admin/dashboard': false,
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
