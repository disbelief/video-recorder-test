This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and includes
a fresh install of [Capacitor](https://capacitor.ionicframework.com/docs/) (v2.1.1).

It is intended to be used as an example app for testing the [capacitor-video-recorder](https://github.com/TeamHive/capacitor-video-recorder) plugin. **Video recording is currently not working on Android**

## Setup:

First time setup:
```
yarn install
yarn build
yarn cap sync
yarn cap open android|ios
```

Browser-based development:
```
yarn start
```

After any JS code change:
```
yarn build-native
```

## All Scripts:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn build-native`

Runs the `build` script followed by `yarn cap copy` to copy the compiled code into the native apps.

