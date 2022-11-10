class Country {
  final String zhCH;
  final String zhHK;
  final String en;
  final String dialCode;
  final String code;
  final String? flagUri;

  Country({
    required this.zhCH,
    required this.zhHK,
    required this.en,
    required this.dialCode,
    required this.code,
    required this.flagUri,
  });

  bool isContains(String pattern) =>
      "${zhCH.toUpperCase()} ${en.toUpperCase()} ${en.toUpperCase()} $dialCode ${code.toUpperCase()}"
          .contains(pattern);

  Map<String, dynamic> toJson() => {
        "zhCH": zhCH,
        "zhHK": zhHK,
        "en": en,
        "dialCode": dialCode,
        "code": code,
      };

  factory Country.fromJson(Map<String, dynamic> json) => Country(
        zhCH: json["zhCH"],
        zhHK: json["zhHK"],
        en: json["en"],
        dialCode: json["dialCode"],
        code: json["code"],
        flagUri: json['code'] != null
            ? 'assets/flags/${json['code'].toLowerCase()}.webp'
            : null,
      );
}
