'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ff966ab969ba381b900e61629bfb9789",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"index.html": "e81f243f6a7a3fa90bd95dd4ec5fcc80",
"/": "e81f243f6a7a3fa90bd95dd4ec5fcc80",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
"main.dart.js": "66a7a10023245318ea45a1f3474ad8fa",
"assets/AssetManifest.json": "34ba8a9d2b058bdb5f725844caabd0e9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "709aae82b5dc8f3c67faed8f1a2b4bdf",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/country_selector/assets/flags/tg.webp": "af7af095ae69b6c3b27d162f80f2b336",
"assets/packages/country_selector/assets/flags/az.webp": "e574b8da7456ab7f743419234d004538",
"assets/packages/country_selector/assets/flags/pe.webp": "0e3b515e8333bba86a37e9b4db0e1f4e",
"assets/packages/country_selector/assets/flags/kr.webp": "8da33ea726fb6e3b6e8ae58fb1054788",
"assets/packages/country_selector/assets/flags/jo.webp": "b4bc92f53fd070c51d8ddf5969da7b3c",
"assets/packages/country_selector/assets/flags/pw.webp": "a36affbfaa1ada1766859fe255831629",
"assets/packages/country_selector/assets/flags/vc.webp": "63546542488ccfc09d4371f6cf133f65",
"assets/packages/country_selector/assets/flags/bl.webp": "391fff824a60bcf776f377946fa7a501",
"assets/packages/country_selector/assets/flags/fk.webp": "1b8376d55e216efc3fd656154dc5e11c",
"assets/packages/country_selector/assets/flags/bt.webp": "6b269440cce0004f2b8c00192db6f54e",
"assets/packages/country_selector/assets/flags/ch.webp": "ef8d1adb64fce1c3f9e28c5a58a0a1ac",
"assets/packages/country_selector/assets/flags/mm.webp": "0e443fea29c410a301e21855b648a656",
"assets/packages/country_selector/assets/flags/zm.webp": "0fb3667a01086d6163df955308e9e63d",
"assets/packages/country_selector/assets/flags/qa.webp": "761ceab23e9b1685e27ea3136645cf14",
"assets/packages/country_selector/assets/flags/bf.webp": "fd2e45989ae7937568a054b9677ee83d",
"assets/packages/country_selector/assets/flags/cw.webp": "5b64a5b747a1fbc22641f035dce59860",
"assets/packages/country_selector/assets/flags/no.webp": "561169ed97a4fd0be6b491b266c291fc",
"assets/packages/country_selector/assets/flags/na.webp": "1d71230fe18328eeec38e88c210ea126",
"assets/packages/country_selector/assets/flags/bs.webp": "17931cd8b116d8c4c0853c71a8564f93",
"assets/packages/country_selector/assets/flags/fo.webp": "d0acde83d090dab7c94ff347a108bbaf",
"assets/packages/country_selector/assets/flags/pt.webp": "44156181d3ee6c402a9e6ebea431f47b",
"assets/packages/country_selector/assets/flags/td.webp": "3f88054f7b21785ac97591f585ccee88",
"assets/packages/country_selector/assets/flags/ls.webp": "1f4418b92567302a4d4a9b8b8cfe187f",
"assets/packages/country_selector/assets/flags/gg.webp": "14663410da1f6043723658b31f95b431",
"assets/packages/country_selector/assets/flags/tf.webp": "57de4533f5d72e519246d121b3ee58e8",
"assets/packages/country_selector/assets/flags/bj.webp": "2de69a398b4b4b9a39b3cf7e3aee0063",
"assets/packages/country_selector/assets/flags/mf.webp": "f9c5fbe3817cf759995d2ed88521ecec",
"assets/packages/country_selector/assets/flags/sy.webp": "6c6f03143643fa075fbc47c45bac84ff",
"assets/packages/country_selector/assets/flags/iq.webp": "d8b41aedd5c54b060b050dede26cfad0",
"assets/packages/country_selector/assets/flags/tr.webp": "36c3ea61e7bfebed665efe1a153735c8",
"assets/packages/country_selector/assets/flags/sv.webp": "74fd38be4b95670137c5e4b1ef265813",
"assets/packages/country_selector/assets/flags/mp.webp": "e806f0a991ecb5ed4235dc9f72479d59",
"assets/packages/country_selector/assets/flags/cn.webp": "305fc7b1df6a23c82cabca026cb61200",
"assets/packages/country_selector/assets/flags/ga.webp": "39a2b5a74a3323d7a1f7944e26eee80b",
"assets/packages/country_selector/assets/flags/so.webp": "5eba589cedfa9109fd6a4cafd03d0920",
"assets/packages/country_selector/assets/flags/ar.webp": "d11ec3c78206d3302ed03869b3e248ad",
"assets/packages/country_selector/assets/flags/ke.webp": "25f3ad9662afeb2712e3a01e473436c3",
"assets/packages/country_selector/assets/flags/nl.webp": "96e05b8da909b6e3a2ec73aeb557c9ce",
"assets/packages/country_selector/assets/flags/rw.webp": "a8c5e740c52869cc528572c61f508ba5",
"assets/packages/country_selector/assets/flags/lb.webp": "cefdc36b5cc29bbb2e8f859f5136bf52",
"assets/packages/country_selector/assets/flags/fi.webp": "c663806524d52cb1885d28387af85534",
"assets/packages/country_selector/assets/flags/ae.webp": "9f5b492cce26b4be50f1654a9590eab1",
"assets/packages/country_selector/assets/flags/by.webp": "70a15886217946b8aecaa8ee30a97d7b",
"assets/packages/country_selector/assets/flags/mt.webp": "a796b4242562dee31871e5df8b3ee732",
"assets/packages/country_selector/assets/flags/gy.webp": "293cfefd744a5a8cae3d0a1a6d50d14e",
"assets/packages/country_selector/assets/flags/ht.webp": "cd436cca4566cd5e09b71b8307919ca7",
"assets/packages/country_selector/assets/flags/bn.webp": "fa3ad00acfbeb13ee80be4a608ba6bf0",
"assets/packages/country_selector/assets/flags/ne.webp": "d28aa76dbb528708811a8fa1f0916fb0",
"assets/packages/country_selector/assets/flags/bq.webp": "96e05b8da909b6e3a2ec73aeb557c9ce",
"assets/packages/country_selector/assets/flags/ro.webp": "c18d551b15df477c83b838b67dd79a81",
"assets/packages/country_selector/assets/flags/bb.webp": "a08a8b7aad772df72c62101a7f84eb34",
"assets/packages/country_selector/assets/flags/ir.webp": "50980587f1ec22edb844f4c1a5b9d03e",
"assets/packages/country_selector/assets/flags/bz.webp": "bc54058fd5b21443eb530c72c2157726",
"assets/packages/country_selector/assets/flags/cc.webp": "f4bc7e756cc92e9b1c8245dc769be0c5",
"assets/packages/country_selector/assets/flags/ba.webp": "b3c1f8e6d117b0eb33983ebd804536dd",
"assets/packages/country_selector/assets/flags/et.webp": "7988a5ef92110615db26ab69b3496aca",
"assets/packages/country_selector/assets/flags/lk.webp": "e68d81ff468211b27e4eaeee5e29a8bb",
"assets/packages/country_selector/assets/flags/cr.webp": "144728c0b0d1ba5900aeeba00bb6064c",
"assets/packages/country_selector/assets/flags/id.webp": "f51be56eb221e3a4b0232852028120f0",
"assets/packages/country_selector/assets/flags/sa.webp": "49aca03d75723e0d438ab600404a9735",
"assets/packages/country_selector/assets/flags/at.webp": "7fd54da9ba185a8acaa5ed230c401b6c",
"assets/packages/country_selector/assets/flags/sb.webp": "eb771f9cf5d0e63feb9cb7e1a3131fc5",
"assets/packages/country_selector/assets/flags/al.webp": "8ec41f5cde72ea6dfe5348fc0e86e2ac",
"assets/packages/country_selector/assets/flags/bd.webp": "ca9a7312e6c2c089e49119cbb62de63a",
"assets/packages/country_selector/assets/flags/af.webp": "33d42bc332a2f1bdf3f3334f5a0354ed",
"assets/packages/country_selector/assets/flags/tz.webp": "b6b8a4294159dd0357daf0c450a8c977",
"assets/packages/country_selector/assets/flags/st.webp": "8c7f9816dd8bc1b15ba4774ab690807a",
"assets/packages/country_selector/assets/flags/br.webp": "81df0e874183c1d640cc52a0d3913b12",
"assets/packages/country_selector/assets/flags/ly.webp": "cb6296042de46c91e46985c260ac3b5f",
"assets/packages/country_selector/assets/flags/tj.webp": "25dc918fae9d78386e098416ffe19580",
"assets/packages/country_selector/assets/flags/pr.webp": "437746945a5baf27e5fd08202d2d62ab",
"assets/packages/country_selector/assets/flags/sz.webp": "b0a4c46e4b82ce7b3f056722e63672d2",
"assets/packages/country_selector/assets/flags/gb-sct.webp": "6d3c92b153e0135a85c986f071fd6971",
"assets/packages/country_selector/assets/flags/kz.webp": "70cdfda1ba23c7a187d8a33c2237ea7c",
"assets/packages/country_selector/assets/flags/mn.webp": "9c646316c58f9d802de5d7735de22f34",
"assets/packages/country_selector/assets/flags/li.webp": "531a76a26e4e4d718acf225ae53bf6f4",
"assets/packages/country_selector/assets/flags/be.webp": "6490f02b658bc7e62b15ff7f29085187",
"assets/packages/country_selector/assets/flags/pn.webp": "a50cc66ea0647aa0d3db6e3224058b3e",
"assets/packages/country_selector/assets/flags/il.webp": "21fd8a7d7c9e4aca320bbed8e47b3c01",
"assets/packages/country_selector/assets/flags/ru.webp": "513edf8dec7cf0cb7b0825964e5ed355",
"assets/packages/country_selector/assets/flags/sd.webp": "627eac36449a7d623cff5006fd106bb0",
"assets/packages/country_selector/assets/flags/sj.webp": "561169ed97a4fd0be6b491b266c291fc",
"assets/packages/country_selector/assets/flags/an.webp": "c03fa31cfdc55fb78f2290551d3be6c3",
"assets/packages/country_selector/assets/flags/im.webp": "054014d9b55a857cebb55c73813d2b00",
"assets/packages/country_selector/assets/flags/ca.webp": "9c43dab93f996c93aef08ef14ea4d193",
"assets/packages/country_selector/assets/flags/my.webp": "618c095bad697db7cb1e0b13f496972a",
"assets/packages/country_selector/assets/flags/ug.webp": "cd0339f7d56b0a0dbfca1a8f80716839",
"assets/packages/country_selector/assets/flags/er.webp": "dd16eea96272d9da64a063abe36ad882",
"assets/packages/country_selector/assets/flags/rs.webp": "3804ca0424662a3b42297b82b1eccf8f",
"assets/packages/country_selector/assets/flags/tc.webp": "b1825a68f1220b29e22dd1f0d7544a8d",
"assets/packages/country_selector/assets/flags/tv.webp": "fca2aee66de7fc1ae06b6cc916120e54",
"assets/packages/country_selector/assets/flags/fr.webp": "3fc6704659d0563f7a5b8bd25c23bf78",
"assets/packages/country_selector/assets/flags/yt.webp": "f9c5fbe3817cf759995d2ed88521ecec",
"assets/packages/country_selector/assets/flags/ci.webp": "7ab613219c4e28a0f57e4426f5cbb308",
"assets/packages/country_selector/assets/flags/vg.webp": "7f126f04a944b626e3b3449f0afa645e",
"assets/packages/country_selector/assets/flags/kn.webp": "dc0e4cf542be0d534341d6e7c3e3dedc",
"assets/packages/country_selector/assets/flags/ve.webp": "1955b844ab2b1156cd19415fce04ab6b",
"assets/packages/country_selector/assets/flags/gm.webp": "b7c554c0617c23df431dd95c72c742a3",
"assets/packages/country_selector/assets/flags/nz.webp": "87d4677ea6821a28bb21cc55ad759641",
"assets/packages/country_selector/assets/flags/ck.webp": "2b0309957fce678c3bc339f7ca458342",
"assets/packages/country_selector/assets/flags/la.webp": "074140df932cfa3a94163fcd9e6d1d37",
"assets/packages/country_selector/assets/flags/za.webp": "73a93eeb16386571f70d1dfa36ea4fba",
"assets/packages/country_selector/assets/flags/md.webp": "93e4689889da206fcb40dcad6affb08b",
"assets/packages/country_selector/assets/flags/bg.webp": "f0f5699c7d6081e9de3303e6aec51a36",
"assets/packages/country_selector/assets/flags/is.webp": "d1d62175d6be34ad9cb93a34a52c91a7",
"assets/packages/country_selector/assets/flags/mh.webp": "21c82345c81ae2df9b5fd01c735e1c7f",
"assets/packages/country_selector/assets/flags/bv.webp": "561169ed97a4fd0be6b491b266c291fc",
"assets/packages/country_selector/assets/flags/nc.webp": "2a56096e9784432461907154aa710a42",
"assets/packages/country_selector/assets/flags/si.webp": "e4a43ce97b781bc629bc9449ea6438b6",
"assets/packages/country_selector/assets/flags/pf.webp": "3c29ca715e5d7ad9d220bfc4505e220d",
"assets/packages/country_selector/assets/flags/mx.webp": "0a13e681f181f2059b1da15b57105788",
"assets/packages/country_selector/assets/flags/as.webp": "b6a1a629e5330d05151ad4d14bf65d60",
"assets/packages/country_selector/assets/flags/vn.webp": "4e2264b7bf0aea5ef0e69a868402a7c6",
"assets/packages/country_selector/assets/flags/om.webp": "e3edfed94171f2b258a4e04133e86315",
"assets/packages/country_selector/assets/flags/cg.webp": "6a17c306a0032735bdcf558b63fc18ec",
"assets/packages/country_selector/assets/flags/ml.webp": "501eb87b874924e33dd1b5d8dd79a895",
"assets/packages/country_selector/assets/flags/sn.webp": "31012c632dc958d2d058ef8bdc7d7242",
"assets/packages/country_selector/assets/flags/np.webp": "85bc3b1b7f7d88723b98c853ad9c11e0",
"assets/packages/country_selector/assets/flags/mo.webp": "f522954bfd5ed941cc67a41050847a10",
"assets/packages/country_selector/assets/flags/kw.webp": "0cdb68d397530ebe70c2d6ab2008ff79",
"assets/packages/country_selector/assets/flags/ph.webp": "8bed6203a3ec671d89859e58eafdedc8",
"assets/packages/country_selector/assets/flags/gi.webp": "e57b91dc0603417e123adab4b2b3f47a",
"assets/packages/country_selector/assets/flags/zw.webp": "e771e864e738cacd3b96afee1730bd42",
"assets/packages/country_selector/assets/flags/mr.webp": "12a418c246bc1bb8ec8015f7fa046fa1",
"assets/packages/country_selector/assets/flags/gp.webp": "f9c5fbe3817cf759995d2ed88521ecec",
"assets/packages/country_selector/assets/flags/co.webp": "abff52385e50028b5c1414fdf207d80a",
"assets/packages/country_selector/assets/flags/se.webp": "11006e8649a1e5eedb9f161f33512200",
"assets/packages/country_selector/assets/flags/in.webp": "3e1bf6a2d720dd02d87ab11b8784af0d",
"assets/packages/country_selector/assets/flags/us.webp": "829c8e530d7f4d6485e34dad45beca2b",
"assets/packages/country_selector/assets/flags/gn.webp": "ac20fda1b29f620b10573250c8b5490b",
"assets/packages/country_selector/assets/flags/cf.webp": "565f6228d38d9298773a0fac39e4b210",
"assets/packages/country_selector/assets/flags/gb.webp": "d7bd1f16fd62b8a73347d0b50f85efeb",
"assets/packages/country_selector/assets/flags/gb-wls.webp": "be5306ba071451ee2163bedef7e0f9c7",
"assets/packages/country_selector/assets/flags/gs.webp": "c4b813aaa52b67eecd0478b689400342",
"assets/packages/country_selector/assets/flags/cm.webp": "809cff1666cf3cde454a7ff7f4c889ce",
"assets/packages/country_selector/assets/flags/do.webp": "5eb089443894d616e309e29175b1c66b",
"assets/packages/country_selector/assets/flags/es.webp": "0acf98e416312dee468879b10e71a265",
"assets/packages/country_selector/assets/flags/jp.webp": "51112369645a625719a0d16c4c2626c3",
"assets/packages/country_selector/assets/flags/mw.webp": "89a0661f8517ce0b3b2dbffbf2084ad8",
"assets/packages/country_selector/assets/flags/gw.webp": "9464e4715d1d785807f761e483793532",
"assets/packages/country_selector/assets/flags/lr.webp": "2c2d51dc41af3f3ee73b3530e674b7f7",
"assets/packages/country_selector/assets/flags/kh.webp": "cfe93bf019966830edb73fa297020349",
"assets/packages/country_selector/assets/flags/hn.webp": "1e9f22bf79890ecbcee96fcf3f1d4c17",
"assets/packages/country_selector/assets/flags/uz.webp": "abe6705178a369f5d8ba7dd09a5a1507",
"assets/packages/country_selector/assets/flags/gl.webp": "2c3799e478284f4ba6d54cc1ec73e1a8",
"assets/packages/country_selector/assets/flags/ua.webp": "76596a68bb31f8e0d1fc045bf6e17885",
"assets/packages/country_selector/assets/flags/ag.webp": "83533b9d196cea6c04ef9208d8534113",
"assets/packages/country_selector/assets/flags/ki.webp": "dd84b188c2a8b836445b9fd726257433",
"assets/packages/country_selector/assets/flags/ng.webp": "075c355b089590dd96d95edf9cf6c7ed",
"assets/packages/country_selector/assets/flags/ps.webp": "53133f96930227d47065d80cceefdf86",
"assets/packages/country_selector/assets/flags/lt.webp": "5956af1c9e39c6907fd765d0bdf6621f",
"assets/packages/country_selector/assets/flags/nu.webp": "4a993ef5c05e3f974b0fc74cbee3930a",
"assets/packages/country_selector/assets/flags/am.webp": "68082a52972472d9155bbe0e39998890",
"assets/packages/country_selector/assets/flags/bw.webp": "daf187fd9a35f2f45d709213a93e8f0e",
"assets/packages/country_selector/assets/flags/hu.webp": "9a99ebd1ee47f0213afa23839ea8e251",
"assets/packages/country_selector/assets/flags/eu.webp": "382e290054cbaa6b14de98d9df74bd3d",
"assets/packages/country_selector/assets/flags/dz.webp": "908bbc318b204d56ce813f552783b4da",
"assets/packages/country_selector/assets/flags/sg.webp": "a9d54c26ad610f5e6aea4471a78fc7d3",
"assets/packages/country_selector/assets/flags/kp.webp": "8ce4c8fab822af5debb5bc80d4a44f6f",
"assets/packages/country_selector/assets/flags/sx.webp": "836ecb4ac3a4e82d17e82b4ad2b61ead",
"assets/packages/country_selector/assets/flags/sm.webp": "62f787bca3e8c27c777596fa09daee59",
"assets/packages/country_selector/assets/flags/bh.webp": "f106d461e2509ced43351d0505239325",
"assets/packages/country_selector/assets/flags/aq.webp": "e4d989a8f28810283bb232b95ea77839",
"assets/packages/country_selector/assets/flags/pa.webp": "40dfe74848d4a06a9d06da44a30e8fde",
"assets/packages/country_selector/assets/flags/cz.webp": "cdb370ccd59f6ffdeca17cf951588845",
"assets/packages/country_selector/assets/flags/hr.webp": "9afbd7a4bd1a16a67c81310f9aee0b91",
"assets/packages/country_selector/assets/flags/cy.webp": "fdf63b19f33d5f642ca75bd7fe86201f",
"assets/packages/country_selector/assets/flags/gf.webp": "86cb11cca3555bec813364d40dd8c1d4",
"assets/packages/country_selector/assets/flags/hm.webp": "68690cb68da1be143e1167b4a5f23a0c",
"assets/packages/country_selector/assets/flags/cu.webp": "35c36837d0dd5732198d33fa03890578",
"assets/packages/country_selector/assets/flags/gr.webp": "e31bcdde9159950a53b82cd59d292b2c",
"assets/packages/country_selector/assets/flags/va.webp": "d5e8797bd13b74f75c47d87c777ae4a3",
"assets/packages/country_selector/assets/flags/th.webp": "c45fd08b679a0262d711d9051992a7f9",
"assets/packages/country_selector/assets/flags/bm.webp": "52dadcbe64891affe67e8b6c439d88d1",
"assets/packages/country_selector/assets/flags/ws.webp": "f1bcf3fb26157a6de8f6a238b47a2367",
"assets/packages/country_selector/assets/flags/ky.webp": "7ebb9a554cce612b0b19fdf747b55d05",
"assets/packages/country_selector/assets/flags/xk.webp": "277d711dcef700749ca26c5364b65113",
"assets/packages/country_selector/assets/flags/sh.webp": "d7bd1f16fd62b8a73347d0b50f85efeb",
"assets/packages/country_selector/assets/flags/vu.webp": "39d8452b055709f3b2096d962cc27674",
"assets/packages/country_selector/assets/flags/mu.webp": "93dab1e7bcb300877447179fbff25e78",
"assets/packages/country_selector/assets/flags/ma.webp": "25cb2f23686c640617bba2c3b1e42d27",
"assets/packages/country_selector/assets/flags/cl.webp": "b67b24d22743094c341a4cf2ac173a97",
"assets/packages/country_selector/assets/flags/gb-nir.webp": "d7bd1f16fd62b8a73347d0b50f85efeb",
"assets/packages/country_selector/assets/flags/au.webp": "68690cb68da1be143e1167b4a5f23a0c",
"assets/packages/country_selector/assets/flags/gd.webp": "291ca5e3c878106a82ecec1db1bbe010",
"assets/packages/country_selector/assets/flags/ss.webp": "b5ea132635cb98f1efcfef2030d8d653",
"assets/packages/country_selector/assets/flags/aw.webp": "364c9af14165705aefa1daae332a195c",
"assets/packages/country_selector/assets/flags/tm.webp": "385e099281b3fec19e5ffd68d3b2f77e",
"assets/packages/country_selector/assets/flags/km.webp": "7d4bddce3846b236909d41c98e6858a5",
"assets/packages/country_selector/assets/flags/me.webp": "19522732d5873247f5fa565ee87b99b2",
"assets/packages/country_selector/assets/flags/mk.webp": "9e828e9c4ab49ab34a1fb60b9019b396",
"assets/packages/country_selector/assets/flags/tw.webp": "f7332a8e929f9dc056f4adda3230445d",
"assets/packages/country_selector/assets/flags/fj.webp": "895bbf97ab5ce178ad7620a13972dc62",
"assets/packages/country_selector/assets/flags/lv.webp": "005661ee3d18c316d002d3c66bc49f43",
"assets/packages/country_selector/assets/flags/je.webp": "33eac2a89c9e6ccf3000f0a7f0a4fdbe",
"assets/packages/country_selector/assets/flags/tt.webp": "809f840604a844def8e696de52bce760",
"assets/packages/country_selector/assets/flags/gb-eng.webp": "b52fae3959f49c2bc6ee953f0ac23fdf",
"assets/packages/country_selector/assets/flags/gt.webp": "23c29f738126fc61782e3bcf162dcb1b",
"assets/packages/country_selector/assets/flags/tl.webp": "4d6b70ece7b42cd44317e3b57d10e9be",
"assets/packages/country_selector/assets/flags/pm.webp": "f9c5fbe3817cf759995d2ed88521ecec",
"assets/packages/country_selector/assets/flags/de.webp": "836983275a48dd3061d37a2c2623413f",
"assets/packages/country_selector/assets/flags/lc.webp": "fb53c136bf69ae7b2f9ef7faff0c169d",
"assets/packages/country_selector/assets/flags/gu.webp": "10da474539db7d06cd8bcc29af98ae4b",
"assets/packages/country_selector/assets/flags/uy.webp": "15d96d4695cfc4f023a6ac42aff422b0",
"assets/packages/country_selector/assets/flags/um.webp": "829c8e530d7f4d6485e34dad45beca2b",
"assets/packages/country_selector/assets/flags/nf.webp": "891b9836db5e09e3317a782b5c66f5e3",
"assets/packages/country_selector/assets/flags/nr.webp": "8365aa71f5db012d4cd34b80466f684f",
"assets/packages/country_selector/assets/flags/mq.webp": "35fee92eb5914e8bc5d82b6535a4c3ac",
"assets/packages/country_selector/assets/flags/mz.webp": "b7b3058d743b2dd62b62e13916ff9647",
"assets/packages/country_selector/assets/flags/ao.webp": "2cf208db2b5c875b0980c4f9bb9d6a06",
"assets/packages/country_selector/assets/flags/vi.webp": "11c9c3e3dc587f3024c3f76ef0d915c4",
"assets/packages/country_selector/assets/flags/pl.webp": "20f12d282ef4b623c6b432aa0e94eab2",
"assets/packages/country_selector/assets/flags/ai.webp": "65911c902fc189085407380603115ae0",
"assets/packages/country_selector/assets/flags/ni.webp": "090709f37ced39ac82f1e70cac3e96a9",
"assets/packages/country_selector/assets/flags/ad.webp": "19fea29cfe25c0bcc181762f953b6a20",
"assets/packages/country_selector/assets/flags/ge.webp": "c8840f2bce954bb71b821d36b45f551d",
"assets/packages/country_selector/assets/flags/ms.webp": "3e5e457d46437a661050c0460752456b",
"assets/packages/country_selector/assets/flags/cd.webp": "8a1b1b4026327a70122fbeb4bb7edc73",
"assets/packages/country_selector/assets/flags/bi.webp": "895ee30f469df32b7db175cd7873bf9f",
"assets/packages/country_selector/assets/flags/eg.webp": "6c24f3cdc785d9cd77d3fc321225b2d8",
"assets/packages/country_selector/assets/flags/pk.webp": "3ad8e442454660a71cab8b98daecb19c",
"assets/packages/country_selector/assets/flags/sr.webp": "e1f04b65bfa6d1aba84ae9488608360c",
"assets/packages/country_selector/assets/flags/jm.webp": "d336445ae44a83d2a5dbd086e15bea5d",
"assets/packages/country_selector/assets/flags/gq.webp": "3064e1a4ea416a268e9c9459ebca99a2",
"assets/packages/country_selector/assets/flags/eh.webp": "71cfa1c4148e873d0cff920ca4c1945d",
"assets/packages/country_selector/assets/flags/hk.webp": "a5a553493a92ceea84074fdd56ba8bd7",
"assets/packages/country_selector/assets/flags/ee.webp": "301dad64c58ab7274dbc7538edbb100a",
"assets/packages/country_selector/assets/flags/mc.webp": "b17dc7cf2afaa6043eaecfe14244d5dd",
"assets/packages/country_selector/assets/flags/io.webp": "918b51b97bfebf1e3a637384143a72a6",
"assets/packages/country_selector/assets/flags/dm.webp": "562e3a4ff75c6785130a146a505ff622",
"assets/packages/country_selector/assets/flags/tn.webp": "3cb3a4cfb9b4ef651c3776106a1d1156",
"assets/packages/country_selector/assets/flags/bo.webp": "b9e5b3be34825868885ccf33fce7d934",
"assets/packages/country_selector/assets/flags/cx.webp": "1ea9b0da69f8c6a57af44a8161fb0f7d",
"assets/packages/country_selector/assets/flags/fm.webp": "211be6390287b9a4b83397a81d11dda8",
"assets/packages/country_selector/assets/flags/gh.webp": "a730d25a66a06c89293e2aed5ad9ef8b",
"assets/packages/country_selector/assets/flags/ax.webp": "8e3bd520690dfd953862994e7a1d26a5",
"assets/packages/country_selector/assets/flags/ye.webp": "df6695a81b82d0aed28717a1cbe3e180",
"assets/packages/country_selector/assets/flags/ec.webp": "3cf2b5629196d9c8cbd5bc21f019c931",
"assets/packages/country_selector/assets/flags/py.webp": "ac10af3faae7b1980487df35dc007b89",
"assets/packages/country_selector/assets/flags/it.webp": "2da0b31b0d64f6ee0e6eee8d933ce11e",
"assets/packages/country_selector/assets/flags/wf.webp": "c68d4652de59d5017a9990d37b890126",
"assets/packages/country_selector/assets/flags/cv.webp": "7989485c73dd9b4e37d3c76830c6c742",
"assets/packages/country_selector/assets/flags/sk.webp": "18682fd4d108de814c8d55f0b6de387e",
"assets/packages/country_selector/assets/flags/ie.webp": "720bf4398c3fae7bb197ead901e5bb10",
"assets/packages/country_selector/assets/flags/kg.webp": "ff1d0a88874eb29faf2f2c14c93217df",
"assets/packages/country_selector/assets/flags/mg.webp": "128e991043fbb1202640438a96011341",
"assets/packages/country_selector/assets/flags/dj.webp": "ae5d04e4845ae3f9f08df2e34ae92d48",
"assets/packages/country_selector/assets/flags/pg.webp": "407daed32ef142aae1f4c2b006ce3e53",
"assets/packages/country_selector/assets/flags/to.webp": "521172c3a40a0dbcf33c9f5b2855ed27",
"assets/packages/country_selector/assets/flags/sc.webp": "6c5f2496c3e412b05c1099fe9cd7c72e",
"assets/packages/country_selector/assets/flags/lu.webp": "27d8513ac4ac89fdcbe8a814304bf93f",
"assets/packages/country_selector/assets/flags/sl.webp": "290ee90152d89fb7678401fdcc077a37",
"assets/packages/country_selector/assets/flags/mv.webp": "ce38311342cc660d3918e868474364a2",
"assets/packages/country_selector/assets/flags/re.webp": "f9c5fbe3817cf759995d2ed88521ecec",
"assets/packages/country_selector/assets/flags/tk.webp": "a2b2aea0ca48fcf2cc976f72e208ab83",
"assets/packages/country_selector/assets/flags/dk.webp": "c0af08271068862b18a8298925af8a12",
"assets/shaders/ink_sparkle.frag": "bfd223fd128d659ff8813253d56be66f",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
