import { jwtParser } from './jwt';
import { addYears, isPast, parseISO } from 'date-fns';
import { getBaseUrl } from './url';
import Cookies from 'js-cookie';

export const getAuthToken = () => {
  const cookie = Cookies.get('authToken');
  return cookie && jwtParser(cookie);
};

export const getRefreshToken = () => {
  const cookie = Cookies.get('authToken');
  return cookie && cookie.split('|')[2];
};

export const getAuthTokenExp = () => {
  const cookie = Cookies.get('authToken');
  return cookie && decodeURIComponent(cookie.split('|')[3]);
};

export const setAuthToken = auth => {
  const authToken = `bearer|${auth['access_token']}|${auth['refresh_token']}|${
    auth['.expires']
  }`;

  Cookies.set('authToken', authToken, {
    expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365),
    domain: '.leadhome.co.za'
  });
};

/**
 * Check to see if the user is logged in. This also refetches the authToken if the user has a valid refresh token.
 */
export const isLoggedIn = async () => {
  let authToken = getAuthToken();
  const refreshToken = getRefreshToken();
  const expiry = parseISO(getAuthTokenExp());

  /**
   * Exit early if we have a very old refresh token.
   */
  if (isPast(addYears(expiry, 1))) {
    return false;
  }

  /**
   * If we the token has expired. Go and get a new one.
   */
  if (isPast(expiry)) {
    const response = await fetch(
      `${getBaseUrl()}/api/profile/login/with-refresh-token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          refreshToken
        })
      }
    );
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    setAuthToken(json);
    return true;
  }
  return !!authToken;
};

export const getBearer = () => {
  const cookie = Cookies.get('authToken');
  if (isLoggedIn()) return `bearer ${cookie.split('%7C')[1]}`;

  return null;
};

export const logout = () => {
  Cookies.remove('authToken', { domain: '.leadhome.co.za' });
};
