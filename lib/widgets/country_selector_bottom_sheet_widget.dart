import 'package:flutter/material.dart';
import 'package:country_selector_widget/const/enum.dart';
import 'package:country_selector_widget/const/country.dart';
import 'package:country_selector_widget/widgets/country_selector_widget.dart';

Future<void> showCountrySelectorBottomSheet({
  required BuildContext context,
  double? bottomSheetHeight,
  Radius topCornerRadius = const Radius.circular(15.0),
  PreferredSizeWidget? customAppBar,
  double bottomAppBarHeight = 75,
  EdgeInsetsGeometry continueBtnPadding =
      const EdgeInsets.symmetric(vertical: 13.5),
  SelectedLocale selectedLocale = SelectedLocale.en,
  bool showSelectedWidget = true,
  Duration aniDuration = const Duration(seconds: 1),
  required ValueChanged<Country> onSelectedCountry,
  String? appBarText,
  String? searchText,
  String? selectedCountryText,
  String? withoutMatchText,
  String? continueBtnText,
  TextStyle textFieldTextStyle = const TextStyle(color: Colors.black87),
  TextStyle? appBarTextStyle = const TextStyle(
    fontWeight: FontWeight.bold,
    color: Colors.black,
  ),
  TextStyle? searchTextStyle,
  TextStyle? selectedCountryTextStyle =
      const TextStyle(fontWeight: FontWeight.bold),
  TextStyle? withoutMatchTextStyle = const TextStyle(
    color: Colors.black,
    fontWeight: FontWeight.bold,
  ),
  TextStyle? continueBtnTextStyle = const TextStyle(
    color: Colors.black,
    letterSpacing: 1.185,
  ),
  Color focusedBorderColor = Colors.black12,
  Color selectedCardColor = Colors.amber,
  Color continueBtnBgColor = Colors.amber,
  Color continueBtnOverlayColor = Colors.white,
  BorderRadius borderRadius = const BorderRadius.all(Radius.circular(18.5)),
  BorderRadius continueBtnRadius = const BorderRadius.all(
    Radius.circular(
      22.5,
    ),
  ),
}) async {
  await showModalBottomSheet(
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    context: context,
    builder: (context) => ClipRRect(
      borderRadius: BorderRadius.only(
        topLeft: topCornerRadius,
        topRight: topCornerRadius,
      ),
      child: SizedBox(
        height: bottomSheetHeight ?? MediaQuery.of(context).size.height * 0.8,
        child: CountrySelectorWidget(
          customAppBar: customAppBar,
          bottomAppBarHeight: bottomAppBarHeight,
          continueBtnPadding: continueBtnPadding,
          selectedLocale: selectedLocale,
          showSelectedWidget: showSelectedWidget,
          aniDuration: aniDuration,
          onSelectedCountry: (country) {
            Navigator.pop(context);
            onSelectedCountry(country);
          },
          appBarText: appBarText,
          searchText: searchText,
          selectedCountryText: selectedCountryText,
          withoutMatchText: withoutMatchText,
          continueBtnText: continueBtnText,
          textFieldTextStyle: textFieldTextStyle,
          appBarTextStyle: appBarTextStyle,
          searchTextStyle: searchTextStyle,
          selectedCountryTextStyle: selectedCountryTextStyle,
          withoutMatchTextStyle: withoutMatchTextStyle,
          continueBtnTextStyle: continueBtnTextStyle,
          focusedBorderColor: focusedBorderColor,
          selectedCardColor: selectedCardColor,
          continueBtnBgColor: continueBtnBgColor,
          continueBtnOverlayColor: continueBtnOverlayColor,
          borderRadius: borderRadius,
          continueBtnRadius: continueBtnRadius,
        ),
      ),
    ),
  );
}
