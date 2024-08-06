import { defHttp } from '/@/http';

enum apiEnum {
  login = '/user/login',
  captcha = '/email/register-captcha',
  register = '/user/register',
}

export const userLogin = (params: { username: string; password: string }) => defHttp.post({ url: apiEnum.login, params });

export const getCaptcha = (params: { address: string }) => defHttp.get({ url: apiEnum.captcha, params });

export const register = (params: { username: string; password: string; email: string; captcha: string }) => defHttp.post({ url: apiEnum.register, params });
