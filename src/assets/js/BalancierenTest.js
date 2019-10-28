/*

*/

var testobject = { age: 16, gender: 'w', balance: [8, 8, 8, 8, 8, 8] };

console.log(Balance(testobject));

function Balance(bData) {
  let bpoints;
  let steps = bData.balance.reduce((a, b) => a + b);
  console.log(steps);

  if (bData.gender == 'w') {
    if (bData.age >= 17) {
      if (steps < 10) bpoints = 70;
      else if (steps == 10) bpoints = 71;
      else if (steps > 41) bpoints = steps + 65;
      else if (steps > 31) bpoints = steps + 64;
      else if (steps > 20) bpoints = steps + 63;
      else if (steps > 10) bpoints = steps + 62;
    } else if (bData.age == 16) {
      if (steps < 9) bpoints = 70;
      else if (steps > 39) bpoints = steps + 65;
      else if (steps > 28) bpoints = steps + 64;
      else if (steps > 17) bpoints = steps + 63;
      else if (steps >= 9) bpoints = steps + 62;
    } else if (bData.age >= 14) {
      if (steps < 9) bpoints = 70;
      else if (steps == 9) bpoints = 71;
      else if (steps > 40) bpoints = steps + 66;
      else if (steps > 30) bpoints = steps + 65;
      else if (steps > 19) bpoints = steps + 64;
      else if (steps > 9) bpoints = steps + 63;
    }
  }

  return bpoints;
}

balWerte = [
  {
    Points: '69.988603988604',
    steps: '0.00',
  },
  {
    Points: '71.128205128205',
    steps: '10.00',
  },
  {
    Points: '73.407407407407',
    steps: '11.00',
  },
  {
    Points: '73.977207977208',
    steps: '12.00',
  },
  {
    Points: '75.116809116809',
    steps: '13.00',
  },
  {
    Points: '76.25641025641',
    steps: '14.00',
  },
  {
    Points: '77.396011396011',
    steps: '15.00',
  },
  {
    Points: '77.965811965812',
    steps: '16.00',
  },
  {
    Points: '79.105413105413',
    steps: '17.00',
  },
  {
    Points: '80.245014245014',
    steps: '18.00',
  },
  {
    Points: '81.384615384615',
    steps: '19.00',
  },
  {
    Points: '81.954415954416',
    steps: '20.00',
  },
  {
    Points: '84.233618233618',
    steps: '21.00',
  },
  {
    Points: '85.373219373219',
    steps: '22.00',
  },
  {
    Points: '85.94301994302',
    steps: '23.00',
  },
  {
    Points: '87.082621082621',
    steps: '24.00',
  },
  {
    Points: '88.222222222222',
    steps: '25.00',
  },
  {
    Points: '89.361823361823',
    steps: '26.00',
  },
  {
    Points: '89.931623931624',
    steps: '27.00',
  },
  {
    Points: '91.071225071225',
    steps: '28.00',
  },
  {
    Points: '92.210826210826',
    steps: '29.00',
  },
  {
    Points: '93.350427350427',
    steps: '30.00',
  },
  {
    Points: '94.490028490028',
    steps: '31.00',
  },
  {
    Points: '96.19943019943',
    steps: '32.00',
  },
  {
    Points: '96.769230769231',
    steps: '33.00',
  },
  {
    Points: '98.478632478632',
    steps: '34.00',
  },
  {
    Points: '99.048433048433',
    steps: '35.00',
  },
  {
    Points: '100.18803418803',
    steps: '36.00',
  },
  {
    Points: '101.32763532764',
    steps: '37.00',
  },
  {
    Points: '101.89743589744',
    steps: '38.00',
  },
  {
    Points: '103.03703703704',
    steps: '39.00',
  },
  {
    Points: '104.17663817664',
    steps: '40.00',
  },
  {
    Points: '105.31623931624',
    steps: '41.00',
  },
  {
    Points: '107.02564102564',
    steps: '42.00',
  },
  {
    Points: '107.59544159544',
    steps: '43.00',
  },
  {
    Points: '109.30484330484',
    steps: '44.00',
  },
  {
    Points: '110.44444444444',
    steps: '45.00',
  },
  {
    Points: '111.01424501425',
    steps: '46.00',
  },
  {
    Points: '112.15384615385',
    steps: '47.00',
  },
  {
    Points: '113.29344729345',
    steps: '48.00',
  },
  {
    Points: '16',
    steps: '16',
  },
  {
    Points: '69.988603988604',
    steps: '0.00',
  },
  {
    Points: '71.128205128205',
    steps: '9.00',
  },
  {
    Points: '72.267806267806',
    steps: '10.00',
  },
  {
    Points: '73.407407407407',
    steps: '11.00',
  },
  {
    Points: '73.977207977208',
    steps: '12.00',
  },
  {
    Points: '75.116809116809',
    steps: '13.00',
  },
  {
    Points: '76.25641025641',
    steps: '14.00',
  },
  {
    Points: '77.396011396011',
    steps: '15.00',
  },
  {
    Points: '77.965811965812',
    steps: '16.00',
  },
  {
    Points: '79.105413105413',
    steps: '17.00',
  },
  {
    Points: '81.384615384615',
    steps: '18.00',
  },
  {
    Points: '81.954415954416',
    steps: '19.00',
  },
  {
    Points: '83.094017094017',
    steps: '20.00',
  },
  {
    Points: '84.233618233618',
    steps: '21.00',
  },
  {
    Points: '85.373219373219',
    steps: '22.00',
  },
  {
    Points: '85.94301994302',
    steps: '23.00',
  },
  {
    Points: '87.082621082621',
    steps: '24.00',
  },
  {
    Points: '88.222222222222',
    steps: '25.00',
  },
  {
    Points: '89.361823361823',
    steps: '26.00',
  },
  {
    Points: '89.931623931624',
    steps: '27.00',
  },
  {
    Points: '91.071225071225',
    steps: '28.00',
  },
  {
    Points: '93.350427350427',
    steps: '29.00',
  },
  {
    Points: '94.490028490028',
    steps: '30.00',
  },
  {
    Points: '95.059829059829',
    steps: '31.00',
  },
  {
    Points: '96.19943019943',
    steps: '32.00',
  },
  {
    Points: '96.769230769231',
    steps: '33.00',
  },
  {
    Points: '98.478632478632',
    steps: '34.00',
  },
  {
    Points: '99.048433048433',
    steps: '35.00',
  },
  {
    Points: '100.18803418803',
    steps: '36.00',
  },
  {
    Points: '101.32763532764',
    steps: '37.00',
  },
  {
    Points: '101.89743589744',
    steps: '38.00',
  },
  {
    Points: '104.17663817664',
    steps: '39.00',
  },
  {
    Points: '105.31623931624',
    steps: '40.00',
  },
  {
    Points: '106.45584045584',
    steps: '41.00',
  },
  {
    Points: '107.02564102564',
    steps: '42.00',
  },
  {
    Points: '107.59544159544',
    steps: '43.00',
  },
  {
    Points: '109.30484330484',
    steps: '44.00',
  },
  {
    Points: '110.44444444444',
    steps: '45.00',
  },
  {
    Points: '111.01424501425',
    steps: '46.00',
  },
  {
    Points: '112.15384615385',
    steps: '47.00',
  },
  {
    Points: '113.29344729345',
    steps: '48.00',
  },
  {
    Points: '15',
    steps: '15.00',
  },
  {
    Points: '69.988603988604',
    steps: '0.00',
  },
  {
    Points: '71.128205128205',
    steps: '9.00',
  },
  {
    Points: '72.267806267806',
    steps: '10.00',
  },
  {
    Points: '73.407407407407',
    steps: '11.00',
  },
  {
    Points: '73.977207977208',
    steps: '12.00',
  },
  {
    Points: '75.116809116809',
    steps: '13.00',
  },
  {
    Points: '77.396011396011',
    steps: '14.00',
  },
  {
    Points: '77.965811965812',
    steps: '15.00',
  },
  {
    Points: '79.105413105413',
    steps: '16.00',
  },
  {
    Points: '80.245014245014',
    steps: '17.00',
  },
  {
    Points: '81.384615384615',
    steps: '18.00',
  },
  {
    Points: '81.954415954416',
    steps: '19.00',
  },
  {
    Points: '83.094017094017',
    steps: '20.00',
  },
  {
    Points: '84.233618233618',
    steps: '21.00',
  },
  {
    Points: '85.373219373219',
    steps: '22.00',
  },
  {
    Points: '85.94301994302',
    steps: '23.00',
  },
  {
    Points: '88.222222222222',
    steps: '24.00',
  },
  {
    Points: '89.361823361823',
    steps: '25.00',
  },
  {
    Points: '89.931623931624',
    steps: '26.00',
  },
  {
    Points: '91.071225071225',
    steps: '27.00',
  },
  {
    Points: '92.210826210826',
    steps: '28.00',
  },
  {
    Points: '93.350427350427',
    steps: '29.00',
  },
  {
    Points: '94.490028490028',
    steps: '30.00',
  },
  {
    Points: '95.059829059829',
    steps: '31.00',
  },
  {
    Points: '96.19943019943',
    steps: '32.00',
  },
  {
    Points: '96.769230769231',
    steps: '33.00',
  },
  {
    Points: '99.048433048433',
    steps: '34.00',
  },
  {
    Points: '100.18803418803',
    steps: '35.00',
  },
  {
    Points: '101.32763532764',
    steps: '36.00',
  },
  {
    Points: '101.89743589744',
    steps: '37.00',
  },
  {
    Points: '103.03703703704',
    steps: '38.00',
  },
  {
    Points: '104.17663817664',
    steps: '39.00',
  },
  {
    Points: '105.31623931624',
    steps: '40.00',
  },
  {
    Points: '106.45584045584',
    steps: '41.00',
  },
  {
    Points: '107.02564102564',
    steps: '42.00',
  },
  {
    Points: '107.59544159544',
    steps: '43.00',
  },
  {
    Points: '109.30484330484',
    steps: '44.00',
  },
  {
    Points: '111.01424501425',
    steps: '45.00',
  },
  {
    Points: '112.15384615385',
    steps: '46.00',
  },
  {
    Points: '113.29344729345',
    steps: '47.00',
  },
  {
    Points: '114.43304843305',
    steps: '48.00',
  },
  {
    Points: '14',
    steps: '14',
  },
  {
    Points: '69.988603988604',
    steps: '0.00',
  },
  {
    Points: '71.128205128205',
    steps: '9.00',
  },
  {
    Points: '73.407407407407',
    steps: '10.00',
  },
  {
    Points: '73.977207977208',
    steps: '11.00',
  },
  {
    Points: '75.116809116809',
    steps: '12.00',
  },
  {
    Points: '76.25641025641',
    steps: '13.00',
  },
  {
    Points: '77.396011396011',
    steps: '14.00',
  },
  {
    Points: '77.965811965812',
    steps: '15.00',
  },
  {
    Points: '79.105413105413',
    steps: '16.00',
  },
  {
    Points: '80.245014245014',
    steps: '17.00',
  },
  {
    Points: '81.384615384615',
    steps: '18.00',
  },
  {
    Points: '81.954415954416',
    steps: '19.00',
  },
  {
    Points: '84.233618233618',
    steps: '20.00',
  },
  {
    Points: '85.373219373219',
    steps: '21.00',
  },
  {
    Points: '85.94301994302',
    steps: '22.00',
  },
  {
    Points: '87.082621082621',
    steps: '23.00',
  },
  {
    Points: '88.222222222222',
    steps: '24.00',
  },
  {
    Points: '89.361823361823',
    steps: '25.00',
  },
  {
    Points: '89.931623931624',
    steps: '26.00',
  },
  {
    Points: '91.071225071225',
    steps: '27.00',
  },
  {
    Points: '92.210826210826',
    steps: '28.00',
  },
  {
    Points: '93.350427350427',
    steps: '29.00',
  },
  {
    Points: '94.490028490028',
    steps: '30.00',
  },
  {
    Points: '96.19943019943',
    steps: '31.00',
  },
  {
    Points: '96.769230769231',
    steps: '32.00',
  },
  {
    Points: '98.478632478632',
    steps: '33.00',
  },
  {
    Points: '99.048433048433',
    steps: '34.00',
  },
  {
    Points: '100.18803418803',
    steps: '35.00',
  },
  {
    Points: '101.32763532764',
    steps: '36.00',
  },
  {
    Points: '101.89743589744',
    steps: '37.00',
  },
  {
    Points: '103.03703703704',
    steps: '38.00',
  },
  {
    Points: '104.17663817664',
    steps: '39.00',
  },
  {
    Points: '105.31623931624',
    steps: '40.00',
  },
  {
    Points: '107.02564102564',
    steps: '41.00',
  },
  {
    Points: '107.59544159544',
    steps: '42.00',
  },
  {
    Points: '109.30484330484',
    steps: '43.00',
  },
  {
    Points: '110.44444444444',
    steps: '44.00',
  },
  {
    Points: '111.01424501425',
    steps: '45.00',
  },
  {
    Points: '112.15384615385',
    steps: '46.00',
  },
  {
    Points: '113.29344729345',
    steps: '47.00',
  },
  {
    Points: '114.43304843305',
    steps: '48.00',
  },
  {
    Points: '',
  },
];
