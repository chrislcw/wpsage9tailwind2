## Theme development

- Install node version ^15
- Run `nvm use 15`
- Run `composer install` from the theme directory to install dependencies
- Run `yarn` from the theme directory to install dependencies
- Update `resources/assets/config.json` settings:
  - `devUrl` should reflect your local development hostname
  - `publicPath` should reflect your WordPress folder structure (`/wp-content/themes/sage` for non-[Bedrock](https://roots.io/bedrock/) installs)

### Build commands

- `yarn start` — Compile assets when file changes are made, start Browsersync session
- `yarn build` — Compile and optimize the files in your assets directory
- `yarn build:production` — Compile assets for production
