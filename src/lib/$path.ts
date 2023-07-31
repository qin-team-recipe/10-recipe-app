const buildSuffix = (url?: { query?: Record<string, string>; hash?: string }) => {
  const query = url?.query;
  const hash = url?.hash;
  if (!query && !hash) return "";
  const search = query ? `?${new URLSearchParams(query)}` : "";
  return `${search}${hash ? `#${hash}` : ""}`;
};

export const pagesPath = {
  chef: {
    _id: (id: string | number) => ({
      link: {
        $url: (url?: { hash?: string }) => ({
          pathname: "/chef/[id]/link" as const,
          query: { id },
          hash: url?.hash,
          path: `/chef/${id}/link${buildSuffix(url)}`,
        }),
      },
      $url: (url?: { hash?: string }) => ({
        pathname: "/chef/[id]" as const,
        query: { id },
        hash: url?.hash,
        path: `/chef/${id}${buildSuffix(url)}`,
      }),
    }),
    $url: (url?: { hash?: string }) => ({
      pathname: "/chef" as const,
      hash: url?.hash,
      path: `/chef${buildSuffix(url)}`,
    }),
  },
  fav: {
    my: {
      $url: (url?: { hash?: string }) => ({
        pathname: "/fav/my" as const,
        hash: url?.hash,
        path: `/fav/my${buildSuffix(url)}`,
      }),
    },
    $url: (url?: { hash?: string }) => ({
      pathname: "/fav" as const,
      hash: url?.hash,
      path: `/fav${buildSuffix(url)}`,
    }),
  },
  list: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/list" as const,
      hash: url?.hash,
      path: `/list${buildSuffix(url)}`,
    }),
  },
  recipe: {
    _id: (id: string | number) => ({
      ingredients: {
        $url: (url?: { hash?: string }) => ({
          pathname: "/recipe/[id]/ingredients" as const,
          query: { id },
          hash: url?.hash,
          path: `/recipe/${id}/ingredients${buildSuffix(url)}`,
        }),
      },
      $url: (url?: { hash?: string }) => ({
        pathname: "/recipe/[id]" as const,
        query: { id },
        hash: url?.hash,
        path: `/recipe/${id}${buildSuffix(url)}`,
      }),
    }),
    new: {
      $url: (url?: { hash?: string }) => ({
        pathname: "/recipe/new" as const,
        hash: url?.hash,
        path: `/recipe/new${buildSuffix(url)}`,
      }),
    },
    $url: (url?: { hash?: string }) => ({
      pathname: "/recipe" as const,
      hash: url?.hash,
      path: `/recipe${buildSuffix(url)}`,
    }),
  },
  sample: {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({
        pathname: "/sample/[id]" as const,
        query: { id },
        hash: url?.hash,
        path: `/sample/${id}${buildSuffix(url)}`,
      }),
    }),
    $url: (url?: { hash?: string }) => ({
      pathname: "/sample" as const,
      hash: url?.hash,
      path: `/sample${buildSuffix(url)}`,
    }),
  },
  search: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/search" as const,
      hash: url?.hash,
      path: `/search${buildSuffix(url)}`,
    }),
  },
  settings: {
    logout: {
      $url: (url?: { hash?: string }) => ({
        pathname: "/settings/logout" as const,
        hash: url?.hash,
        path: `/settings/logout${buildSuffix(url)}`,
      }),
    },
    privacy: {
      $url: (url?: { hash?: string }) => ({
        pathname: "/settings/privacy" as const,
        hash: url?.hash,
        path: `/settings/privacy${buildSuffix(url)}`,
      }),
    },
    tos: {
      $url: (url?: { hash?: string }) => ({
        pathname: "/settings/tos" as const,
        hash: url?.hash,
        path: `/settings/tos${buildSuffix(url)}`,
      }),
    },
    $url: (url?: { hash?: string }) => ({
      pathname: "/settings" as const,
      hash: url?.hash,
      path: `/settings${buildSuffix(url)}`,
    }),
  },
  $url: (url?: { hash?: string }) => ({ pathname: "/" as const, hash: url?.hash, path: `/${buildSuffix(url)}` }),
};

export type PagesPath = typeof pagesPath;
