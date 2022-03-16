// varijable koje se prilagođavaju postaji (mjenjati u skladu za uputama u komentarima za svaku varijablu)
// podaci o postaji
var II = 14; //broj bloka
var iii = 240; //broj postaje
var h = 123; //nadmorska visina postaje [m]
var hb = 127.62; //nadmorska visina barometra [m]
var hsr = 250; //srednja nadmorska visina u krugu radiusa 150 km od postaje [m]
var GS = 45.817; //geografska širina postaje [0.001°]
var pk = 95; //postotak kopna u krugu radiusa 150 km
var db = 0; //dubina mora ispod postaje [m]
var dbs = 20; //srednja dubina mora ispod postaje u krugu od 150 km [m]
var ip = 0; //izobarna ploha (0 [SMR], 8 [850 hPa], 9 [925 hPa])
// vrste instrumenata
var bi1 = 1; //mjerne jedinice na barometru (1 [mmHg] ili 2 [hPa])
var bi2 = 2; //koriekcija po vrsti barometra (1, 2, 3, 4 ili 50)
// program izvještavanja
var tmox = 2; //primorska postaja (1 [da], 2 [ne])
var iW = 1; //jedinica brzine vjetra (0 - ocjenjeno [m/s], 1 - mjereno [m/s], 3 - ocjenjeno [kt], 4 mjereno [kt]
var brmot = 5; //broj motritelja na postaji (99 ako postaja nije na mreži DHMZ-a)
var utd = 1; //mokra temepratura [1] ili vlaga zraka [2]