<h1 align='center'>Google Tag Manager service</h1>

<h2 align='center'>Browser-side container loader</h2>

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

This is a browser-side loader for a Google Tag Manager container and a helper for
pushing data-layer events. It is not a consent manager, a server-side analytics
client, or a replacement for configuring tags in GTM.

Run this once in your browser entry point, after the document body exists and your
application has obtained any required consent. Reuse the same instance for the
page lifetime. The package exports `GoogleTagManager` by name, not as a default.

<!-- docs-test:example -->
```typescript
import { GoogleTagManager } from '@lomray/google-tag-manager';

const manager = new GoogleTagManager();
window.dataLayer = window.dataLayer || [];
manager.init({ gtmId: 'GTM-EXAMPLE', initDelay: 0 });
manager.pushEvent({ event: 'example_ready' });
```

Replace `GTM-EXAMPLE` with your container ID. Initializing `dataLayer` before
`pushEvent` lets GTM consume queued events when its script loads. Without a data
layer, `pushEvent` does nothing; it does not queue events itself.

Initialization is guarded per instance, not per page. Do not create a new manager
on every render. There is no destroy/unload API, so this loader is not sufficient
on its own for a consent-revocation flow. With a positive `initDelay`, initialization
waits for DOMContentLoaded or user interaction; use the default `0` for immediate
insertion after consent. `skipNoscript: true` skips the generated noscript element
if your application supplies it separately.

The example is checked against release 1.0.4 in a simulated DOM. That check does
not load Google's script or prove event delivery to a GTM container.

## Bugs and feature requests

Bug or a feature request, [please open a new issue](https://github.com/Lomray-Software/google-tag-manager/issues/new).

## License
Made with 💚

Published under [MIT License](./LICENSE).
