# React Component Template

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

The repository can be used as a template to create a library of React component(s). The library comes out of the box with typescript, storybook, testing-library/react, and styled-components configured.

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

```sh
npm install
```

## Usage

You will need to build the repository in order to use the components that it exports.

```sh
npm build
```

The bundle will be generated in `/dist` by default.

### Storybook

This project comes with storybook installed and configured in `/.storybook` by default.

The storybook can be started for local development by running the following command:

```sh
npm run start:storybook
```

If you want to build a static copy of the storybook to be hosted, run the following command:

```sh
npm run build:storybook
```

## Tests

To run tests, run the following command:

```sh
npm test
```

Coverage will be generated in `/coverage` by default.

## License

This project is licensed under the MIT license.

## Contributing

Pull Requests are welcome for this project, but please explain what you're trying to accomplish in the Request.

## Questions

If you have any questions about the repo, open an issue.

You can find more of my work at [dev-jdb](https://github.com/dev-jdb/).
