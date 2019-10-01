export const getBaseUrl = () => {
  const host = window.location.origin;
  if (host.indexOf('localhost') > -1) return 'https://www.leadhome.co.za';

  return host;
};
