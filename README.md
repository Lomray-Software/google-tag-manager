<h1 align='center'>Google Tag Manager service</h1>

<h2 align='center'>Supports any popular frontend framework</h2>

<p align="center">
  <img src="https://sonarcloud.io/api/project_badges/measure?project=google-tag-manager&metric=reliability_rating" alt="reliability">
  <img src="https://sonarcloud.io/api/project_badges/measure?project=google-tag-manager&metric=security_rating" alt="Security Rating">
  <img src="https://sonarcloud.io/api/project_badges/measure?project=google-tag-manager&metric=sqale_rating" alt="Maintainability Rating">
  <img src="https://sonarcloud.io/api/project_badges/measure?project=google-tag-manager&metric=vulnerabilities" alt="Vulnerabilities">
  <img src="https://sonarcloud.io/api/project_badges/measure?project=google-tag-manager&metric=bugs" alt="Bugs">
  <img src="https://sonarcloud.io/api/project_badges/measure?project=google-tag-manager&metric=ncloc" alt="Lines of Code">
  <img src="https://sonarcloud.io/api/project_badges/measure?project=google-tag-manager&metric=coverage" alt="code coverage">
  <img src="https://img.shields.io/npm/v/@lomray/google-tag-manager?label=semantic%20release&logo=semantic-release" alt="semantic version">
</p>

## Table of contents
- [Getting started](#getting-started)
- [How to use](#how-to-use)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [License](#license)

## Getting started

The package is distributed using [npm](https://www.npmjs.com/), the node package manager.

```
npm i --save @lomray/google-tag-manager
```

## How to use
```typescript
import GoogleTagManager from '@lomray/google-tag-manager';

const manager = new GoogleTagManager();

useEffect(() => {
  manager.init({ gtmId: GTM_ID });
}, []);


const onButtonClick = () => {
  manager.pushEvent({ my: 'data' });
}

```

## Bugs and feature requests

Bug or a feature request, [please open a new issue](https://github.com/Lomray-Software/google-tag-manager/issues/new).

## License
Made with 💚

Published under [MIT License](./LICENSE).
