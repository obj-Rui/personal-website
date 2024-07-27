import { defHttp } from '/@/http';

enum apiEnum {
  login = '/user/login',
}

export const userLogin = (params: { username: string; password: string }) => defHttp.post({ url: apiEnum.login, params });
