# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Description

This React Native project is a basic mobile application designed to demonstrate a simple yet effective navigation system across four primary screens: Home, Login, Settings, and Profile. The app features a clean and intuitive layout, providing users with essential functionalities such as:

   1.Home Screen: The main dashboard that welcomes users after a successful login.
   2.Login Screen: A secure authentication interface with basic validation to ensure correct login credentials.
   3.Settings Screen: A customizable settings page featuring toggle switches for enabling or disabling various options.
   4.Profile Screen: A user profile page displaying basic information and options for profile management.

The app focuses on proper navigation flow and basic user interface elements, offering a smooth user experience. It includes limited features such as simple login validation and switch toggles, making it an ideal starting point for beginners looking to understand the fundamentals of React Native development.


### Prerequisites
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Watchman](https://facebook.github.io/watchman/) (for macOS users)
- [Android Studio](https://developer.android.com/studio) or [Xcode](https://developer.apple.com/xcode/) for iOS development

## Step 1: Install Dependency

```bash
# using npm
npm install 

# OR using Yarn
yarn start
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npx react-native start

```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 4: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Required npm packages for the project

1.@react-navigation/native
2.@react-navigation/native-stack
3.@react-navigation/drawer
4.@react-navigation/bottom-tabs
5.react-native-safe-area-context
6.react-native-paper

## TODO! :tada:

1. Error Hadling 
2. Story Book 
3. Test Cases 
4. Testing in IOS devices 

## Screenshots 

![Alt text](/asserts/screenshots/Login_page.png "Login page")
![Alt text](/asserts/screenshots/login_validation.png "Login Validation")
![Alt text](/asserts/screenshots/drawer_homepage.png "Drawer Title")
![Alt text](/asserts/screenshots/Home_page.png "Home page")
![Alt text](/asserts/screenshots/profile_page.png "Profile Page")
![Alt text](/asserts/screenshots/settings_page.png "Setting page")