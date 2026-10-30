// ========================================================
// GREEN ISLAND CRICKET CLUB - HONOURS BOARD CONFIGURATION
// ========================================================

window.BOARD_CONFIG = {
  // Title displayed in top crest arch
  clubName: 'GREEN ISLAND CRICKET CLUB',

  // Bottom plaque inscription (matches photo)
  footerInscription: 'DONATED BY.. Ladies Committee...',

  // Google Sheets Published URL
  publishedUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSO7PBDTQKJunZkVZ3PKX5MEBgH1vf7rutZU8xQY4_wcyN1xfrehzkPQfLkbi0efVP7WU6TEeJGeRIG/pubhtml',

  // Base CSV export URL for published Google Sheet
  baseCsvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSO7PBDTQKJunZkVZ3PKX5MEBgH1vf7rutZU8xQY4_wcyN1xfrehzkPQfLkbi0efVP7WU6TEeJGeRIG/pub',

  // Optional Standard Google Sheet ID (if user ever prefers standard share link)
  sheetId: '',

  // Rotation duration: 15 seconds per board
  rotationIntervalMs: 15000,

  // Background refresh duration: 10 minutes
  backgroundSyncIntervalMs: 10 * 60 * 1000,

  // Honours Board Tabs Configuration
  // Order here determines the presentation sequence in the rotation.
  tabs: [
    {
      name: 'Presidents',
      gid: '210667265',
      visualColumns: 2,
      rowsPerColumn: 18
    },
    {
      name: 'Life Members',
      gid: '1968356308',
      visualColumns: 2,
      rowsPerColumn: 18
    },
    {
      name: 'Representatives',
      gid: '1088401897',
      visualColumns: 2,
      rowsPerColumn: 20
    },
    {
      name: 'Batting Centuries',
      gid: '194649987',
      visualColumns: 3,
      rowsPerColumn: 18
    },
    {
      name: 'Bowling Records',
      gid: '1721411826',
      visualColumns: 2, // 2 wider columns for long bowling figures
      rowsPerColumn: 16
    },
    {
      name: 'Bowling Special Milestones',
      gid: '594350392',
      visualColumns: 2,
      rowsPerColumn: 18
    }
  ],

  // Pre-loaded initial / offline fallback data
  // Ensures immediate zero-delay display on TV startup or offline network
  initialData: {
  "Life Members": {
    "name": "Life Members",
    "gid": "1968356308",
    "header": [
      "Name"
    ],
    "items": [
      [
        "F.BARNES"
      ],
      [
        "D.KEENE"
      ],
      [
        "T.CASSIDY"
      ],
      [
        "A.BERRY"
      ],
      [
        "J.DUNBAR"
      ],
      [
        "A.WALKER"
      ],
      [
        "W.PRICE"
      ],
      [
        "G.CAMBRIDGE"
      ],
      [
        "J.MOYLE"
      ],
      [
        "A.KENNEDY"
      ],
      [
        "P.GRAHAM"
      ],
      [
        "B.KENWORTHY"
      ],
      [
        "A.DUNBAR"
      ],
      [
        "A.GRANT"
      ],
      [
        "W.KEEN"
      ],
      [
        "T.KEENE"
      ],
      [
        "G.PAYNE"
      ],
      [
        "S.ROBINSON"
      ],
      [
        "J.SCOTT"
      ]
    ]
  },
  "Representatives": {
    "name": "Representatives",
    "gid": "1088401897",
    "header": [
      "Category",
      "Player"
    ],
    "items": [
      [
        "NEW ZEALAND",
        "C CUMMING"
      ],
      [
        "NEW ZEALAND",
        "B McKECHNIE"
      ],
      [
        "NEW ZEALAND",
        "P PETHERICK"
      ],
      [
        "NEW ZEALAND",
        "G TURNER"
      ],
      [
        "NEW ZEALAND",
        "H RUTHERFORD"
      ],
      [
        "NEW ZEALAND A",
        "B SCOTT"
      ],
      [
        "NZ UNDER 19",
        "C GAFFANEY"
      ],
      [
        "NZ UNDER 19",
        "J SHEED"
      ],
      [
        "NZ UNDER 19",
        "E STANDFIELD"
      ],
      [
        "NZ UNDER 19",
        "S ROBINSON"
      ],
      [
        "NZ UNDER 19",
        "H RUTHERFORD"
      ],
      [
        "NZ UNDER 20 TO AUSTRALIA",
        "S ROBINSON"
      ],
      [
        "NZ YOUTH TO PAKISTAN",
        "A KENNEDY"
      ],
      [
        "NZ YOUNG PLAYER TO LORDS",
        "J PAUL"
      ],
      [
        "PAKISTAN",
        "K IBADULLAH"
      ],
      [
        "OTAGO",
        "A E Berry"
      ],
      [
        "OTAGO",
        "L Breen"
      ],
      [
        "OTAGO",
        "C Cumming"
      ],
      [
        "OTAGO",
        "C Finch"
      ],
      [
        "OTAGO",
        "C Gaffaney"
      ],
      [
        "OTAGO",
        "P Hills"
      ],
      [
        "OTAGO",
        "D Lobb"
      ],
      [
        "OTAGO",
        "S McCallum"
      ],
      [
        "OTAGO",
        "S McHardy"
      ],
      [
        "OTAGO",
        "B McKechnie"
      ],
      [
        "OTAGO",
        "G Murdoch"
      ],
      [
        "OTAGO",
        "J Paul"
      ],
      [
        "OTAGO",
        "P Petherick"
      ],
      [
        "OTAGO",
        "S Robinson"
      ],
      [
        "OTAGO",
        "B Scott"
      ],
      [
        "OTAGO",
        "J Sheed"
      ],
      [
        "OTAGO",
        "G Turner"
      ],
      [
        "OTAGO",
        "D Walker"
      ],
      [
        "OTAGO",
        "H Rutherford"
      ],
      [
        "OTAGO",
        "B Soper"
      ],
      [
        "OTAGO",
        "B Wilson"
      ],
      [
        "OTAGO",
        "G Croudis"
      ],
      [
        "OTAGO",
        "C Viljoen"
      ],
      [
        "OTAGO",
        "N Kelly"
      ],
      [
        "OTAGO",
        "J Gibson"
      ]
    ]
  },
  "Batting Centuries": {
    "name": "Batting Centuries",
    "gid": "194649987",
    "header": [
      "Season",
      "Player",
      "Scores"
    ],
    "items": [
      [
        "1932-33",
        "J.MATTINGLY",
        "103"
      ],
      [
        "1936-37",
        "A.GRANT",
        "164"
      ],
      [
        "1938-39",
        "F.BARNES",
        "102"
      ],
      [
        "1938-39",
        "G.BERRY",
        "103, 100"
      ],
      [
        "1938-39",
        "V.SHORT",
        "112"
      ],
      [
        "1940-41",
        "W.BERRY",
        "110"
      ],
      [
        "1940-41",
        "T.GRANT",
        "108"
      ],
      [
        "1942-43",
        "J.GORE",
        "105"
      ],
      [
        "1944-45",
        "A.BERRY",
        "102*, 110, 100"
      ],
      [
        "1948-49",
        "O.BOWIE",
        "146"
      ],
      [
        "1949-50",
        "T.SAMSON",
        "106"
      ],
      [
        "1950-51",
        "W.SAMSON",
        "129*"
      ],
      [
        "1954-55",
        "D.KITTO",
        "100"
      ],
      [
        "1955-56",
        "N.HAY",
        "155"
      ],
      [
        "1955-56",
        "W.REEVE",
        "118"
      ],
      [
        "1956-57",
        "O.BOWIE",
        "132"
      ],
      [
        "1957-58",
        "B.BARNES",
        "100*"
      ],
      [
        "1958-59",
        "W.REEVE",
        "105"
      ],
      [
        "1959-60",
        "N.DAVIDSON",
        "103*"
      ],
      [
        "1960-61",
        "D.KITTO",
        "107"
      ],
      [
        "1960-61",
        "B.KENWORTHY",
        "116"
      ],
      [
        "1965-66",
        "C.McKEOWN",
        "156"
      ],
      [
        "1966-67",
        "A.DUNBAR",
        "106*"
      ],
      [
        "1967-68",
        "A.DUNBAR",
        "103"
      ],
      [
        "1967-68",
        "L.GAMBLE",
        "100"
      ],
      [
        "1967-68",
        "P.GRAHAM",
        "109*, 111"
      ],
      [
        "1967-68",
        "B.MALCOLM",
        "105"
      ],
      [
        "1967-68",
        "B.SHANKS",
        "123"
      ],
      [
        "1967-68",
        "W.PRICE",
        "156"
      ],
      [
        "1968-69",
        "G.DONALDSON",
        "110*"
      ],
      [
        "1968-69",
        "A.DUNBAR",
        "121"
      ],
      [
        "1968-69",
        "J.DUNBAR",
        "105"
      ],
      [
        "1968-69",
        "L.JAFFRAY",
        "31"
      ],
      [
        "1968-69",
        "D.LAWS",
        "101, 141"
      ],
      [
        "1968-69",
        "B.MALCOLM",
        "106, 115"
      ],
      [
        "1968-69",
        "D.McKEWAN",
        "116"
      ],
      [
        "1968-69",
        "B.WOODS",
        "109"
      ],
      [
        "1969-70",
        "G.DONALDSON",
        "110, 162"
      ],
      [
        "1969-70",
        "M.JAFFRAY",
        "112"
      ],
      [
        "1969-70",
        "B.KENWORTHY",
        "123"
      ],
      [
        "1969-70",
        "D.M.KEWAN",
        "118"
      ],
      [
        "1969-70",
        "A.PAUL",
        "110"
      ],
      [
        "1969-70",
        "B.SHANKS",
        "114"
      ],
      [
        "1969-70",
        "B.WOODS",
        "110"
      ],
      [
        "1970-71",
        "A.PAUL",
        "110"
      ],
      [
        "1970-71",
        "B.WOODS",
        "105, 105, 117"
      ],
      [
        "1970-71",
        "W.PRICE",
        "140"
      ],
      [
        "1971-72",
        "G.BEZETT",
        "104"
      ],
      [
        "1971-72",
        "N.EDWARDS",
        "109"
      ],
      [
        "1971-72",
        "N.FACOORY",
        "104"
      ],
      [
        "1971-72",
        "P.GRAHAM",
        "116"
      ],
      [
        "1971-72",
        "T.KEENE",
        "126"
      ],
      [
        "1971-72",
        "K.O'BRIEN",
        "112"
      ],
      [
        "1971-72",
        "W.PRICE",
        "100, 119"
      ],
      [
        "1971-72",
        "B.WOODS",
        "101"
      ],
      [
        "1973-74",
        "P.GRAHAM",
        "104"
      ],
      [
        "1973-74",
        "M.HAWKES",
        "137"
      ],
      [
        "1974-75",
        "G.TURNER",
        "100, 111, 118*"
      ],
      [
        "1975-76",
        "B.MURPHY",
        "103, 107"
      ],
      [
        "1975-76",
        "G.TURNER",
        "102"
      ],
      [
        "1977-78",
        "N.DAVIDSON",
        "162"
      ],
      [
        "1978-79",
        "S.McCALLUM",
        "110, 144"
      ],
      [
        "1980-81",
        "G.McMANUS",
        "101"
      ],
      [
        "1980-81",
        "W.PAUL",
        "116"
      ],
      [
        "1981-82",
        "G.DENHAM",
        "104, 109"
      ],
      [
        "1981-82",
        "M.SAMSON",
        "115"
      ],
      [
        "1981-82",
        "W.PRICE",
        "108*"
      ],
      [
        "1983-84",
        "T.DUNCAN",
        "131"
      ],
      [
        "1983-84",
        "W.PRICE",
        "100"
      ],
      [
        "1984-85",
        "D.DEAN",
        "121"
      ],
      [
        "1985-86",
        "W.KEEN",
        "101"
      ],
      [
        "1985-86",
        "W.PRICE",
        "165"
      ],
      [
        "1986-87",
        "B.WOODS",
        "218*"
      ],
      [
        "1987-88",
        "W.PAUL",
        "100"
      ],
      [
        "1987-88",
        "T.WILLIAMS",
        "108"
      ],
      [
        "1988-89",
        "J.FAULKS",
        "101"
      ],
      [
        "1988-89",
        "W.KEEN",
        "106, 136"
      ],
      [
        "1988-89",
        "C.LAWS",
        "102"
      ],
      [
        "1988-89",
        "W.PAUL",
        "102"
      ],
      [
        "1988-89",
        "D.WALKER",
        "122"
      ],
      [
        "1989-90",
        "S.ROBINSON",
        "107"
      ],
      [
        "1990-91",
        "G.DICKINSON",
        "134"
      ],
      [
        "1990-91",
        "D.GALLIVAN",
        "102"
      ],
      [
        "1990-91",
        "S.HAMILTON",
        "105"
      ],
      [
        "1990-91",
        "K.KRIKKEN",
        "103"
      ],
      [
        "1990-91",
        "W.PRICE",
        "147"
      ],
      [
        "1990-91",
        "L.WOODS",
        "106"
      ],
      [
        "1991-92",
        "R.REID",
        "204, 201"
      ],
      [
        "1991-92",
        "S.ROBINSON",
        "115"
      ],
      [
        "1991-92",
        "B.WOODS",
        "101, 112, 153"
      ],
      [
        "1992-93",
        "G.McLACHLAN",
        "101"
      ],
      [
        "1992-93",
        "S.ROBINSON",
        "103"
      ],
      [
        "1992-93",
        "B.WOODS",
        "100"
      ],
      [
        "1993-94",
        "M.GRIFFEN",
        "100"
      ],
      [
        "1993-94",
        "S.ROBINSON",
        "106"
      ],
      [
        "1994-95",
        "M.BUNT",
        "124"
      ],
      [
        "1994-95",
        "A.KENNEDY",
        "142"
      ],
      [
        "1994-95",
        "W.PRICE",
        "107"
      ],
      [
        "1994-95",
        "S.ROBINSON",
        "116*"
      ],
      [
        "1995-96",
        "W.KELLET",
        "151"
      ],
      [
        "1995-96",
        "D.STUART",
        "144"
      ],
      [
        "1996-97",
        "S.ROBINSON",
        "100"
      ],
      [
        "1996-97",
        "R.SCOTT",
        "132*"
      ],
      [
        "1996-97",
        "M.144 (PRESIDENTS)",
        "144"
      ],
      [
        "1997-98",
        "R.FINCH",
        "112"
      ],
      [
        "1997-98",
        "C.McKENZIE",
        "175"
      ],
      [
        "1997-98",
        "S.ROBINSON",
        "118*, 140"
      ],
      [
        "1997-98",
        "B.SCOTT",
        "109"
      ],
      [
        "1997-98",
        "G.BIGGS",
        "106, 110"
      ],
      [
        "1998-99",
        "B.BEZETT",
        "101"
      ],
      [
        "1998-99",
        "C.GAFFANEY",
        "107, 107, 114"
      ],
      [
        "1998-99",
        "C.SHERBURD",
        "101"
      ],
      [
        "1999-2000",
        "M.HAWKEN",
        "105"
      ],
      [
        "1999-2000",
        "B.SCOTT",
        "102"
      ],
      [
        "2000-01",
        "T.GRIFFITHS",
        "107"
      ],
      [
        "2000-01",
        "A.KENNEDY",
        "100"
      ],
      [
        "2000-01",
        "D.SWAN",
        "101"
      ],
      [
        "2001-02",
        "C.CUMMING",
        "145"
      ],
      [
        "2001-02",
        "H.FINCH",
        "146"
      ],
      [
        "2001-02",
        "C.GAFFANEY",
        "108"
      ],
      [
        "2001-02",
        "A.HARRIS",
        "102"
      ],
      [
        "2001-02",
        "S.HUTCHISON",
        "112*"
      ],
      [
        "2002-03",
        "C.CUMMING",
        "118"
      ],
      [
        "2002-03",
        "G.DICKSON",
        "133"
      ],
      [
        "2002-03",
        "V.FINCH",
        "105"
      ],
      [
        "2003-04",
        "C.CUMMING",
        "100, 200"
      ],
      [
        "2003-04",
        "S.HUTCHISON",
        "106"
      ],
      [
        "2003-04",
        "G.ROWLEY",
        "122"
      ],
      [
        "2004-05",
        "G.CHISHOLM",
        "109, 136"
      ],
      [
        "2004-05",
        "G.SULLIVAN",
        "100"
      ],
      [
        "2004-05",
        "M.WATERWORTH",
        "101"
      ],
      [
        "2005-06",
        "S.MARTIN",
        "101"
      ],
      [
        "2005-06",
        "B.SCOTT",
        "102"
      ],
      [
        "2005-06",
        "J.SHEED",
        "104"
      ],
      [
        "2005-06",
        "S.SIMPSON",
        "103"
      ],
      [
        "2006-07",
        "C.CUMMING",
        "172, 103"
      ],
      [
        "2006-07",
        "M.JOYCE",
        "172*"
      ],
      [
        "2006-07",
        "G.CHISHOLM",
        "114"
      ],
      [
        "2007-08",
        "S.MUIR",
        "121, 101"
      ],
      [
        "2007-08",
        "J.SHEED",
        "114*, 108, 118, 151"
      ],
      [
        "2007-08",
        "M.JOYCE",
        "127"
      ],
      [
        "2007-08",
        "C.GAFFANEY",
        "101"
      ],
      [
        "2007-08",
        "S.SIMPSON",
        "131"
      ],
      [
        "2007-08",
        "C.CUMMING",
        "110, 125"
      ],
      [
        "2007-08",
        "S.MUIR",
        "101"
      ],
      [
        "2007-08",
        "H.RUTHERFORD",
        "118"
      ],
      [
        "2007-08",
        "J.SHEED",
        "151"
      ],
      [
        "2009-10",
        "J.SHEED",
        "127, 100"
      ],
      [
        "2009-10",
        "M.JOYCE",
        "103, 150*, 126*"
      ],
      [
        "2009-10",
        "C.JONES",
        "101"
      ],
      [
        "2010-11",
        "H.RUTHERFORD",
        "107, 104*"
      ],
      [
        "2010-11",
        "J.SHEED",
        "105, 101*"
      ],
      [
        "2010-11",
        "M.WATKINS",
        "128, 109"
      ],
      [
        "2010-11",
        "S.TAYLOR",
        "100*"
      ],
      [
        "2010-11",
        "C.JONES",
        "108"
      ],
      [
        "2011-12",
        "G.CROUDIS",
        "107"
      ],
      [
        "2011-12",
        "H.RUTHERFORD",
        "102"
      ],
      [
        "2012-13",
        "J.GILBERT",
        "155"
      ],
      [
        "2012-13",
        "G.DONALDSON",
        "103"
      ],
      [
        "2012-13",
        "R.GILBERT",
        "109"
      ],
      [
        "2014-15",
        "J.GILBERT",
        "111"
      ],
      [
        "2014-15",
        "J.SCOTT",
        "100*"
      ],
      [
        "2014-15",
        "S.SIMPSON",
        "107"
      ],
      [
        "2015-16",
        "G.CROUDIS",
        "112*"
      ],
      [
        "2015-16",
        "S.SIMPSON",
        "107"
      ],
      [
        "2015-16",
        "C.GAFFANEY",
        "113"
      ],
      [
        "2015-16",
        "B.BATTAR-SCOTT",
        "101"
      ],
      [
        "2016-17",
        "G.CROUDIS",
        "110"
      ],
      [
        "2016-17",
        "A.AMAR",
        "130"
      ],
      [
        "2016-17",
        "N.WATT",
        "157*"
      ],
      [
        "2016-17",
        "R.CAIRNS",
        "156"
      ],
      [
        "2016-17",
        "J.GILBERT",
        "100*"
      ],
      [
        "2017-18",
        "R.CAIRNS",
        "113*"
      ],
      [
        "2017-18",
        "J.GILBERT",
        "123"
      ],
      [
        "2017-18",
        "C.GAFFANEY",
        "106"
      ],
      [
        "2017-18",
        "S.BHATTI",
        "120"
      ],
      [
        "2018-19",
        "T.BEATON",
        "146*"
      ],
      [
        "2018-19",
        "C.GODWILL",
        "100*, 110"
      ],
      [
        "2018-19",
        "A.HARRIS",
        "102, 115"
      ],
      [
        "2018-19",
        "G.SCOTT",
        "103*"
      ],
      [
        "2018-19",
        "C.VILJOEN",
        "116"
      ],
      [
        "2018-19",
        "N.WATT",
        "106"
      ],
      [
        "2018-19",
        "B.WILSON",
        "118"
      ],
      [
        "2019-20",
        "R.CAIRNS",
        "107"
      ],
      [
        "2019-20",
        "D.CARMODY",
        "102"
      ],
      [
        "2019-20",
        "G.CROUDIS",
        "156, 113"
      ],
      [
        "2019-20",
        "B.KNEEBONE",
        "102"
      ],
      [
        "2019-20",
        "N.WATT",
        "117*"
      ]
    ]
  },
  "Bowling Special Milestones": {
    "name": "Bowling Special Milestones",
    "gid": "594350392",
    "header": [
      "Category",
      "Season",
      "Player"
    ],
    "items": [
      [
        "Hattricks",
        "1969-70",
        "L.GAMBLE"
      ],
      [
        "Hattricks",
        "1977-78",
        "B.MURPHY"
      ],
      [
        "Hattricks",
        "1980-81",
        "J.COLLING"
      ],
      [
        "Hattricks",
        "1992-93",
        "A.PRICE"
      ],
      [
        "Hattricks",
        "1992-93",
        "A.JOHNSON"
      ],
      [
        "Hattricks",
        "1999-2000",
        "M.HAWKEN"
      ],
      [
        "Hattricks",
        "2001-02",
        "H.FINCH"
      ],
      [
        "Hattricks",
        "2002-03",
        "B.DUFFELL"
      ],
      [
        "Hattricks",
        "2003-04",
        "J.SCOTT"
      ],
      [
        "Hattricks",
        "2004-05",
        "M.JOHNSTON"
      ],
      [
        "Hattricks",
        "2007-08",
        "R.RITCHIE"
      ],
      [
        "Hattricks",
        "2013-14",
        "A.SARMAN"
      ],
      [
        "Hattricks",
        "2014-15",
        "J.SCOTT"
      ],
      [
        "Hattricks",
        "2014-15",
        "S.McNOE"
      ],
      [
        "Hattricks",
        "2018-19",
        "T.CARDNO"
      ],
      [
        "Hattricks",
        "2018-19",
        "N.PARATA"
      ],
      [
        "Hattricks",
        "2018-19",
        "S.EMMANUEL"
      ],
      [
        "10 Wickets In A Match",
        "1944-45",
        "G.ABERCROMBIE"
      ],
      [
        "10 Wickets In A Match",
        "1944-45",
        "G.ABERCROMBIE"
      ],
      [
        "10 Wickets In A Match",
        "1973-74",
        "B.MURPHY"
      ],
      [
        "10 Wickets In A Match",
        "1975-76",
        "K.LOBB"
      ],
      [
        "10 Wickets In A Match",
        "1977-78",
        "K.LOBB"
      ],
      [
        "10 Wickets In A Match",
        "1983-84",
        "G.CAMBRIDGE"
      ],
      [
        "10 Wickets In A Match",
        "1987-88",
        "G.CAMBRIDGE"
      ],
      [
        "10 Wickets In A Match",
        "1999-2000",
        "B.SCOTT"
      ]
    ]
  },
  "Bowling Records": {
    "name": "Bowling Records",
    "gid": "1721411826",
    "header": [
      "Season",
      "Player",
      "Figures"
    ],
    "items": [
      [
        "1944-45",
        "G.Abercrombie",
        "7-1, 7-29, 8-1, 7-4, 7-11, 7-8, Barnes 7-22"
      ],
      [
        "1949-50",
        "T.Samson",
        "7-13"
      ],
      [
        "1950-51",
        "A.Bell",
        "7-12"
      ],
      [
        "1954-55",
        "A.Todd",
        "7-31"
      ],
      [
        "1954-55",
        "B.Barnes",
        "7-13"
      ],
      [
        "1956-57",
        "J.Atherton",
        "7-35"
      ],
      [
        "1962-63",
        "D.Lucas",
        "7-39"
      ],
      [
        "1963-64",
        "G.Evans",
        "8-22"
      ],
      [
        "1965-66",
        "B.Murphy",
        "7-27"
      ],
      [
        "1966-67",
        "T.Cassidy",
        "7-50"
      ],
      [
        "1967-68",
        "P.Graham",
        "7-28"
      ],
      [
        "1967-68",
        "G.Raines",
        "7-42"
      ],
      [
        "1968-69",
        "T.Keene",
        "8-60"
      ],
      [
        "1969-70",
        "G.Evans",
        "7-35"
      ],
      [
        "1969-70",
        "L.Gamble",
        "7-30"
      ],
      [
        "1970-71",
        "G.Evans",
        "7-49"
      ],
      [
        "1970-71",
        "P.Jones",
        "8-24"
      ],
      [
        "1970-71",
        "B.Kenworthy",
        "7-22"
      ],
      [
        "1970-71",
        "G.Miller",
        "7-20, 7-49"
      ],
      [
        "1971-72",
        "P.Graham",
        "7-48"
      ],
      [
        "1971-72",
        "W.Hicko",
        "7-17"
      ],
      [
        "1972-73",
        "W.Dickson",
        "8-18"
      ],
      [
        "1972-73",
        "G.Miller",
        "9-15"
      ],
      [
        "1972-73",
        "S.Woodford",
        "8-54"
      ],
      [
        "1973-74",
        "P.Graham",
        "8-45"
      ],
      [
        "1973-74",
        "B.Murphy",
        "7-16, 7-23"
      ],
      [
        "1974-75",
        "M.Guyton",
        "7-47"
      ],
      [
        "1974-75",
        "E.Parson",
        "8-37"
      ],
      [
        "1975-76",
        "L.Eckhoff",
        "7-48"
      ],
      [
        "1975-76",
        "P.Graham",
        "7-53"
      ],
      [
        "1975-76",
        "K.Lobb",
        "9-51, 7-46"
      ],
      [
        "1975-76",
        "M.Massari",
        "7-38"
      ],
      [
        "1975-76",
        "S.Woodford",
        "7-4"
      ],
      [
        "1976-77",
        "J.Dickie",
        "8-35"
      ],
      [
        "1976-77",
        "F.McDonald",
        "8-26, 7-30, 7-42, 7-54, 7-85"
      ],
      [
        "1977-78",
        "J.Dickie",
        "7-45"
      ],
      [
        "1977-78",
        "L.Eckhoff",
        "7-53"
      ],
      [
        "1977-78",
        "K.Lobb",
        "7-18"
      ],
      [
        "1977-78",
        "E.Machin",
        "8-36"
      ],
      [
        "1977-78",
        "B.Murphy",
        "7-9, 7-45"
      ],
      [
        "1977-78",
        "P.Petherick",
        "7-51"
      ],
      [
        "1978-79",
        "D.Walker",
        "7-24"
      ],
      [
        "1979-80",
        "J.Dickie",
        "7-27"
      ],
      [
        "1979-80",
        "D.Walker",
        "7-23"
      ],
      [
        "1980-81",
        "P.Hills",
        "7-33"
      ],
      [
        "1982-83",
        "G.Payne",
        "8-21, 7-21"
      ],
      [
        "1982-83",
        "D.Walker",
        "7-68"
      ],
      [
        "1983-84",
        "G.Cambridge",
        "8-39, 7-52"
      ],
      [
        "1983-84",
        "J.Knowles",
        "8-29"
      ],
      [
        "1984-85",
        "G.Stokes",
        "9-28, 9-44"
      ],
      [
        "1985-86",
        "J.Finnie",
        "7-9"
      ],
      [
        "1985-86",
        "C.McNally",
        "8-37, 7-54"
      ],
      [
        "1985-86",
        "W.Price",
        "7-18"
      ],
      [
        "1986-87",
        "G.Payne",
        "7-16, 7-30"
      ],
      [
        "1987-88",
        "G.Cambridge",
        "7-32, 7-37"
      ],
      [
        "1987-88",
        "G.Payne",
        "7-12"
      ],
      [
        "1990-91",
        "E.Vincent",
        "8-24"
      ],
      [
        "1991-92",
        "J.Moyle",
        "7-44"
      ],
      [
        "1991-92",
        "W.Price",
        "8-48"
      ],
      [
        "1992-93",
        "A.Price",
        "7-13"
      ],
      [
        "1994-95",
        "J.Scott",
        "7-48"
      ],
      [
        "1994-95",
        "N.Blair",
        "8-12"
      ],
      [
        "1995-96",
        "G.Payne",
        "7-13"
      ],
      [
        "1998-99",
        "B.Hart",
        "8-7"
      ],
      [
        "1999-2000",
        "B.Scott",
        "7-58"
      ],
      [
        "2001-02",
        "H.Finch",
        "7-17"
      ],
      [
        "2002-03",
        "H.Finch",
        "7-58"
      ],
      [
        "2003-04",
        "S.Godman",
        "7-15"
      ],
      [
        "2006-07",
        "S.Godman",
        "7-40"
      ],
      [
        "2006-07",
        "D.Lobb",
        "7-30"
      ],
      [
        "2009-10",
        "D.Lobb",
        "8-34"
      ],
      [
        "2009-10",
        "M.Sumner",
        "7-31"
      ],
      [
        "2011-12",
        "M.Johnston",
        "7-15"
      ],
      [
        "2011-12",
        "J.Gilbert",
        "7-10"
      ],
      [
        "2013-14",
        "D.Lobb",
        "9-15"
      ],
      [
        "2013-14",
        "B.Soper",
        "7-41"
      ],
      [
        "2014-15",
        "J.Gilbert",
        "7-19"
      ],
      [
        "2016-17",
        "D.Lobb",
        "7-32, 7-42"
      ],
      [
        "2018-19",
        "T.Cardno",
        "7-7"
      ],
      [
        "2018-19",
        "D.Lobb",
        "7-42"
      ],
      [
        "2021-22",
        "S.Smith",
        "7-38"
      ],
      [
        "2021-22",
        "J.Gilbert",
        "7-18"
      ]
    ]
  },
  "Presidents": {
    "name": "Presidents",
    "gid": "210667265",
    "header": [
      "Years",
      "Name"
    ],
    "items": [
      [
        "1930-36",
        "A.HARROWAY"
      ],
      [
        "1936-38",
        "T.TOMKINS"
      ],
      [
        "1938-40",
        "A.E.BERRY (SNR.)"
      ],
      [
        "1940-46",
        "T.M.GRANT"
      ],
      [
        "1946-54",
        "A.GRANT"
      ],
      [
        "1954-55",
        "B.G.KEENE"
      ],
      [
        "1955-62",
        "A.GRANT"
      ],
      [
        "1962-63",
        "W.FISHER"
      ],
      [
        "1963-64",
        "T.CASSIDY"
      ],
      [
        "1964-66",
        "B.KENWORTHY"
      ],
      [
        "1966-68",
        "A.GRANT"
      ],
      [
        "1968-69",
        "T.CASSIDY"
      ],
      [
        "1969-76",
        "P.GRAHAM"
      ],
      [
        "1976-79",
        "W.PRICE"
      ],
      [
        "1979-81",
        "A.DUNBAR"
      ],
      [
        "1981-85",
        "T.D.KEENE"
      ],
      [
        "1985-91",
        "P.A.HESSIAN"
      ],
      [
        "1991-92",
        "D.A.GALLIVEN"
      ],
      [
        "1992-98",
        "G.S.CAMBRIDGE"
      ],
      [
        "1998-99",
        "H.WILLIAMS"
      ],
      [
        "1999-2000",
        "T.KEENE"
      ],
      [
        "2002-04",
        "J.MOYLE"
      ],
      [
        "2004-05",
        "G.PAYNE"
      ],
      [
        "2005-08",
        "J.MOYLE"
      ],
      [
        "2008-10",
        "S.ROBINSON"
      ],
      [
        "2010-",
        "J.MOYLE"
      ]
    ]
  }
}
};
