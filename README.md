# Country Selector

This Country Selector UI Library written by Dart and Fluter and supports three locales with country's name, achieves lazy loading, and country card animation on listview. This UI Library provides CountrySelectorWidget and showCountrySelectorBottomSheet to fulfill the needed usage.

<p align="center">
     <a href="https://github.com/flutter/flutter/tree/3.3.8" alt="Flutter">
        <img src="https://img.shields.io/badge/Flutter-v3.3.8 (stable)-4BC51D.svg?style=flat" /></a>
     <a alt="Dart">
        <img src="https://img.shields.io/badge/Dart-v2.18.4 (stable)-4BC51D.svg?style=flat" /></a>
     <a alt="DevTools">
        <img src="https://img.shields.io/badge/DevTools-v2.15.0 (stable)-4BC51D.svg?style=flat" /></a>
     <a alt="VS Code">
        <img src="https://img.shields.io/badge/VS Code-v1.68.1-4BC51D.svg?style=flat" /></a>
</p>

|             | Android | iOS  | Linux | macOS  | Web | Windows     |
|-------------|---------|------|-------|--------|-----|-------------|
| **Support** | Any | Any | Any   | Any | Any | Any         |

## Usage
To use this plugin, add `country_selector` as a [dependency in your pubspec.yaml file].

### Examples
Here are the examples that show you how to use the CountrySelectorWidget and showCountrySelectorBottomSheet.

#### Usage of CountrySelectorWidget
- the default locale is SelectedLocale.en, you would change to SelectedLocale.zhCH or SelectedLocale.zhHK
- once the country is selected and clicked the continue btn it will trigger the valueChangedCallback called onSelectedCountry and return the Country
```dart
CountrySelectorWidget(
    onSelectedCountry: (Country country) async {
        // selected country callback 
    },
),
```

####  Usage of showCountrySelectorBottomSheet
- the different between CountrySelectorWidget and showCountrySelectorBottomSheet are showCountrySelectorBottomSheet is wrap with the showModalBottomSheet
- showCountrySelectorBottomSheet will also do the Navigator.pop(context) for you once the continue button are clicked
```dart
showCountrySelectorBottomSheet(
    context: context,
    onSelectedCountry: (Country country) async {
        // selected country callback 
    };
```

## Dmonstraction of CountrySelectorWidget
!["CountrySelectorWidget - SelectedLocale.zhCH"](example/demo_gifs/countrySelectorWidget_demo.gif)

## Dmonstraction of showCountrySelectorBottomSheet
!["showCountrySelectorBottomSheet - SelectedLocale.en"](example/demo_gifs/showCountrySelectorBottomSheet.gif)
