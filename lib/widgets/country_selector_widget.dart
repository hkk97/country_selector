import 'package:country_selector/const/country.dart';
import 'package:country_selector/const/enum.dart';
import 'package:country_selector/data/coutnry_list.dart';
import 'package:country_selector/util/text_util.dart';
import 'package:country_selector/widgets/country_card_widget.dart';
import 'package:flutter/material.dart';

class CountrySelectorWidget extends StatefulWidget {
  final PreferredSizeWidget? customAppBar;
  final double bottomAppBarHeight;
  final EdgeInsetsGeometry continueBtnPadding;

  final SelectedLocale selectedLocale;
  final bool showSelectedWidget;
  final Duration aniDuration;
  final ValueChanged<Country> onSelectedCountry;

  final String? appBarText;
  final String? searchText;
  final String? selectedCountryText;
  final String? withoutMatchText;
  final String? continueBtnText;

  final TextStyle textFieldTextStyle;
  final TextStyle? appBarTextStyle;
  final TextStyle? searchTextStyle;
  final TextStyle? selectedCountryTextStyle;
  final TextStyle? withoutMatchTextStyle;
  final TextStyle? continueBtnTextStyle;

  final Color focusedBorderColor;
  final Color selectedCardColor;
  final Color continueBtnBgColor;
  final Color continueBtnOverlayColor;

  final BorderRadius borderRadius;
  final BorderRadius continueBtnRadius;

  const CountrySelectorWidget({
    super.key,
    this.customAppBar,
    this.bottomAppBarHeight = 75,
    this.continueBtnPadding = const EdgeInsets.symmetric(vertical: 13.5),
    this.selectedLocale = SelectedLocale.en,
    this.showSelectedWidget = true,
    this.aniDuration = const Duration(seconds: 1),
    required this.onSelectedCountry,
    this.appBarText,
    this.searchText,
    this.selectedCountryText,
    this.withoutMatchText,
    this.continueBtnText,
    this.textFieldTextStyle = const TextStyle(color: Colors.black87),
    this.appBarTextStyle = const TextStyle(
      fontWeight: FontWeight.bold,
      color: Colors.black,
    ),
    this.searchTextStyle,
    this.selectedCountryTextStyle =
        const TextStyle(fontWeight: FontWeight.bold),
    this.withoutMatchTextStyle = const TextStyle(
      color: Colors.black,
      fontWeight: FontWeight.bold,
    ),
    this.continueBtnTextStyle = const TextStyle(
      color: Colors.black,
      letterSpacing: 1.185,
    ),
    this.focusedBorderColor = Colors.black12,
    this.selectedCardColor = Colors.amber,
    this.continueBtnBgColor = Colors.amber,
    this.continueBtnOverlayColor = Colors.white,
    this.borderRadius = const BorderRadius.all(Radius.circular(18.5)),
    this.continueBtnRadius = const BorderRadius.all(
      Radius.circular(
        22.5,
      ),
    ),
  });

  @override
  CountrySelectorWidgetState createState() => CountrySelectorWidgetState();
}

class CountrySelectorWidgetState extends State<CountrySelectorWidget> {
  late ScrollController _scrollController;
  late List<Country> _countries;
  late ValueNotifier<List<Country>?> _countriesNotifi;
  late ValueNotifier<Country?> _selectedCountryNotifi;
  late TextUtil _textUtil;

  @override
  void initState() {
    super.initState();
    _textUtil = TextUtil(selectedLocale: widget.selectedLocale);
    _scrollController = ScrollController();
    _selectedCountryNotifi = ValueNotifier(null);
    _countries = [];
    _countriesNotifi = ValueNotifier(null);
    for (int i = 0; i < countriesMap.length; i++) {
      final country = Country.fromJson(countriesMap[i]);
      _countries.add(country);
    }
    _countriesNotifi.value = _countries;
  }

  @override
  void dispose() {
    _selectedCountryNotifi.dispose();
    _countriesNotifi.dispose();
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: widget.customAppBar ??
            AppBar(
              backgroundColor: Colors.white,
              elevation: 0.0,
              centerTitle: true,
              title: Text(
                widget.appBarText ?? _textUtil.titleStr() ?? '',
                style: widget.appBarTextStyle,
              ),
            ),
        body: Container(
          color: Colors.white,
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(
                  horizontal: 25.0,
                  vertical: 12.5,
                ),
                child: SizedBox(
                  height: 50,
                  child: TextField(
                    cursorColor: Colors.black,
                    keyboardType: TextInputType.text,
                    style: widget.textFieldTextStyle,
                    cursorRadius: const Radius.circular(3.5),
                    maxLines: 1,
                    onChanged: (value) async {
                      if (value.isNotEmpty) {
                        final validCountries = _countries
                            .where((country) =>
                                country.isContains(value.toUpperCase()))
                            .toList();
                        _countriesNotifi.value =
                            validCountries.isEmpty ? null : validCountries;
                      } else {
                        _countriesNotifi.value = _countries;
                      }
                    },
                    decoration: InputDecoration(
                      isDense: false,
                      filled: true,
                      hintText:
                          widget.searchText ?? _textUtil.searchStr() ?? "",
                      prefixIcon: const Icon(
                        Icons.search,
                        color: Colors.grey,
                      ),
                      hintStyle: widget.searchTextStyle ??
                          TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Colors.grey.withOpacity(0.85),
                          ),
                      focusedBorder: OutlineInputBorder(
                        borderRadius: widget.borderRadius,
                        borderSide: BorderSide(
                          color: widget.focusedBorderColor,
                        ),
                      ),
                      enabledBorder: const OutlineInputBorder(
                        borderRadius: BorderRadius.all(Radius.circular(18.5)),
                        borderSide: BorderSide(color: Colors.transparent),
                      ),
                      contentPadding: const EdgeInsets.only(top: 13.5),
                    ),
                  ),
                ),
              ),
              widget.showSelectedWidget
                  ? ValueListenableBuilder(
                      valueListenable: _selectedCountryNotifi,
                      builder: (context, country, child) {
                        return country == null
                            ? const SizedBox()
                            : Padding(
                                padding: const EdgeInsets.only(
                                  left: 15.0,
                                  right: 25.0,
                                ),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.symmetric(
                                        vertical: 5.0,
                                      ),
                                      child: Text(
                                        widget.selectedCountryText ??
                                            _textUtil.selectedCountryStr() ??
                                            "",
                                        style: widget.selectedCountryTextStyle,
                                      ),
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.symmetric(
                                        vertical: 5.0,
                                      ),
                                      child: Container(
                                        height: 1.30,
                                        width:
                                            MediaQuery.of(context).size.width,
                                        color: Colors.grey.shade300,
                                      ),
                                    ),
                                    CountryCardWidget(
                                      aniDuration: widget.aniDuration,
                                      selectedColor: widget.selectedCardColor,
                                      selectedLocale: widget.selectedLocale,
                                      country: country,
                                      isSelected: true,
                                      onClickSelected: () {
                                        _selectedCountryNotifi.value = null;
                                      },
                                    ),
                                  ],
                                ),
                              );
                      },
                    )
                  : const SizedBox(),
              Expanded(
                child: ValueListenableBuilder(
                  valueListenable: _countriesNotifi,
                  builder: (context, countries, child) {
                    if (countries == null) {
                      return Center(
                        child: SizedBox(
                          child: Text(
                            widget.withoutMatchText ??
                                _textUtil.withoutMatchStr() ??
                                '',
                            style: widget.withoutMatchTextStyle,
                          ),
                        ),
                      );
                    } else {
                      return Padding(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 15.0,
                        ),
                        child: Scrollbar(
                          thumbVisibility: true,
                          controller: _scrollController,
                          child: Padding(
                            padding: const EdgeInsets.only(
                              right: 10.0,
                            ),
                            child: ValueListenableBuilder<Country?>(
                                valueListenable: _selectedCountryNotifi,
                                builder: (
                                  context,
                                  country,
                                  child,
                                ) {
                                  return ListView.custom(
                                    shrinkWrap: true,
                                    controller: _scrollController,
                                    physics:
                                        const AlwaysScrollableScrollPhysics(
                                      parent: BouncingScrollPhysics(),
                                    ),
                                    cacheExtent: 15.0,
                                    childrenDelegate:
                                        SliverChildBuilderDelegate(
                                      (context, index) {
                                        return CountryCardWidget(
                                          aniDuration: widget.aniDuration,
                                          selectedColor:
                                              widget.selectedCardColor,
                                          selectedLocale: widget.selectedLocale,
                                          country: countries[index],
                                          isSelected: country == null
                                              ? false
                                              : country.code ==
                                                  countries[index].code,
                                          onClickSelected: () {
                                            if (_selectedCountryNotifi.value ==
                                                countries[index]) {
                                              _selectedCountryNotifi.value =
                                                  null;
                                            } else {
                                              _selectedCountryNotifi.value =
                                                  countries[index];
                                            }
                                          },
                                        );
                                      },
                                      childCount: countries.length,
                                      findChildIndexCallback: (key) {
                                        final valueKey =
                                            key as ValueKey<String>;
                                        final val = countries.indexWhere(
                                            (element) =>
                                                element.code == valueKey.value);
                                        return countries.length - 1 - val;
                                      },
                                    ),
                                  );
                                }),
                          ),
                        ),
                      );
                    }
                  },
                ),
              ),
              SizedBox(
                height: widget.bottomAppBarHeight,
                child: Padding(
                  padding: widget.continueBtnPadding,
                  child: ValueListenableBuilder<Country?>(
                    valueListenable: _selectedCountryNotifi,
                    builder: (context, isSelected, child) {
                      return Opacity(
                        opacity: isSelected != null ? 1.0 : 0.65,
                        child: IgnorePointer(
                          ignoring: isSelected != null ? false : true,
                          child: ElevatedButton(
                            style: ButtonStyle(
                              overlayColor: MaterialStateProperty.all<Color>(
                                widget.continueBtnOverlayColor,
                              ),
                              backgroundColor: MaterialStateProperty.all<Color>(
                                widget.continueBtnBgColor,
                              ),
                              shape: MaterialStateProperty.all(
                                RoundedRectangleBorder(
                                  borderRadius: widget.continueBtnRadius,
                                ),
                              ),
                            ),
                            onPressed: () => widget.onSelectedCountry(
                              _selectedCountryNotifi.value!,
                            ),
                            child: Padding(
                              padding: EdgeInsets.symmetric(
                                vertical: isSelected != null ? 13.5 : 10.0,
                                horizontal: isSelected != null ? 30 : 20.0,
                              ),
                              child: Text(
                                widget.continueBtnText ??
                                    _textUtil.continueStr() ??
                                    '',
                                style: widget.continueBtnTextStyle,
                              ),
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
