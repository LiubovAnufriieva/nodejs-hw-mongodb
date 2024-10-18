const parseIsFavourite = (isFavourite) => {
  const isString = typeof isFavourite === 'string';

  if (!isString) return null;

  if (isFavourite !== 'true' && isFavourite !== 'false') return null;

  return isFavourite === 'true' ? true : false;
};

export const parseFilterParams = (query) => {
  const { isFavourite } = query;

  const parsedFavourite = parseIsFavourite(isFavourite);

  return {
    isFavourite: parsedFavourite,
  };
};
