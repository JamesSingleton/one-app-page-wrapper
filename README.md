# One App Page Wrapper

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/JamesSingleton/one-app-page-wrapper#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/JamesSingleton/one-app-page-wrapper/graphs/commit-activity)
[![License: Apache--2.0](https://img.shields.io/github/license/JamesSingleton/one-app-page-wrapper)](https://github.com/JamesSingleton/one-app-page-wrapper/blob/master/LICENSE)
[![Twitter: Design\_\_Pattern](https://img.shields.io/twitter/follow/Design\_\_Pattern.svg?style=social)](https://twitter.com/Design\_\_Pattern)

> A page wrapper module to wrap your routes and pass a header and footer into.

## 🚀 Usage

This module is meant to be used with [one-app](https://github.com/americanexpress/one-app) and [holocron-module-route](https://github.com/americanexpress/holocron/tree/master/packages/holocron-module-route).

```jsx
import React from 'react';
import ModuleRoute from 'holocron-module-route';

const childRoutes = () => ([
  <ModuleRoute moduleName="one-app-page-wrapper">
    <ModuleRoute path="/" moduleName="my-cool-module" />
  </ModuleRoute>,
]);

export default childRoutes;
```

### Available Props

#### Header (required)

This allows you to pass in your own header. It can either be an existing module in your module registry, or it can be a component.

```jsx
import React from 'react';
import ModuleRoute from 'holocron-module-route';

const childRoutes = () => ([
  <ModuleRoute moduleName="one-app-page-wrapper" header="my-cool-header-module">
    <ModuleRoute path="/" moduleName="my-cool-module" />
  </ModuleRoute>,
]);

export default childRoutes;
```

```jsx
import React from 'react';
import ModuleRoute from 'holocron-module-route';

const childRoutes = () => ([
  <ModuleRoute moduleName="one-app-page-wrapper" header={()=><div>My Cool Header</div>}>
    <ModuleRoute path="/" moduleName="my-cool-module" />
  </ModuleRoute>,
]);

export default childRoutes;
```

#### Footer (required)

This allows you to pass in your own footer. It can either be an existing module in your module registry, or it can be a component.

```jsx
import React from 'react';
import ModuleRoute from 'holocron-module-route';

const childRoutes = () => ([
  <ModuleRoute moduleName="one-app-page-wrapper" footer="my-cool-footer-module">
    <ModuleRoute path="/" moduleName="my-cool-module" />
  </ModuleRoute>,
]);

export default childRoutes;
```

```jsx
import React from 'react';
import ModuleRoute from 'holocron-module-route';

const childRoutes = () => ([
  <ModuleRoute moduleName="one-app-page-wrapper" footer={()=><div>My Cool Footer</div>}>
    <ModuleRoute path="/" moduleName="my-cool-module" />
  </ModuleRoute>,
]);

export default childRoutes;
```

#### Classname (optional)

If you would like to give the div surrounding the header, footer and the children a classname, pass this in.

```jsx
import React from 'react';
import ModuleRoute from 'holocron-module-route';

const childRoutes = () => ([
  <ModuleRoute moduleName="one-app-page-wrapper" classname="myClassName">
    <ModuleRoute path="/" moduleName="my-cool-module" />
  </ModuleRoute>,
]);

export default childRoutes;
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/JamesSingleton/one-app-page-wrapper/issues). You can also take a look at the [contributing guide](https://github.com/JamesSingleton/one-app-page-wrapper/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 🗝️ License

Copyright © 2020 [James Singleton](https://github.com/JamesSingleton).

This project is [Apache 2.0](https://github.com/JamesSingleton/one-app-page-wrapper/blob/master/LICENSE) licensed.

## 🗣️ Code of Conduct

Please read [the full text](https://github.com/JamesSingleton/one-app-page-wrapper/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated. By participating, you are expected to honor these guidelines.
