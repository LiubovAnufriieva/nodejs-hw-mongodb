
const parseIsFavourite = (isFavourite) => {
    if (
        typeof isFavourite === 'string' && ['true', 'false'].includes(isFavourite)
    ) {
        return isFavourite === 'true';
    }
    return undefined;
};

export const parseFilterParams = (query) => {
const { isFavourite } = query;

const parsedFavourite = parseIsFavourite(isFavourite);

return {
    isFavourite: parsedFavourite,
};
};

