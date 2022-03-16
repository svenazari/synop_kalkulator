# synop_kalkulator
    UPUTE ZA KORIŠTENJE:
    Prije prvog korištenja treba prilagoditi varijable u datoteci varijable.js.
    Većinu varijabli treba prepisati iz ditalnog dnevnika motrenja (Pomoć -> Podaci o postaji), a one koje se ne nalaze u digitalnom dnevniku motritelj upisuje vezano uz tip uređaja i mjerne jedinice koje se koriste u radu.
    Ostale datoteke NE MJENJATI!
    Program radi u interent pregledniku. Preporuka je na uređaju na kojem će se koristiti program uvjek imati najnoviju verziju internet preglednika.

    UPUTE ZA KORIŠTENJE (verzija za mobitele):
    Prije prvog korištenja treba prilagoditi varijable u dijelu "varijable koje se prilagođavaju postaji".
    Većinu varijabli treba prepisati iz ditalnog dnevnika motrenja (Pomoć -> Podaci o postaji), a one koje se ne nalaze u digitalnom dnevniku motritelj upisuje vezano uz tip uređaja i mjerne jedinice koje se koriste u radu.
    Ostatak koda NE MJENJATI!
    Program radi u interent pregledniku. Preporuka je na uređaju na kojem će se koristiti program uvjek imati najnoviju verziju internet preglednika.

    O PROGRAMU:
    Verzija 2.8.0 računa temperaturu rostišta, stvarni tlak vodene pare, relativnu vlagu zraka te svodi tlak na 0°C i na srednju morsku razinu (u planu je dodavanje mogućnosti da umjesto svođenja na SMR program računa visinu izobarne plohe).
    Aplikacija također izračunava synop kodove te šifrira prvi odjeljak synop izvještaja, temperaturu mora u drugom odjeljku te 1., 2., 3. ,4., 6. i 7. grupu trećeg odjeljka, grupe za insolaciju, grupe oblačnih slojeva, specijalnu grupu za novi snijeg te specijalne grupe za brzinu i smijer udara vjetra većeg ili jednakog 17 m/s i specijlne grupe za stanje mora te u izvještaj uključuje i ostale specijalne grupe te odjeljak 4 koje motritelj sam unosi.

    ŠTO JE NOVO (cijelu povijest verzija pogledati na dnu koda):
    Dodani padajući meni-i za pomoć pri štifriranju grupe za pojave.

    IZJAVA O ODRICANJU OD ODGOVORNOSTI:
    Ovaj program je napisan kao pomoćno sredstvo za dobivanje izračunatih vrijednosti i synop izvještaja u slučaju kvara računalne opreme ili nestanka struje na meteorološkoj postaji.
    Program trebaju koristiti školovani motritelji koji znaju kako kako trebaju izgledati dobiveni podaci i synop izvještaj kako bi mogli ispraviti dobiveni podatak u slučaju greške u programu.
    Tvorac programa ne preuzima odgovornost za eventualnu štetu nastalu korištenjem ovog programa.
    
    POVIJEST VERZIJA:
    2.8.0 - Dodani padajući meni-i za pomoć pri štifriranju grupe za pojave.
    2.7.5 - Ispravak koda za provjeru visine niskih i srednjih oblaka.
    2.7.4 - Ispravak kontrole unosa vjetra.
    2.7.3 - Ispravak manjih bugova.
    2.7.2 - Manja podešavanja rada aplikacije.
    2.7.1 - Ispravljeno izvještavanje 7. grupe u slučaju ww = 00-03 i W1,2 = 0-2.
    2.7.0 - Dodano šifriranje grupa za insolaciju u 3. odjeljku.
    2.6.2 - Program izbacuje upozorenje ako mjereni ili opažani smjer vjetra nije ispravno upisan.
    2.6.1 - Upozorenje na krivo upisan podatak o vlazi zraka ako se izvještava vlaga zraka umjesto mokre temperature.
    2.6.0 - Mogućnost da se upisuje vlaga zraka umjesto mokre temperature. (Potrebno namjestiti u postavkama.)
    Ispravljeno šifriranje 8. grupe u slučaju kad se ne vide oblaci.
    2.5.0 - Dodatak za odjeljak 4.
    Manje prilagodbe u kodu.
    Program pokazuje u kojem se terminu treba predati SYNOP izvještaj (za postaje DHMZ-a).
    2.4.0 - Dodano šifriranje specijalnih grupa za stanje mora (potrebno u postavkama namjestiti primorsku postaju).
    2.3.1 - Manje vizualne promjene.
    2.3.0 - Šifriranje oborine u 3. odjeljku.
    Šifriranje oblačnih slojeva.
    2.2.0 - Dodano šifriranje Ex (nije bitno za synop, ali može biti korisno pri ručnom šifriranju HRKLIMA izvještaja).
    Dodana grupa 9GGgg.
    Dodana mogućnost šifriranja maksimalnog udara vjetra većeg ili jednakog 17 m/s za razdoblje W1W2.
    Manje vizualne promjene.
    Manje promjene u kodu programa.
    2.1.2 - Ispravljena greška zbog koje je program 00 UTC pokazivao kao 0 UTC.
    Novi snijeg će biti šifriran samo ako snijeg pokriva više od polovine tla.
    Program prikazuje u kojim jedinicama se upisuje očitanje barometra.
    2.1.1 - Program od sad izbacuje upozorenje ako je za visinu novog snijega upisano više od 99 cm.
    Manje vizualne promjene.
    2.1.0 - Program od sada šifrira i novi snijeg.
    Manje vizualne promjene u svrhu integriranja opcije za upis novog snijega.
    Od sada pomoć pri upisu u određena polja se može dobiti tako da se tapne na naziv polja.
    Mogućnost promjene broja bloka prilikom editiranja u editoru teksta.
    2.0.3 - Ispravljeno računanje 3. grupe u 3. odjeljku.
    Program sada izbacuje ispravnu vrijednost grupe u slučaju da nije poznata minimalna temperatura na 5 cm iznad tla.
    2.0.2 - Ispravljeno računanje 4. grupe u 3. odjeljku.
    U slučaju da je stanje tla pod snijegom 1 ili 5, program od sada tu grupu ispisuje kao "41998" ili "45998", odnosno izvještava snijeg u krpama.
    U slučaju visine snijega manje od 0.5 cm, program će grupu šrifrirati kao "997".
    2.0.1 - Ispravljen kod za računanje 7. grupe u 3. odjeljku.
    U slučaju oborine u tragovima grupa program sada ispisuje grupu "79999", a u slučaju oborine 999,8 mm ili veće, program ispisuje "79998".
    2.0.0 - Promjenjen vizualni izgled aplikacije.
    Promjene u kodu aplikacije.
    Aplikacija ne prikazuje polje za unos temperature mora ako postaja nije primorska postaja. U slučaju da se radi o primorskoj postaji, polje je vidljivo u svakom terminu, ali ako podatak nije unesen, u synop izvještaju je izostavljena grupa za temperaturu mora te cijeli drugi odjeljak.
    Polja za unos maksimalne temperature, minimalne temperature, minimalne temperature na 5 cm iznad tla te visine snijega i oborine su prikazani samo u terminima kada se ti podaci izvještavaju u synop izvještaju.
    Aplikacija izbacuje upozorenja ako nisu uneseni bitni podaci ili su podaci uneseni pogrešno.
    1.0.0 - Aplikacija računa stvarni tlak vodene pare, temperaturu rosišta i relativnu vlagu zraka te svodi tlak na 0°C i na SMR. 
    Također, aplikacija izračunava synop kodove te šifrira synop prvi odjeljak synop izvještaja, temperaturu mora u drugom odjeljku te 1., 2., 3. ,4. i 7. grupu        trećeg odjeljka i u izvještaj uključuje i specijalne grupe koje motritelj sam unosi.
    Vizualni izgled aplikacije nije vezan za izgled dnevnika.
