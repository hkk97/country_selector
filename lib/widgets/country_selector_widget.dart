import 'package:country_selector/const/country.dart';
import 'package:country_selector/const/enum.dart';
import 'package:country_selector/data/coutnry_list.dart';
import 'package:country_selector/widgets/country_card_widget.dart';
import 'package:flutter/material.dart';

class CountrySelectorWidget extends StatefulWidget {
  final SelectedLocale selectedLocale;
  final PreferredSizeWidget? customAppBar;
  final Color focusedBorderColor;
  final BorderRadius borderRadius;
  final TextStyle textStyle;
  final double bottomAppBarHeight;
  final EdgeInsetsGeometry continueBtnPadding;
  final Color continueBtnOverlayColor;
  final Color continueBtnBgColor;
  final String continueBtnText;
  final BorderRadius continueBtnRadius;
  final TextStyle continueTextStyle;
  const CountrySelectorWidget({
    super.key,
    this.customAppBar,
    this.textStyle = const TextStyle(color: Colors.black87),
    this.focusedBorderColor = Colors.black12,
    this.bottomAppBarHeight = 75,
    this.continueBtnOverlayColor = Colors.white,
    this.continueBtnBgColor = Colors.amber,
    this.continueBtnText = "Continue",
    this.selectedLocale = SelectedLocale.en,
    this.continueTextStyle =
        const TextStyle(color: Colors.black, letterSpacing: 1.185),
    this.continueBtnRadius = const BorderRadius.all(
      Radius.circular(
        22.5,
      ),
    ),
    this.continueBtnPadding = const EdgeInsets.symmetric(vertical: 13.5),
    this.borderRadius = const BorderRadius.all(Radius.circular(18.5)),
  });

  @override
  CountrySelectorWidgetState createState() => CountrySelectorWidgetState();
}

class CountrySelectorWidgetState extends State<CountrySelectorWidget> {
  late ScrollController _scrollController;
  late List<Country> _countries;
  late List<String> _countriesStr;
  late ValueNotifier<List<Country>?> _countriesNotifi;
  late ValueNotifier<Country?> _selectedCountryNotifi;

  @override
  void initState() {
    super.initState();
    _scrollController = ScrollController();
    _selectedCountryNotifi = ValueNotifier(null);
    _countries = [];
    _countriesStr = [];
    _countriesNotifi = ValueNotifier(null);
    for (int i = 0; i < countriesMap.length; i++) {
      final country = Country.fromJson(countriesMap[i]);
      _countries.add(country);
      _countriesStr.add(country.toString());
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
              title: const Text(
                "Select Your Country",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
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
                    style: widget.textStyle,
                    cursorRadius: const Radius.circular(3.5),
                    maxLines: 1,
                    onChanged: (value) async => {
                      if (value.isNotEmpty)
                        {
                          // _selectedCountryNotifi.value = true,
                        }
                    },
                    decoration: InputDecoration(
                      isDense: false,
                      filled: true,
                      hintText: "Search",
                      prefixIcon: const Icon(
                        Icons.search,
                        color: Colors.grey,
                      ),
                      hintStyle: TextStyle(
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
              Expanded(
                child: ValueListenableBuilder(
                  valueListenable: _countriesNotifi,
                  builder: (context, countries, child) {
                    if (countries == null) {
                      return const Center(
                        child: Text(
                          "does not find",
                          style: TextStyle(
                            color: Colors.black,
                            fontWeight: FontWeight.bold,
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
                            onPressed: () {},
                            child: Padding(
                              padding: EdgeInsets.symmetric(
                                vertical: isSelected != null ? 13.5 : 10.0,
                                horizontal: isSelected != null ? 30 : 20.0,
                              ),
                              child: Text(
                                widget.continueBtnText,
                                style: widget.continueTextStyle,
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
