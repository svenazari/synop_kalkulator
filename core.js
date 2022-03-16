function load () {
    var tww = document.getElementById("tw").value;
    // varijable vremena
    var d = new Date();
    var day = d.getDate();
    var day_displ = String('00' + day).slice(-2); // datum za ispis
    var day_utc = d.getUTCDate(); // datum za synop
    var month = d.getMonth() + 1;
    var month_displ = String ('00' + month).slice(-2); // mjesec za ispis
    var year = d.getFullYear(); // godina za ispis
    var hour = d.getHours();
    var hour_displ = String('00' + hour).slice(-2); // sat za ispis
    var minutes = d.getMinutes();
    var minutes_displ = String('00' + minutes).slice(-2); // minute za ispis
    // uvjeti
    if (minutes > 49) { // sat za synop
      hour_utc = d.getUTCHours() + 1;
      hour_utc1 = String('00' + hour_utc).slice(-2); 
    } else {
      hour_utc = d.getUTCHours();
      hour_utc1 = String('00' + hour_utc).slice(-2);
    }
    if (hour_utc1 == "24") { //sat synop - nastavak
      hour_utc_displ = "00"
    } else {
      hour_utc_displ = hour_utc1
    }
    if (hour_utc_displ == "00") {
      day_utc1 = day_utc + 1;
      day_utc_displx = String('00' + day_utc1).slice(-2); 
    } else {
      day_utc1 = day_utc;
      day_utc_displx = String('00' + day_utc1).slice(-2); 
    }
    if (bi1 == 1) {
      unt = "mmHg"
    } else {
      unt = "hPa"
    }
    if (hour_utc_displ == "06") {
      Re = " (18 UTC - 06 UTC)"
    } else if (hour_utc_displ == "18") {
      Re = " (06 UTC - 18 UTC)"
    } else if (hour_utc_displ == "00") {
      Re = " (18 UTC - 00 UTC)"
    } else if (hour_utc_displ == "12") {
      Re = " (06 UTC - 12 UTC)"
    } else {
      Re = " (Ne izvještava se)"
      document.getElementById('oborina').setAttribute("style", "display:none");
    }
    if (hour_utc_displ == "06") {
      ReSw = " (24 sata)"
    } else if (hour_utc_displ == "18") {
      ReSw = " (12 sati)"
    } else {
      ReSw = ''
    }
    document.getElementById("ReSw").innerHTML = ReSw;
    if (hour_utc_displ !== "18") {
      document.getElementById('max').setAttribute("style", "display:none");
    } else {
      document.getElementById('max').setAttribute("style", "display:block");
    }
    if (hour_utc_displ !== "06") {
      document.getElementById('min').setAttribute("style", "display:none");
    } else {
      document.getElementById('min').setAttribute("style", "display:block");
    }
    if (hour_utc_displ == "06") {
      document.getElementById('sss').setAttribute("style", "display:block");
    } else if (hour_utc_displ == "18") {
      document.getElementById('sss').setAttribute("style", "display:block");
    } else {
      document.getElementById('sss').setAttribute("style", "display:none");
    }
    if (hour_utc_displ == "06") {
      document.getElementById('r24').setAttribute("style", "display:block");
    } else if (hour_utc_displ == "12") {
      document.getElementById('r24').setAttribute("style", "display:block");
    } else {
      document.getElementById('r24').setAttribute("style", "display:none");
    }
    if (tmox == "2" || tww == '') {
      document.getElementById("div").setAttribute("style", "display:none");
    } else {
      document.getElementById("div").setAttribute("style", "display:block");
    }
    if (tmox == "2") {
      document.getElementById("more").setAttribute("style", "background-color:black");
    } else {
      document.getElementById("more").setAttribute("style", "background-color:turquoise");
    }
    if (tmox == "2") {
      document.getElementById("more2").setAttribute("style", "background-color:black");
    } else {
      document.getElementById("more2").setAttribute("style", "background-color:turquoise");
    }
    if (tmox == "2") {
      document.getElementById("more3").setAttribute("style", "display:none");
    } else {
      document.getElementById("more3").setAttribute("style", "display:block");
    }
    if (tmox == "2") {
      document.getElementById("more4").setAttribute("style", "display:none");
    } else {
      document.getElementById("more4").setAttribute("style", "display:block");
    }
    if (utd == "1") {
      utdx = "T'"
    } else if (utd == "2") {
      utdx = "U"
      document.getElementById("tddx").setAttribute("style", "background-color:black");
      document.getElementById("tddx1").setAttribute("style", "background-color:black");
      document.getElementById("vpdx").setAttribute("style", "background-color:black");
      document.getElementById("vpdx1").setAttribute("style", "background-color:black");
      document.getElementById("uuux").setAttribute("style", "background-color:black");
      document.getElementById("uuux1").setAttribute("style", "background-color:black");
      document.getElementById("tdd").setAttribute("style", "display:none");
      document.getElementById("vpd").setAttribute("style", "display:none");
      document.getElementById("uuu").setAttribute("style", "display:none");
      document.getElementById("tdddiv").setAttribute("style", "display:none");
      document.getElementById("vpddiv").setAttribute("style", "display:none");
      document.getElementById("uuudiv").setAttribute("style", "display:none");
    }
    if (hour_utc_displ == "06") {
      document.getElementById("suncedan").setAttribute("style", "display:inline");
    } else {
      document.getElementById("suncedan").setAttribute("style", "display:none");
    }
    document.getElementById("divix").setAttribute("style", "display:none");
    document.getElementById("divix4").setAttribute("style", "display:none");
    document.getElementById("utdxx").innerHTML = utdx;
    if ((tmox == "1" && hour_utc_displ == "00") || (tmox == "1" && hour_utc_displ == "03") || (tmox == "1" && hour_utc_displ == "06") || (tmox == "1" && hour_utc_displ == "09") || (tmox == "1" && hour_utc_displ == "12") || (tmox == "1" && hour_utc_displ == "15") || (tmox == "1" && hour_utc_displ == "18") || (tmox == "1" && hour_utc_displ == "21")) {
      document.getElementById("more5").setAttribute("style", "display:block");
    } else {
      document.getElementById("more5").setAttribute("style", "display:none");
    }
    if (ip == "0") {
      bxxx = "P"
    } else {
      bxxx = "H"
    }
    if (bi1 == "2") {
      mjed = "hPa"
    } else {
      mjed = "mmHg"
    }

    //zaglavlje programa i nulti odjeljak
  
    if (brmot == "2") {
      if (hour_utc_displ == "06" || hour_utc_displ == "07" || hour_utc_displ == "08" || hour_utc_displ == "09" || hour_utc_displ == "10" || hour_utc_displ == "11" || hour_utc_displ == "12" || hour_utc_displ == "13" || hour_utc_displ == "18" || hour_utc_displ == "19" || hour_utc_displ == "20"){
        time_date = "POSTAJA: " + II + iii + " | NADMORSKA VISINA: " + h + " m | DATUM: " + day_displ + "." + month_displ + "." + year + ". | VRIJEME: " + hour_displ + ":" + minutes_displ + " | TERMIN: " + hour_utc_displ + " UTC *"
      } else {
        time_date = "POSTAJA: " + II + iii + " | NADMORSKA VISINA: " + h + " m | DATUM: " + day_displ + "." + month_displ + "." + year + ". | VRIJEME: " + hour_displ + ":" + minutes_displ + " | TERMIN: " + hour_utc_displ + " UTC"
      } 
    } else if (brmot == "3") {
      if (hour_utc_displ == "03" || hour_utc_displ == "04" || hour_utc_displ == "05" ||hour_utc_displ == "06" || hour_utc_displ == "07" || hour_utc_displ == "08" || hour_utc_displ == "09" || hour_utc_displ == "10" || hour_utc_displ == "11" || hour_utc_displ == "12" || hour_utc_displ == "13" || hour_utc_displ == "18" || hour_utc_displ == "19" || hour_utc_displ == "20") {
        time_date = "POSTAJA: " + II + iii + " | NADMORSKA VISINA: " + h + " m | DATUM: " + day_displ + "." + month_displ + "." + year + ". | VRIJEME: " + hour_displ + ":" + minutes_displ + " | TERMIN: " + hour_utc_displ + " UTC *"
      } else {
        time_date = "POSTAJA: " + II + iii + " | NADMORSKA VISINA: " + h + " m | DATUM: " + day_displ + "." + month_displ + "." + year + ". | VRIJEME: " + hour_displ + ":" + minutes_displ + " | TERMIN: " + hour_utc_displ + " UTC"
      }
    } else if (brmot == "4") {
      if (hour_utc_displ == "00" ||hour_utc_displ == "03" || hour_utc_displ == "04" || hour_utc_displ == "05" ||hour_utc_displ == "06" || hour_utc_displ == "07" || hour_utc_displ == "08" || hour_utc_displ == "09" || hour_utc_displ == "10" || hour_utc_displ == "11" || hour_utc_displ == "12" || hour_utc_displ == "13" || hour_utc_displ == "14" || hour_utc_displ == "15" || hour_utc_displ == "18" || hour_utc_displ == "19" || hour_utc_displ == "20" || hour_utc_displ == "21") {
        time_date = "POSTAJA: " + II + iii + " | NADMORSKA VISINA: " + h + " m | DATUM: " + day_displ + "." + month_displ + "." + year + ". | VRIJEME: " + hour_displ + ":" + minutes_displ + " | TERMIN: " + hour_utc_displ + " UTC *"
      } else {
        time_date = "POSTAJA: " + II + iii + " | NADMORSKA VISINA: " + h + " m | DATUM: " + day_displ + "." + month_displ + "." + year + ". | VRIJEME: " + hour_displ + ":" + minutes_displ + " | TERMIN: " + hour_utc_displ + " UTC"
      }
    } else if (brmot >= 5 && brmot < 99) {
      if (hour_utc_displ == "00" ||hour_utc_displ == "03" || hour_utc_displ == "04" || hour_utc_displ == "05" ||hour_utc_displ == "06" || hour_utc_displ == "07" || hour_utc_displ == "08" || hour_utc_displ == "09" || hour_utc_displ == "10" || hour_utc_displ == "11" || hour_utc_displ == "12" || hour_utc_displ == "13" || hour_utc_displ == "14" || hour_utc_displ == "15" || hour_utc_displ == "16" || hour_utc_displ == "17" || hour_utc_displ == "18" || hour_utc_displ == "19" || hour_utc_displ == "20" || hour_utc_displ == "21") {
        time_date = "POSTAJA: " + II + iii + " | NADMORSKA VISINA: " + h + " m | DATUM: " + day_displ + "." + month_displ + "." + year + ". | VRIJEME: " + hour_displ + ":" + minutes_displ + " | TERMIN: " + hour_utc_displ + " UTC *"
      } else {
        time_date = "POSTAJA: " + II + iii + " | NADMORSKA VISINA: " + h + " m | DATUM: " + day_displ + "." + month_displ + "." + year + ". | VRIJEME: " + hour_displ + ":" + minutes_displ + " | TERMIN: " + hour_utc_displ + " UTC"
      }
    } else if (brmot == 99) {
      time_date = "POSTAJA: " + II + iii + " | NADMORSKA VISINA: " + h + " m | DATUM: " + day_displ + "." + month_displ + "." + year + ". | VRIJEME: " + hour_displ + ":" + minutes_displ + " | TERMIN: " + hour_utc_displ + " UTC"
    } else {
      alert ("Neispravan broj motritelja na postaji!");
      time_date = "POSTAJA: " + II + iii + " | NADMORSKA VISINA: " + h + " m | DATUM: " + day_displ + "." + month_displ + "." + year + ". | VRIJEME: " + hour_displ + ":" + minutes_displ + " | TERMIN: " + hour_utc_displ + " UTC"
    }
    var odjeljak0 = "AAXX" + " " + day_utc_displx + hour_utc_displ + iW + " " + II + iii;
    document.getElementById("timedate").innerHTML = time_date;
    document.getElementById("bxxx").innerHTML = bxxx;
    document.getElementById("Re").innerHTML = Re;
    document.getElementById("mjed").innerHTML = mjed;
    document.getElementById("odjeljak0").innerHTML = odjeljak0;
    return odjeljak0;
  }

  //vidljivost

  function vidljivost () {
    var VVX = document.getElementById("km").value; //vidljivost
    if (VVX == "") {
      alert("Potrebno upisati vidljivost!");
      VVX1 = "//";
    } else {
      if (VVX < 0.1) {
        VV = 00;
      } else if (VVX >= 0.1 && VVX <= 5) {
        VV = VVX * 10;
      } else if (VVX > 5 && VVX <= 30) {
        VVY = parseFloat(VVX)
        VV = VVY + 50;
      } else if (VVX > 30 && VVX < 35) {
        VV = 80;
      } else if (VVX >= 35 && VVX <= 70) {
        VV = ((VVX/5) + 74).toFixed(0);
      } else {
        VV = 89;
      }
      var VVs = String(('00' + VV).slice(-2));
      if (VVX == '') {
        VVsq = "//";
      } else {
        VVsq = VVs;
      }
      document.getElementById("VVizr").innerHTML = VVsq;
      return VVsq;
    }
  }

  // ukupna naoblaka

  function naoblaka () {
    var NN10 = document.getElementById("nn").value; // naoblaka X/10
    if (NN10 == '' || NN10 > 10) {
      alert("Vrijednost naoblake treba biti od 0 do 10!");
    } else {
      var NN8 = (NN10 / 10 * 8).toFixed(0);
      return NN8;
    }
  }

  // visoki oblaci

  function visokiobl () {
    var NNN = document.getElementById("nn").value;
    var ch = document.getElementById("ch").value // šifra visokih oblaka
    if (NNN !== "0" && ch == '') {
      alert("Potrebno upisati vrijednost od 0 do 9 ili /")
    }
  }

  // srednji oblaci

  function srednjiobl () {
    var NNN = document.getElementById("nn").value;
    var cm = document.getElementById("cm").value // šifra srednjih oblaka
    if (NNN !== "0" && cm == '') {
      alert("Potrebno upisati vrijednost od 0 do 9 ili /");
    }
  }

  function srednjiosmine () {
    var NNN = document.getElementById("nn").value;
    var NNm10 = document.getElementById("nnm").value;
    if (NNN !== "0" && NNm10 == '') {
      alert("Potrebno je upisati količinu srednjih oblaka u desetinama ili / ako oblaci nisu vidljivi!");
    } else {
      NNm8 = (NNm10 / 10 * 8).toFixed(0);
    }
    return NNm8;
  }

  function srednjioblvis () {
    var NNN = document.getElementById("nn").value;
    var cm = document.getElementById("cm").value // šifra srednjih oblaka
    var kmm = document.getElementById("kmm").value; //visina podnice najnižeg oblaka [km]
    if (NNN !== "0" && cm == "/" && kmm == '') {
      hm = "/";
    } else if (NNN !== "0" && cm !== "0" && kmm == '') {
      alert ("Obavezno upisati visinu srednjih oblaka!")
    } else {
      if (kmm < 0.05){
        hm = 0;
      } else if (kmm < 0.1) {
        hm = 1;
      } else if (kmm < 0.2) {
        hm = 2;
      } else if (kmm < 0.3) {
        hm = 3;
      } else if (kmm < 0.6) {
        hm = 4;
      } else if (kmm < 1) {
        hm = 5;
      } else if (kmm < 1.5) {
        hm = 6;
      } else if (kmm < 2) {
        hm = 7;
      } else if (kmm < 2.5) {
        hm = 8;
      } else if (kmm >= 2.5) {
        hm = 9;
      } else {
        hm = "/";
      } 
    } 

    if (kmm == '') {
      hmq = ''
      hmq1 = 9;
    } else {
      hmq = hm;
      hmq1 = hm;
    }
    document.getElementById("hmizr").innerHTML = hmq;
    return hmq1;
  }

  // niski oblaci

  function niskiobl () {
    var NNN = document.getElementById("nn").value;
    var cl = document.getElementById("cl").value // šifra niskih oblaka
    if (NNN !== "0" && cl == '') {
      alert("Potrebno upisati vrijednost od 0 do 9 ili /");
    }
  }

  function niskiosmine () {
    var NNN = document.getElementById("nn").value;
    var NNl10 = document.getElementById("nnl").value;
    if (NNN !== "0" && NNl10 == '') {
      alert("Potrebno je upisati količinu niskih oblaka u desetinama ili / ako oblaci nisu vidljivi!");
    } else {
      NNl8 = (NNl10 / 10 * 8).toFixed(0);
    }
    return NNl8;
  }

  function niskioblvis () {
    var NNN = document.getElementById("nn").value;
    var cl = document.getElementById("cl").value // šifra niskih oblaka
    var kml = document.getElementById("kml").value; //visina podnice najnižeg oblaka [km]
    if (NNN !== "0" && cl == "/" && kml == '') {
      hl = "/";
    } else if (NNN !== "0" && cl !== "0" && kml == '') {
      alert ("Obavezno upisati visinu niskih oblaka!")
    } else {
      if (kml < 0.05){
        hl = 0;
      } else if (kml < 0.1) {
        hl = 1;
      } else if (kml < 0.2) {
        hl = 2;
      } else if (kml < 0.3) {
        hl = 3;
      } else if (kml < 0.6) {
        hl = 4;
      } else if (kml < 1) {
        hl = 5;
      } else if (kml < 1.5) {
        hl = 6;
      } else if (kml < 2) {
        hl = 7;
      } else if (kml < 2.5) {
        hl = 8;
      } else if (kml >= 2.5) {
        hl = 9;
      } else {
        hl = "/";
      }
    }

    if (kml == '') {
      hlq = ''
      hlq1 = 0;
    } else {
      hlq = hl;
      hlq1 = hl;
    }
    document.getElementById("hlizr").innerHTML = hlq;
    return hlq1;
  }

  // visina najnižih oblaka

  function najniziobl () {
    var cl = document.getElementById("cl").value; // šifra niskih oblaka
    if (cl == "/") {
      hnis = "/"
    } else {
      hnis = niskioblvis ();
    }
    var hsred = srednjioblvis ();
    if (hsred < hnis) {
      alert("Visina srednjih oblaka manja od visine niskih oblaka!")
    } else {
      if (hnis == "0") {
        hobl = hsred;
      } else if (hnis == "/") {
        hobl = "/"
      } else {
        hobl = Math.min(hsred, hnis)
      }
    }
    return hobl;
  }

  // vjetar

  function vjetarsmjer () { //smjer vjetra
    var dd = document.getElementById("dd").value;
    var DD = document.getElementById("DD").value;
    if (dd == '' && DD == '') {
      alert("Mora biti upisan podatak ili mjerenog ili opažanog smjera vjetra!");
    } else {
      if ( dd == '') {
        ddx = (DD / 32 * 36).toFixed(0);
        ddxd = String(('00' + ddx).slice(-2));
      } else {
        ddx = dd;
        ddxd = String(('00' + ddx).slice(-2));
      }
    }
    return ddxd;
  }

  function vjetarmerprov () {
    var dd = document.getElementById("dd").value;
    if (dd !== '') {
      if (dd < 0 || dd > 36) {
        alert ("Neispravno upisan mjereni smjer vjetra! Vrijednost mora biti od 0 do 36.")
      }
    }
  }
  
  function vjetaropprov () {
    var DD = document.getElementById("DD").value;
    if (DD !== '') {
      if (DD < 0 || DD > 32) {
        alert ("Neispravno upisan opažani smjer vjetra! Vrijednost mora biti od 0 do 32.")
      } else if (DD % 2 !== 0) {
        alert ("Upisuju se samo parni smjerovi!")
      }
    }
  }

  function vjetarbrzina () { //brzina vjetra
    var ff = document.getElementById("ff").value;
    var FF = document.getElementById("FF").value;
    if (ff == '' && FF == '') {
      alert("Mora biti unesen ili podatak o brzini vjetra ili podatak o jačini vjetra!");
    } else { 
      if (ff == '') {
        if (FF == 0) {
          ffxoi = 0
        } else if (FF == "1") {
          ffxoi = 1
        } else if (FF == "2") {
          ffxoi = 2
        } else if (FF == "3") {
          ffxoi = 4
        } else if (FF == "4") {
          ffxoi = 6
        } else if (FF == "5") {
          ffxoi = 9
        } else if (FF == "6") {
          ffxoi = 12
        } else if (FF == "7") {
          ffxoi = 16
        } else if (FF == "8") {
          ffxoi = 19
        } else if (FF == "9") {
          ffxoi = 23
        } else if (FF == "10") {
          ffxoi = 27
        } else if (FF == "11") {
          ffxoi = 31
        } else if (FF == "12") {
          ffxoi = 35
        } else {
          ffxoi = "/"
        }
      } else {
        ffxoi = ff;
      }
    }
    ffxoix = String(('00' + ffxoi).slice(-2));    
    return ffxoix;
  }

  function vjetarbrzprov () {
    var dd = document.getElementById("dd").value;
    var ff = document.getElementById("ff").value;
    if (dd !== '' && ff !== '') {
      if (dd !== "00" && ff == "0") {
        alert ("Smjer i brzina vjetra nisu usklađeni!")
      } else if (dd == "00" && ff !== "0") {
        alert ("Smjer i brzina vjetra nisu usklađeni!")
      }
    }
  }

  function vjetarjacprov () {
    var DD = document.getElementById("DD").value;
    var FF = document.getElementById("FF").value;
    if (DD !== '' && FF !== '') {
      if (DD !== "00" && FF == "0") {
        alert ("Opažani smjer i jačina vjetra nisu usklađeni!")
      } else if (DD == "00" && FF !== "0") {
        alert ("Opažani smjer i jačina vjetra nisu usklađeni!")
      }
    }
  }

  // stanje tla (Ex)

  function tlo () {
    var ess1 = document.getElementById("es").value;
    var ems1 = document.getElementById("em").value;

    if (ess1 == '') {
      ess1s = "/";
    } else {
      ess1s = ess1;
    }

    if (ems1 == '') {
      ems1s = "/";
    } else {
      ems1s = ems1;
    }

    if (ems1s == "0") {
      ex = 4
    } else if (ems1s == "1") {
      ex = 5
    } else if (ems1s == "2") {
      ex = 6
    } else if (ems1s == "3") {
      ex = 7
    } else if (ems1s == "4") {
      ex = 7
    } else if (ems1s == "5") {
      ex = 5
    } else if (ems1s == "6") {
      ex = 8
    } else if (ems1s == "7") {
      ex = 9
    } else if (ems1s == "8") {
      ex = 9
    } else if (ems1s == "9") {
      ex = 9
    } else if (ems1s == "/" && ess1s == "0") {
      ex = 0
    } else if (ems1s == "/" && ess1s == "1") {
      ex = 1
    } else if (ems1s == "/" && ess1s == "2") {
      ex = 2
    } else if (ems1s == "/" && ess1s == "3") {
      ex = 2
    } else if (ems1s == "/" && ess1s == "4") {
      ex = 3
    } else if (ems1s == "/" && ess1s == "5") {
      ex = 4
    } else if (ems1s == "/" && ess1s == "6") {
      ex = 0
    } else if (ems1s == "/" && ess1s == "7") {
      ex = 0
    } else if (ems1s == "/" && ess1s == "8") {
      ex = 0
    } else if (ems1s == "/" && ess1s == "9") {
      ex = 0
    } else {
      ex = "/"
    }
    document.getElementById("ex").innerHTML = ex;
  }

  // vlaga i tlak

  function vlagatlak () {
    var TS = document.getElementById("suhatemp").value;
    var TM = document.getElementById("mokratemp").value;
    var Tb = document.getElementById("barotemp").value;
    var b = document.getElementById("baroočitanje").value;
    // cijepanje mokre temperature
    TMs = TM.slice(0, TM.search(/\d/)); // slovo
    TMb = TM.replace(TMs, ''); // broj
    if (TMs == "L"){
      TMs1 = "L"
    } else if (TMs == "l") {
      TMs1 = "L"
    } else if (TMs == "V") {
      TMs1 = "V"
    } else if (TMs == "v") {
      TMs1 = "V"
    } else {
      TMs1 ="+"
    }
    // decimalna točka
    var TT = TS / 10;
    if (TMs1 == "V") {
      HT = TMb / -10
    } else if (TMs1 == "L") {
      HT = TMb / -10
    } else {
      HT = TMb /10
    }
    var TTB = Tb / 10; // temperatura na barometru
    var BBB = b / 10; // očitanje barometra
    //konstante
    //pozitivna temperatura
    p1 = 6.10780;
    p2 = 17.08085;
    p3 = 234.175;
    //negativna temperatura - voda
    pv1 = 6.10780;
    pv2 = 17.84362;
    pv3 = 245.425;
    //negativna temperatura - led
    pl1 = 6.10714;
    pl2 = 22.44294;
    pl3 = 272.440;
    //psihrometrijska konstanta
    pp1 = 0.000660 * (1 + 0.00115 * HT );
    pp2 = 0.000582;

    //koje konstante koristiti
    if (TMs1 == "V") {
      c = pp1
      c1 = pv1
      c2 = pv2
      c3 = pv3
    } else if (TMs1 == "L") {
      c = pp2
      c1 = pl1
      c2 = pl2
      c3 = pl3
    } else {
      c = pp1
      c1 = p1
      c2 = p2
      c3 = p3
    }

    //druge konstante
  
    e = 2.718282;
    if (bi1 == 1) {
      kortl = 1.333224
    } else if (bi1 == 2) {
      kortl = 1
    } else {
      kortl = 1.333224
    }
    var cb1 = 0.000163;
    if (bi2 == 1) {
      cb2 = 0.0
    } else if (bi2 == 2) {
      cb2 = 33.09
    } else if (bi2 == 3) {
      cb2 = 45.33
    } else if (bi2 == 4) {
      cb2 = 15.30
    } else {
      cb2 = 49.46
    }

    // tlak

    var ALFA = pk * 0.01;
    var KOS = Math.cos(2.0 * GS * 3.141593/180.0);
    var GF0 = 9.80616 * (1.-(0.0026373 * KOS)) + (0.0000059 * (Math.pow(KOS,2)));
    var GFHB = GF0 - 0.000003086 * hb + 0.000001118 * ALFA * (hb - hsr)- 0.00000688 * (1-ALFA) * (db - dbs);
    var P0 = BBB * kortl
    var P0_1 = P0 - (cb1 * (P0 + cb2) * TTB);
    var P0_final = P0_1 + P0 * (GFHB/9.80665 - 1.0);
    var P0_final1 = (P0_final).toFixed(1);
    var P0_final2 = P0_final1 * 10;
    if (P0_final1 < 1000) {
      P0P0P0P0 = String(P0_final1 * 10);
    } else {
      P0P0 = ((P0_final1 - 1000) * 10).toFixed(0);
      P0P0P0P0 = String('0000' + P0P0).slice(-4);
    }
    document.getElementById("P0P0P0P0").innerHTML = P0P0P0P0; // tlak 0°C

    var T_SMR = TT + (0.5 * hb / 100);
    var T_S = (TT + T_SMR) / 2;
    var hg = hb * 9.81;
    var RT = 286.9 * (T_S + 273.15);
    var hgRT = hg / RT;
    var k = Math.pow(e, hgRT) - 1;
    var dP = P0_final * k;
    var P_hPa = P0_final + dP;
    var P_hPaf = P_hPa.toFixed(1)
    if (P_hPa < 1000) {
      PPPP = (P_hPa * 10).toFixed(0);
    } else {
      PP = ((P_hPa - 1000) * 10).toFixed(0);
      PPPP = String('0000' + PP).slice(-4);
    }
    document.getElementById("PPPP").innerHTML = PPPP; // tlak SMR

    //vlaga
  
    if (utd == "1") {
      mi1 = c2 * HT / (c3 + HT); 
      mi2 = c2 * TT / (c3 + TT);
      SVPHT = c1 * Math.pow(e, mi1); //tlak zasićene vodene pare za mokru temperaturu
      SVPTT = c1 * Math.pow(e, mi2); //tlak zasićene vodene pare za suhu temperaturu
      VPp = SVPHT - c * P0_final * (TT - HT); //stvarni tlak vodene pare (e)
      VP = VPp.toFixed(1);
      VPD = VP * 10;
      //temperatura rosišta prije mora proći provjeru je li negativna ili pozitivna i onda se određuje temperatura rosišta
      TDp = p3 * Math.log(VPp / p1) / (p2 - Math.log(VPp / p1));
      TDn = pv3 * Math.log(VPp / pv1) / (pv2 - Math.log(VPp / pv1));
      if (TDp >= 0.0) {
        TDr = TDp
      } else {
        TDr = TDn
      }
      TD = TDr.toFixed(1); //temperatura rosište (td)
      TDD = TD * 10;
      mi3 = c2 * TDr / (c3 + TDr);
      SVPTD = c1 * Math.pow(e, mi3);
      UU = 100 * SVPTD / SVPTT;
      U = UU.toFixed(0); //vlaga zraka (U)
      document.getElementById("tdd").innerHTML = TDD;
      document.getElementById("vpd").innerHTML = VPD;
      document.getElementById("uuu").innerHTML = U;
      if (U < 0 || U > 100) {
        alert ("Nemoguća vlaga zraka! Provjerite unos mokre i suhe temperature zraka!")
      } else {
        return {
          P0_final2,
          P0P0P0P0,
          PPPP,
          TDD
        };
      }
    } else if (utd == "2") { 
      UUU = String('000' + TM).slice(-3);
      return {
        UUU,
        P0_final2,
        P0P0P0P0,
        PPPP,
      };
    }
  }

  //provjera kod upisa vlage

  function vlagaprov () {
    var vlag = document.getElementById("mokratemp").value;
    if (utd == "2"){
      if (vlag < 0 || vlag > 100) {
        alert ("Neispravno upisana vlaga zraka!")
      }
    }
  }

  //promjena tlaka

  function tlakprom () {
    var proms = document.getElementById("tlakp").value;
    var promsx = parseInt(proms);
    let vtprom = vlagatlak ();
    let tlakpred = vtprom.P0_final2;
    if (proms < 7000) {
      prom1 = promsx + 10000;
    } else {
      prom1 = promsx;
    }
    if (tlakpred < 7000) {
      tlakpred1 = tlakpred + 10000;
    } else {
      tlakpred1 = tlakpred;
    }
    tlakpr = Math.abs(prom1 - tlakpred1);
    tlakpr1 = String('000' + tlakpr).slice(-3);
    if (proms == '') {
      tlakpr2 = "///"
    } else {
      tlakpr2 = tlakpr1
    }
    document.getElementById("prom").innerHTML = tlakpr2;
    return tlakpr2;
  }

  function approvjera () {
    var approv = document.getElementById("appp").value;
    if (approv == ''){
      alert("Upisati šifru tendencije tlaka zraka!");
    } else if (approv < 0 || approv > 8) {
      alert ("Nispravna šifra tendencije tlaka! Mora biti u rasponu 0-8!")
    }
  }

  // oborina 

  function oborina () {
    var R = document.getElementById("R").value;
    var R3 = document.getElementById("RRR3").value;
    if (R == '') {
      if (hour_utc_displ == "00" || hour_utc_displ == "06" || hour_utc_displ == "12" || hour_utc_displ == "18") {
        Rs = 000;
        RsX = '';
      } else {
        Rs = '';
      }
    } else if (R < 10) {
      Rs = "99" + R;
      RsX = Rs;
    } else {
      Rs = (R / 10).toFixed(0)
      RsX = Rs;
    }
    Rs1 = String('000' + Rs).slice(-3);
    if (R3 == '') {
      Rs3 = '';
    } else if (R3 < 10) {
      Rs3 = "99" + R3;
    } else {
      Rs3 = (R3 / 10).toFixed(0)
    }
    Rs13 = String('000' + Rs3).slice(-3);
    if (hour_utc_displ == "06" || hour_utc_displ == "18") {
      tR = 2;
    } else if (hour_utc_displ == "00" || hour_utc_displ == "12") {
      tR = 1;
    } else {
      tR = 0;
    }
    if (Rs !== '' && Rs3 !== '') {
      iR = 0;
    } else if (Rs !== '' && Rs3 == '') {
      iR = 1;
    } else if (Rs == '' && Rs3 !== '') {
      iR = 2;
    } else if (Rs == '' && Rs3 == '') {
      iR = 4;
    }
    return {
      Rs1,
      Rs13,
      iR,
      tR
    };
  }

  // provjera novi snijeg

  function snijegnew_test (){
    var snijegnew25 = document.getElementById("ssnov").value; // novi snijeg
    snijeg25 = parseInt(snijegnew25);
    if (snijeg25 > 99){
      alert("Visina novog snijega mora biti manja od 100 cm!")
    } else {
      ssnov_bla = snijegnew25;
    }
  }

  //provjera smijera udara vjetra 

  function udar_vj_provjera () {
    var vj_prov = document.getElementById("ddxx").value;
    var vj_prov1 = document.getElementById("ffxx").value;
    if (vj_prov < 0 || vj_prov > 36) {
      alert ("Smijer vjetra se kreće od 00 do 36!")
    } else if (vj_prov1 !== '' && vj_prov == ''){
      alert ("Nedostaje podatak o smijeru udara vjetra!")
    } else if (vj_prov1 == '' && vj_prov !== ''){
      alert ("Nedostaje podatak o brzini udara vjetra!")
    }
  }

  // pojave padajući meni

  function pojavemenu () {
    wwww = document.getElementById("wwW1W2").value;
    var wwpad = document.getElementById("pojave_ww").value;
    var w1pad = document.getElementById("pojave_w1").value;
    var w2pad = document.getElementById("pojave_w2").value;
    if (wwpad !== '' && w1pad !== '' && w2pad !== '') {
      if (w1pad < w2pad) {
        popa = wwpad + w2pad + w1pad;
      } else  {
        popa = wwpad + w1pad + w2pad;
      }
    } else {
      popa = "////";
    }
    popaj = "7" + popa;
    if (wwww == '') {
      if (popa == "////") {
        document.getElementById("poj1").setAttribute("style", "display:block");
        document.getElementById("poj2").setAttribute("style", "display:none");
      } else {
        document.getElementById("poj1").setAttribute("style", "display:none");
        document.getElementById("poj2").setAttribute("style", "display:block");
      }
    } else {
      document.getElementById("poj1").setAttribute("style", "display:block");
      document.getElementById("poj2").setAttribute("style", "display:none");
    }
    document.getElementById("pojpad").innerHTML = popaj;
    return popaj;
  }

  // izračun synop izvještaja

  function synop () {
    var TSsyn = document.getElementById("suhatemp").value; // temperatura zraka
    var ap = document.getElementById("appp").value; // tendencija tlaka
    var poj = document.getElementById("wwW1W2").value; // pojave
    var chs = document.getElementById("ch").value; // visoki oblaci
    var cms = document.getElementById("cm").value; // srednji oblaci
    var cls = document.getElementById("cl").value; // niski oblaci
    var nnms = document.getElementById("nnm").value; // srednja naoblaka
    var nnls = document.getElementById("nnl").value; // niska naoblaka
    var tws = document.getElementById("tw").value; // temperatura vode
    var txs = document.getElementById("tx").value; // maksimalna temperatura
    var tns = document.getElementById("tn").value; // minimalna temperatura
    var ess = document.getElementById("es").value; // stanje tla
    var ems = document.getElementById("em").value; // stanje tla sa snijegom
    var tn5s = document.getElementById("tn5").value; // minimalna temperatura na 4 cm iznad tla
    var r24s = document.getElementById("R24").value; // oborina 24 sata
    var r24s1 = String('0000' + r24s).slice(-4);
    var snijegnov = document.getElementById("sssss").value; // količina snijega
    var snijegnew = document.getElementById("ssnov").value; // novi snijeg
    var spsp = document.getElementById("spspspsp").value; // posebne grupe
    var tR3 = document.getElementById("tR3").value; // trajanje oborine (3. odjeljak)
    var nschshs1 = document.getElementById("nschshs1").value; // oblaci po slojevima
    var nschshs2 = document.getElementById("nschshs2").value;
    var nschshs3 = document.getElementById("nschshs3").value;
    var nschshs4 = document.getElementById("nschshs4").value;
    var mores1 = document.getElementById("morestanje1").value; // stanje mora u bazenu
    var mores2 = document.getElementById("morestanje2").value; // stanje mora na otvorenom
    var vss = document.getElementById("vs").value; // vidljivost prema moru sa postaje
    var ss24 = document.getElementById("ss24").value; // insolacija 24 sata
    var ss1 = document.getElementById("ss1").value; // insolacija 1 sat
    var vid = vidljivost ();
    var NN8x = naoblaka ();
    var hob = najniziobl ();
    var ddxds = vjetarsmjer ();
    var ffxfs = vjetarbrzina ();
    var poja = pojavemenu ();
    let vt = vlagatlak ();
    let UU2 = vt.UUU;
    let PP = vt.PPPP;
    P0P01 = vt.P0P0P0P0;
    TD1 = vt.TDD;
    if (TD1 < 0) {
      sntd = 1;
      TD2 = TD1 * -1;
    } else {
      sntd = 0
      TD2 = TD1;
    }
    TD3 = String('000' + TD2).slice(-3);
    if (TSsyn < 0) {
      sntt = 1;
      TSsyn1 = TSsyn * -1;
    } else {
      sntt = 0;
      TSsyn1 = TSsyn;
    }
    TSsyn2 = String('000' + TSsyn1).slice(-3);

    if (utd == "1") {
      grupa2 = " 2" + sntd + TD3;
    } else if (utd == "2") {
      grupa2 = " 29" + UU2;
    }

    tpr = tlakprom ();

    if (poj == ''){
      if (poja == "7////" || poja == "700//" || poja == "701//" || poja == "702//" || poja == "703//" || poja == "70000" || poja == "70001" || poja == "70002" || poja == "70010" || poja == "70011" || poja == "70012" || poja == "70020" || poja == "70021" || poja == "70022" || poja == "70100" || poja == "70101" || poja == "70102" || poja == "70110" || poja == "70111" || poja == "70112" || poja == "70120" || poja == "70121" || poja == "70122" || poja == "70200" || poja == "70201" || poja == "70202" || poja == "70210" || poja == "70211" || poja == "70212" || poja == "70220" || poja == "70221" || poja == "70222" || poja == "70300" || poja == "70301" || poja == "70302" || poja == "70310" || poja == "70311" || poja == "70312" || poja == "70320" || poja == "70321" || poja == "70322") {
        IX = 2;
        grupa7 = '';
      } else {
        IX = 1
        grupa7 = " " + poja;
      }
    } else {
      if (poj == "00//" || poj == "01//" || poj == "02//" || poj == "03//" ||poj == "0000" || poj == "0001" || poj == "0002" || poj == "0010" || poj == "0011" || poj == "0012" || poj == "0020" || poj == "0021" || poj == "0022" || poj == "0100" || poj == "0101" || poj == "0102" || poj == "0110" || poj == "0111" || poj == "0112" || poj == "0120" || poj == "0121" || poj == "0122" || poj == "0200" || poj == "0201" || poj == "0202" || poj == "0210" || poj == "0211" || poj == "0212" || poj == "0220" || poj == "0221" || poj == "0222" || poj == "0300" || poj == "0301" || poj == "0302" || poj == "0310" || poj == "0311" || poj == "0312" || poj == "0320" || poj == "0321" || poj == "0322") {
        IX = 2;
        grupa7 = '';
      } else {
        IX = 1;
        grupa7 = " 7" + poj;
      }
    }

    if (nnls == "0") {
      nnlsx10 = nnms;
    } else {
      nnlsx10 = nnls;
    }
    nnlsx = (nnlsx10 / 10 * 8).toFixed(0);
    if (NN8x == "0" || (chs == "/" && cms == "/" && cls == "/")) {
      grupa8 = '';
    } else {
      grupa8 = " 8" + nnlsx + cls + cms + chs;
    }
    let obor = oborina ();
    let iRs = String(obor.iR);
    Rs1s = obor.Rs1;
    Rs1s3 = obor.Rs13;
    tRs = obor.tR;
    if (iRs == "2" || iRs == "4" ) {
      grupa6 = ''
    } else {
      grupa6 = " 6" + Rs1s + tRs;
    }
    if (iRs == "1" || iRs == "4" ) {
      grupa36 = '';
    } else {
      grupa36 = " 6" + Rs1s3 + tR3;
    }
      if (tws < 0) {
        snw = 1;
        tws1 = tws * -1;
      } else {
        snw = 0;
        tws1 = tws;
      }
      tws2 = String('000' + tws1).slice(-3);
      if (tmox == "2" || tws == '') {
        document.getElementById("div").setAttribute("style", "display:none");
      } else {
        document.getElementById("div").setAttribute("style", "display:block");
      }

    //grupa 9 - vrijeme izvještaja

    var gg = document.getElementById("GGgg").value
    if (gg == ''){
      grupa9 = '';
    } else {
      grupa9 = " 9" + gg;
    }

    // maksimalna temperatura

    if (txs < 0) {
      sntx = 1;
      txs1 = txs * -1;
    } else {
      sntx = 0;
      txs1 = txs;
    }
    txs2 = String('000' + txs1).slice(-3);
    if (txs == '') {
      grupa31 = ''
    } else {
      grupa31 = " 1" + sntx + txs2;
    }

    // minimalna temperatura

    if (tns < 0) {
      sntn = 1;
      tns1 = tns * -1;
    } else {
      sntn = 0;
      tns1 = tns;
    }
    tns2 = String('000' + tns1).slice(-3);
    if (tns == '') {
      grupa32 = ''
    } else {
      grupa32 = " 2" + sntn + tns2;
    }

    // minimalna temperatura na 5 cm iznad tla

    if (tn5s < 0) {
      tn5s1 = tn5s / -10;
    } else {
      tn5s1 = tn5s / 10;
    }
    tn5s2 = (tn5s1).toFixed(0);
    if (tn5s == '') {
      tn5s3 = "//";
    } else {
      tn5s3 = String('00' + tn5s2).slice(-2);
    }
    if (tn5s == ''){
      sntn5 = "/"
    } else if (tn5s < 0){
      sntn5 = 1;
    } else {
      sntn5 = 0;
    }
    if (ess == '') {
      ess1 = "/"
    } else {
      ess1 = String(ess);
    }
    if (hour_utc_displ == "06") {
      grupa33 = " 3" + ess1 + sntn5 + tn5s3;
    } else {
      grupa33 = '';
    }

    // snijeg

    var ems = document.getElementById("em").value;

    if (ems == '') {
      ems1 = "/";
    } else {
      ems1 = ems;
    }

    snijegnov1 = String('000' + snijegnov).slice(-3);

    if (hour_utc_displ == "06" || hour_utc_displ == "18") {
      if (ems1 == "0") {
        grupa34 = " 4" + ems1 + "///";
      } else if (ems1 == '/') {
        grupa34 = '';
      } else if (ems1 == "1" || ems1 == "5") {
        grupa34 = " 4" + ems1 + "998"
      } else if (snijegnov1 < 0.5) {
        grupa34 = " 4" + ems1 + "997"
      } else {
        grupa34 = " 4" + ems1 + snijegnov1;
      }
    } else {
      grupa34 = '';
    }

    //novi snijeg

    snijegnew1 = String('00' + snijegnew).slice(-2);

    if (hour_utc_displ == "06" || hour_utc_displ == "18") {
      if (ems1 == "/" || ems1 == "0" || ems1 == "1" || ems1 == "5"){
        grupa931 = ''
      } else {
        if (snijegnew == '') {
          grupa931 = ''
        } else if (snijegnew < 0.1) {
          grupa931 = " 93197"
        } else if (snijegnew == "0.1") {
          grupa931 = " 93191"
        } else if (snijegnew == "0.2") {
          grupa931 = " 93192"
        } else if (snijegnew == "0.3") {
          grupa931 = " 93193"
        } else if (snijegnew == "0.4") {
          grupa931 = " 93194"
        } else if (snijegnew == "0.5") {
          grupa931 = " 93195"
        } else if (snijegnew == "0.6") {
          grupa931 = " 93196"
        } else if (snijegnew > 400) {
          grupa931 = " 93198"
        } else {
          grupa931 = " 931" + snijegnew1
        }
      } 
    } else {
      grupa931 = ''
    }

    // insolacija 24 sata

    ss24x = String('000' + ss24).slice(-3);
    if (ss24 == '') {
      grupa55SSS = '';
    } else {
      grupa55SSS = " 55" + ss24x;
    }

    // insolacija 1 sat

    ss1x = String('00' + ss1).slice(-2);
    if (ss1 == '') {
      grupa553SS = '';
    } else {
      grupa553SS = " 553" + ss1x;
    }

    // oborina 24 sata

    if (r24s == '' && hour_utc_displ == "06") {
      grupa37 = " 70000";
    } else if (r24s == '' && hour_utc_displ == "12"){
      grupa37 = " 70000";
    } else if (r24s == '') {
      grupa37 = '';
    } else if (r24s == "0") {
      grupa37 = " 79999";
    } else if (r24s > 9998) {
      grupa37 = " 79998";
    } else {
      grupa37 = " 7" + r24s1;
    }

    // udar vjetra

    var ddxxs = document.getElementById("ddxx").value;
    var ffxxs = document.getElementById("ffxx").value;
    if (ffxxs < 17 ) {
      grupa911 = ''
      grupa915 = ''
    } else {
      ddxxy = String('00' + ddxxs).slice(-2);
      ffxxy = String('00' + ffxxs).slice(-2);
      grupa911 = " 911" + ffxxy;
      grupa915 = " 915" + ddxxy;
    }

    // slojevi oblaka

    if (nschshs1 == '') {
      ncss1 = '';
    } else {
      ncss1 = " 8" + nschshs1;
    }

    if (nschshs2 == '') {
      ncss2 = '';
    } else {
      ncss2 = " 8" + nschshs2;
    }

    if (nschshs3 == '') {
      ncss3 = '';
    } else {
      ncss3 = " 8" + nschshs3;
    }

    if (nschshs4 == '') {
      ncss4 = '';
    } else {
      ncss4 = " 8" + nschshs4;
    }

    // stanje mora

    if (vss == '') {
      vssx = "/"
    } else if (vss < 0.05) {
      vssx = 0
    } else if (vss >= 0.05 && vss < 0.2) {
      vssx = 1
    } else if (vss >= 0.2 && vss < 0.5) {
      vssx = 2
    } else if (vss >= 0.5 && vss < 1) {
      vssx = 3
    } else if (vss >= 1 && vss < 2) {
      vssx = 4
    } else if (vss >= 2 && vss < 4) {
      vssx = 5
    } else if (vss >= 4 && vss < 10) {
      vssx = 6
    } else if (vss >= 10 && vss < 20) {
      vssx = 7
    } else if (vss >= 20 && vss < 50) {
      vssx = 8
    } else {
      vssx = 9
    }

    if (vssx == "/" && mores1 == "/" && mores2 == "/") {
      grupa923 = ''
      grupa924 = ''
    } else {
      grupa923 = " 923" + mores1 + mores2
      grupa924 = " 924" + mores2 + vssx
    }

    // oblaci ispod razine postaje

    var nchhctx = document.getElementById("nchhct").value;

    // odjeljci

    var odjeljak1 = iRs + IX + hobl + vid + " " + NN8x + ddxds + ffxfs + " 1" + sntt + TSsyn2 + grupa2 + " 3" + P0P01 + " 4" + PP + " 5" + ap + tpr + grupa6 + grupa7 + grupa8 + grupa9;
    var odjeljak2 = "222//" + " 0" + snw + tws2;
    if (grupa31== '' && grupa32 == '' && grupa33 == '' && grupa34 == '' && grupa55SSS == '' && grupa553SS == '' && grupa36 == '' && grupa37 == '' && ncss1 == '' && ncss2 == '' && ncss3 == '' && ncss4 == '' && grupa911 == '' && grupa915 == '' && grupa923 == '' && grupa924 == '' && grupa931 == '' && spsp == '') {
      odjeljak3 = '';
    } else {
      odjeljak3 = "333" + grupa31 + grupa32 + grupa33 + grupa34 + grupa55SSS + grupa553SS + grupa36 + grupa37 + ncss1 + ncss2 + ncss3 + ncss4 + grupa911 + grupa915 + grupa923 + grupa924 + grupa931 + " " + spsp;
    }
    if (odjeljak3 == '') {
      document.getElementById("divix").setAttribute("style", "display:none");
    } else {
      document.getElementById("divix").setAttribute("style", "display:inline");
    }
    if (nchhctx !== '') {
      odjeljak4 = "444" + " " + nchhctx
    } else {
      odjeljak4 = ''
    }
    if (odjeljak4 == '') {
      document.getElementById("divix4").setAttribute("style", "display:none");
    } else {
      document.getElementById("divix4").setAttribute("style", "display:inline");
    }

    // završni ispis

    document.getElementById("odjeljak1").innerHTML = odjeljak1;
    document.getElementById("odjeljak2").innerHTML = odjeljak2;
    document.getElementById("odjeljak3").innerHTML = odjeljak3;
    document.getElementById("odjeljak4").innerHTML = odjeljak4;
  }