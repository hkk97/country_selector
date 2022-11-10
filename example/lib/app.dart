import 'package:country_selector/widgets/country_selector_widget.dart';
import 'package:flutter/material.dart';

class App extends StatefulWidget {
  const App({super.key, required this.title});
  final String title;

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  @override
  Widget build(BuildContext context) {
    return Theme(
      data: ThemeData(
        colorScheme: ThemeData().colorScheme.copyWith(
              primary: Colors.amber,
            ),
      ),
      child: const CountrySelectorWidget(),
    );
  }
}
