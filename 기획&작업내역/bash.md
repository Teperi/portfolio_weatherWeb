# bash 작업내역 저장

## 2019.04.30

- 설치작업 진행
  - create-react-app
  - react-router-dom
  - react-icons
  - node-sass

```bash
Teperi@DESKTOP-EAT2G59 MINGW64 ~/Github/portfolio_weatherWeb (master)
$ yarn create react-app weather-web
yarn create v1.15.2








[4/4] Building fresh packages...

success Installed "create-react-app@3.0.0" with binaries:
      - create-react-app

Creating a new React app in C:\Users\Teperi\Github\portfolio_weatherWeb\weather-web.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.15.2
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.8: The platform "win32" is incompatible with this module.
info "fsevents@1.2.8" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@2.0.6: The platform "win32" is incompatible with this module.
info "fsevents@2.0.6" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "react-scripts > @typescript-eslint/eslint-plugin@1.6.0" has unmet peer dependency "typescript@*".
warning "react-scripts > @typescript-eslint/parser@1.6.0" has unmet peer dependency "typescript@*".
warning "react-scripts > @typescript-eslint/eslint-plugin > @typescript-eslint/typescript-estree@1.6.0" has unmet peer dependency "typescript@*".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.10.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 19 new dependencies.
info Direct dependencies
├─ react-dom@16.8.6
├─ react-scripts@3.0.0
└─ react@16.8.6
info All dependencies
├─ @babel/plugin-proposal-class-properties@7.4.0
├─ @babel/plugin-proposal-decorators@7.4.0
├─ @babel/plugin-transform-flow-strip-types@7.4.0
├─ @babel/plugin-transform-runtime@7.4.3
├─ @babel/plugin-transform-typescript@7.4.4
├─ @babel/preset-typescript@7.3.3
├─ babel-plugin-macros@2.5.1
├─ babel-plugin-named-asset-import@0.3.2
├─ babel-preset-react-app@8.0.0
├─ confusing-browser-globals@1.0.7
├─ eslint-config-react-app@4.0.0
├─ fork-ts-checker-webpack-plugin@1.0.1
├─ inquirer@6.2.2
├─ react-app-polyfill@1.0.0
├─ react-dev-utils@9.0.0
├─ react-dom@16.8.6
├─ react-error-overlay@5.1.5
├─ react-scripts@3.0.0
└─ react@16.8.6
Done in 17.03s.

Success! Created weather-web at C:\Users\Teperi\Github\portfolio_weatherWeb\weather-web
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd weather-web
  yarn start

Happy hacking!
Done in 26.16s.

Teperi@DESKTOP-EAT2G59 MINGW64 ~/Github/portfolio_weatherWeb (master)
$ cd weather-web/

Teperi@DESKTOP-EAT2G59 MINGW64 ~/Github/portfolio_weatherWeb/weather-web (master)
$ yarn add react-router-dom
yarn add v1.15.2








info fsevents@2.0.6: The platform "win32" is incompatible with this module.
info "fsevents@2.0.6" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.8: The platform "win32" is incompatible with this module.
info "fsevents@1.2.8" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "react-scripts > @typescript-eslint/eslint-plugin@1.6.0" has unmet peer dependency "typescript@*".
warning "react-scripts > @typescript-eslint/parser@1.6.0" has unmet peer dependency "typescript@*".
warning "react-scripts > @typescript-eslint/eslint-plugin > @typescript-eslint/typescript-estree@1.6.0" has unmet peer dependency "typescript@*".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.10.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev".
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 15 new dependencies.
info Direct dependencies
├─ react-dom@16.8.6
├─ react-router-dom@5.0.0
└─ react@16.8.6
info All dependencies
├─ create-react-context@0.2.3
├─ encoding@0.1.12
├─ fbjs@0.8.17
├─ gud@1.0.0
├─ hoist-non-react-statics@3.3.0
├─ isomorphic-fetch@2.2.1
├─ node-fetch@1.7.3
├─ path-to-regexp@1.7.0
├─ react-dom@16.8.6
├─ react-router-dom@5.0.0
├─ react-router@5.0.0
├─ react@16.8.6
├─ resolve-pathname@2.2.0
├─ ua-parser-js@0.7.19
└─ value-equal@0.4.0
Done in 5.01s.

Teperi@DESKTOP-EAT2G59 MINGW64 ~/Github/portfolio_weatherWeb/weather-web (master)
$ yarn add react-icons
yarn add v1.15.2








info fsevents@2.0.6: The platform "win32" is incompatible with this module.
info "fsevents@2.0.6" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.8: The platform "win32" is incompatible with this module.
info "fsevents@1.2.8" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "react-scripts > @typescript-eslint/eslint-plugin@1.6.0" has unmet peer dependency "typescript@*".
warning "react-scripts > @typescript-eslint/parser@1.6.0" has unmet peer dependency "typescript@*".
warning "react-scripts > @typescript-eslint/eslint-plugin > @typescript-eslint/typescript-estree@1.6.0" has unmet peer dependency "typescript@*".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.10.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev".
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ react-icons@3.6.1
info All dependencies
└─ react-icons@3.6.1
Done in 5.93s.

Teperi@DESKTOP-EAT2G59 MINGW64 ~/Github/portfolio_weatherWeb/weather-web (master)
$ yarn add node-sass
yarn add v1.15.2








info fsevents@2.0.6: The platform "win32" is incompatible with this module.
info "fsevents@2.0.6" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.8: The platform "win32" is incompatible with this module.
info "fsevents@1.2.8" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "react-scripts > @typescript-eslint/eslint-plugin@1.6.0" has unmet peer dependency "typescript@*".
warning "react-scripts > @typescript-eslint/parser@1.6.0" has unmet peer dependency "typescript@*".
warning "react-scripts > @typescript-eslint/eslint-plugin > @typescript-eslint/typescript-estree@1.6.0" has unmet peer dependency "typescript@*".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.10.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 33 new dependencies.
info Direct dependencies
└─ node-sass@4.12.0
info All dependencies
├─ amdefine@1.0.1
├─ array-find-index@1.0.2
├─ async-foreach@0.1.3
├─ block-stream@0.0.9
├─ camelcase-keys@2.1.0
├─ currently-unhandled@0.4.1
├─ fstream@1.0.11
├─ gaze@1.1.3
├─ globule@1.2.1
├─ in-publish@2.0.0
├─ indent-string@2.1.0
├─ is-finite@1.0.2
├─ is-utf8@0.2.1
├─ js-base64@2.5.1
├─ load-json-file@1.1.0
├─ loud-rejection@1.6.0
├─ lru-cache@4.1.5
├─ map-obj@1.0.1
├─ meow@3.7.0
├─ node-gyp@3.8.0
├─ node-sass@4.12.0
├─ nopt@3.0.6
├─ pseudomap@1.0.2
├─ read-pkg@1.1.0
├─ redent@1.0.0
├─ repeating@2.0.1
├─ sass-graph@2.2.4
├─ scss-tokenizer@0.2.3
├─ stdout-stream@1.4.1
├─ strip-indent@1.0.1
├─ tar@2.2.1
├─ trim-newlines@1.0.0
└─ true-case-path@1.0.3
Done in 11.44s.
```