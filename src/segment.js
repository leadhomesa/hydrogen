const ready = callback => {
  if (window.analytics) window.analytics.ready(callback);
};

export const identify = (userId, traits) => {
  if (window.analytics) ready(() => window.analytics.identify(userId, traits));
};

export const page = properties => {
  if (window.analytics) ready(() => window.analytics.page(properties));
};

export const track = (event, properties) => {
  if (window.analytics) ready(() => window.analytics.track(event, properties));
};
