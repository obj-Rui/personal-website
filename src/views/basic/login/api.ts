import { defHttp } from '/@/http';

enum apiEnum {
  login = '/user/login',
  captcha = '/email/register-captcha',
}

export const userLogin = (params: { username: string; password: string }) => defHttp.post({ url: apiEnum.login, params });

export const getCaptcha = (params: { address: string }) => defHttp.get({ url: apiEnum.captcha, params });
