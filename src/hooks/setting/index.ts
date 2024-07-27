export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // 其他模块请求接口
  apiOtherUrl?: string;
  domainUrl: string;
  // Upload url (作废)
  uploadUrl?: string;
  casBaseUrl?: string;
  // onlineview url
  viewUrl?: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
  loginEnv?: string;
}

import { getAppEnvConfig } from '/@/utils/env';

export const useGlobSetting = (): Readonly<GlobConfig> => {
  const { VITE_GLOB_APP_TITLE, VITE_GLOB_API_URL, VITE_OTHER_API_URL, VITE_GLOB_APP_SHORT_NAME, VITE_GLOB_API_URL_PREFIX, VITE_GLOB_DOMAIN_URL, VITE_GLOB_ONLINE_VIEW_URL, VITE_GLOB_LOGIN_ENV } =
    getAppEnvConfig();

  if (!/[a-zA-Z\_]*/.test(VITE_GLOB_APP_SHORT_NAME)) {
    console.warn(`--VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.`);
  }

  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    domainUrl: VITE_GLOB_DOMAIN_URL,
    apiUrl: VITE_GLOB_API_URL,
    apiOtherUrl: VITE_OTHER_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    uploadUrl: VITE_GLOB_DOMAIN_URL,
    viewUrl: VITE_GLOB_ONLINE_VIEW_URL,
    loginEnv: VITE_GLOB_LOGIN_ENV,
  };
  (window as any)._CONFIG['domianURL'] = VITE_GLOB_DOMAIN_URL;
  return glob as Readonly<GlobConfig>;
};
