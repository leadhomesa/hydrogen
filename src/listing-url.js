export const slug = string =>
  string.replace(/[^a-z0-9/]+/gi, '-').toLowerCase();

export const listingUrl = (listing, queryParams = '') => {
  return slug(
    `/property/${listing.suburb}/${listing.city}/${listing.id}/${listing.title}${queryParams}`
  );
};
