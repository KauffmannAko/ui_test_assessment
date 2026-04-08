import 'dotenv/config';

const env = {
  baseUrl: process.env.BASE_URL || 'https://qa-assessment.pages.dev',
  environment: process.env.ENV || 'staging',
  headless: process.env.HEADLESS !== 'false',
};

export default env;
