import HttpService from './HttpService';
import TokenService from './TokenService';

HttpService.setBaseURL(process.env.REACT_APP_API_URL);
HttpService.mountErrorInterceptor();

const token = TokenService.getToken();

if (token) {
  HttpService.setAuthorizationHeader(token);
}
