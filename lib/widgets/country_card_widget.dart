import 'package:country_selector/const/country.dart';
import 'package:country_selector/const/enum.dart';
import 'package:flutter/material.dart';

class CountryCardWidget extends StatelessWidget {
  final bool isSelected;
  final SelectedLocale selectedLocale;
  final Country country;
  final Function onClickSelected;
  final Color selectedColor;
  const CountryCardWidget({
    super.key,
    required this.selectedLocale,
    required this.country,
    required this.onClickSelected,
    this.isSelected = false,
    this.selectedColor = Colors.amber,
  });

  String getCountryName() {
    switch (selectedLocale) {
      case SelectedLocale.zhCH:
        return country.zhCH;
      case SelectedLocale.zhHK:
        return country.zhHK;
      case SelectedLocale.en:
      default:
        return country.en;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 3.25),
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: () => onClickSelected(),
        child: Card(
          color: Colors.white,
          shape: RoundedRectangleBorder(
            borderRadius: const BorderRadius.all(
              Radius.circular(
                8.5,
              ),
            ),
            side: BorderSide(
              color: isSelected
                  ? selectedColor
                  : const Color.fromARGB(255, 247, 244, 244),
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: 15.0,
              vertical: 10.0,
            ),
            child: Row(
              children: [
                Expanded(
                  child: Wrap(
                    spacing: 10.0,
                    runSpacing: 15.0,
                    crossAxisAlignment: WrapCrossAlignment.center,
                    children: [
                      Container(
                        width: 35,
                        height: 30,
                        decoration: BoxDecoration(
                          image: DecorationImage(
                            image: Image.asset(
                              "${country.flagUri}",
                              package: "country_selector",
                              fit: BoxFit.fill,
                            ).image,
                          ),
                          border: Border.all(
                            color: Colors.grey.shade200,
                          ),
                        ),
                      ),
                      Text(
                        country.code,
                        style: const TextStyle(
                          color: Colors.grey,
                          fontWeight: FontWeight.bold,
                          letterSpacing: 1.15,
                        ),
                      ),
                      Text(
                        getCountryName(),
                        maxLines: 2,
                        style: const TextStyle(
                          color: Colors.black,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  width: 22.5,
                  height: 22.5,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    border: Border.all(
                      color: isSelected ? selectedColor : Colors.grey.shade300,
                      width: isSelected ? 2 : 1.5,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
