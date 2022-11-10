import 'package:flutter/material.dart';
import 'package:country_selector/country_selector.dart';

class App extends StatelessWidget {
  const App({super.key, required this.title});
  final String title;

  Future<void> showSuccessDialog(
    BuildContext context,
    Country country,
  ) async {
    await showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text(
            '[onSelectedCountry]',
            style: TextStyle(
              fontWeight: FontWeight.bold,
            ),
          ),
          content: Text('${country.toJson()}'),
          actions: <Widget>[
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text(
                'Close',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        centerTitle: true,
        title: const Text(
          "Country Selector Widget",
          style: TextStyle(
            color: Colors.black,
          ),
        ),
        actions: [
          GestureDetector(
            onTap: () => showCountrySelectorBottomSheet(
              context: context,
              onSelectedCountry: (Country country) async =>
                  await showSuccessDialog(
                context,
                country,
              ),
            ),
            child: Center(
              child: Container(
                margin: const EdgeInsets.symmetric(horizontal: 10.0),
                padding: const EdgeInsets.symmetric(
                  vertical: 10.0,
                  horizontal: 10.5,
                ),
                color: Colors.grey.shade200,
                child: const Text(
                  "showBottomSheet",
                  style: TextStyle(
                    color: Colors.black,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
          )
        ],
      ),
      body: Theme(
        data: ThemeData(
          colorScheme: ThemeData().colorScheme.copyWith(
                primary: Colors.amber,
              ),
        ),
        child: CountrySelectorWidget(
          selectedLocale: SelectedLocale.zhCH,
          onSelectedCountry: (Country country) async => await showSuccessDialog(
            context,
            country,
          ),
        ),
      ),
    );
  }
}
