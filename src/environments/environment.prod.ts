// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  serverUrl: 'http://ohanadaily.com:8080',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR']
};
