import 'package:country_selector/const/country.dart';
import 'package:country_selector/const/enum.dart';
import 'package:flutter/material.dart';

class CountryCardWidget extends StatefulWidget {
  final bool isSelected;
  final Country country;
  final Color selectedColor;
  final Duration aniDuration;
  final Function onClickSelected;
  final SelectedLocale selectedLocale;

  const CountryCardWidget({
    super.key,
    this.isSelected = false,
    required this.country,
    required this.selectedColor,
    required this.aniDuration,
    required this.onClickSelected,
    required this.selectedLocale,
  });
  @override
  CountryCardWidgetState createState() => CountryCardWidgetState();
}

class CountryCardWidgetState extends State<CountryCardWidget>
    with SingleTickerProviderStateMixin {
  late Animation<double> _animation;
  late AnimationController _controller;

  @override
  void initState() {
    _controller =
        AnimationController(duration: widget.aniDuration, vsync: this);
    _animation = Tween<double>(begin: 0.1, end: 1.0).animate(_controller);
    _controller.forward();
    super.initState();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  String getCountryName() {
    switch (widget.selectedLocale) {
      case SelectedLocale.zhCH:
        return widget.country.zhCH;
      case SelectedLocale.zhHK:
        return widget.country.zhHK;
      case SelectedLocale.en:
      default:
        return widget.country.en;
    }
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _animation,
      builder: (context, child) {
        return Opacity(
          opacity: _animation.value >= 0.85 ? 1 : 1 * _animation.value,
          child: child!,
        );
      },
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 3.25),
        child: GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTap: () => widget.onClickSelected(),
          child: Card(
            color: Colors.white,
            shape: RoundedRectangleBorder(
              borderRadius: const BorderRadius.all(
                Radius.circular(
                  8.5,
                ),
              ),
              side: BorderSide(
                color: widget.isSelected
                    ? widget.selectedColor
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
                                "${widget.country.flagUri}",
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
                          widget.country.code,
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
                        color: widget.isSelected
                            ? widget.selectedColor
                            : Colors.grey.shade300,
                        width: widget.isSelected ? 2 : 1.5,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
