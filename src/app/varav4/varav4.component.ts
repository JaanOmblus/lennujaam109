import { Component } from '@angular/core';

@Component({
  selector: 'varav4',
  templateUrl: './varav4.component.html',
  styleUrls: ['./varav4.component.scss']
})
export class Varav4Component {
  currentIndex;

  sections = [
    {
      name: 'Kes on Kratt?',
      content: 'Kratt on tehisintellekti tehnoloogiatel põhinev praktiline abimees/programm. Kratt põhineb tarkvaralisel algoritmil, mis on autonoomne ja õppimisvõimeline ning täidab traditsiooniliselt inimese poolt tehtavaid toiminguid. Käesolevas süsteemis on tegemist kitsa tehisintellektiga, mis väljendub masina võimes käituda intelligentselt ühes kitsas valdkonnas. '
    },
    {
      name: 'Kuidas elujõulisuse hindamine toimub?',
      content: 'Ettevõtete elujõulisuse hindamise projektis arendati välja masinõppe süsteem (Kratt) ettevõtete elujõulisuse hindamiseks eelneva kahe aasta andmete põhjal. Viit eritüüpi elujõulisust (likviidsus, efektiivsus, finantsvõimendus, tasuvus ja töökulude tootlikkus) defineeritakse erinevate finantssuhtarvude ning ettevõtte sektori kaudu: neid ettevõtteid, kes kuulusid oma kitsamas sektoris suhtarvu(de) alumisse kvartiili, peetakse selles elujõulisuse aspektis vähe-elujõuliseks. Ülemise kvartiili kuuluvus tähendab vastavalt kõrget elujõulisust. Elujõulisuse prognoosimise tehisnärvivõrkude väljund on skaalal 0…1, kus 0 tähendab, et mudel on täiesti kindel madalas elujõulisuses ja 1 tähendab, et mudel on veendunud kõrges elujõulisuses. Kasutajale kuvatakse lähtuvalt eritüüpi elujõulisuse mudelite väljunditest visuaalseid elujõulisuse indikaatoreid (roheline, kollane, punane) ning teksti kujul hoiatusi ja/või kiidusõnu. Treenitud tehisintellekt (Kratt) annab hinnangud viie suhtarvude grupi koondindeksite (skooride) kohta (1. Likviidsussuhtarvud, 2. Efektiivsuse suhtarvud, 3. Finantsvõimenduse suhtarvud, 4. Tasuvuse suhtarvud ja 5. Tööjõukulude tootlikus). Hinnang näitab Krati arvamust võrreldes suhtarvude koondindeksi paiknemisega teiste sarnaste ettevõtete osas (sama klaster, sama sektor). Arvutuste aluseks on esitatud majandusaasta aruanded ja igakuised maksudeklaratsioonid (KMD, TSD).'
    },
    {
      name: 'Tegevussektorite määratlemine',
      content: 'Ettevõtluse elujõulisuse indeksi jaoks on defineeritud ettevõtete/majandusüksuste tegevussektorid. Sektorid moodustati tegevusalade (EMTAK) kombineerimisel. Sektorite loomise aluseks on muuhulgas: sarnasus tehingute kajastuse osas bilanssides/kasumiaruannetes; sarnasus tehingute loogikas, arveldustes klientidega; tegevus lähedases sektoris (mis omakorda võib tagada sarnase majandusmudeli). Masinõppe mudeli jaoks on sektorid mõistlik määratleda üksnes siis, kui seal on olemas piisaval arvul tegutsevaid ettevõtteid, et neid saaks analüüsida ja nende põhjal olulisi sisendeid tagada (võrdlevad andmed, süsteemi masinõppe funktsiooni toitmine jne.). Mudelite treenimiseks kasutatavate sisendandmete kokkupanekul kontrolliti iga sektori kohta, et sinna kuuluks piisav arv ettevõtteid, nii et masinõppe mudel saaks toimida ja vajalikku tulemit tagada.'
    },
    {
      name: 'Tegevusala grupp (Klaster)',
      content: 'Ettevõtted on oma olemuselt, tegevustelt ja bilansinäitajatelt üpris mitmekesised. Suur heterogeensus muudab aga masinõppe keeruliseks ja seetõttu jagati ettevõtete tegevusalad (EMTAK) homogeensematesse klastritesse. Tekkis neli selgemalt eristuvat tegevusalade gruppi, kuhu kuuluvad ettevõtted saavad muude eelduste täitmisel elujõulisuse hinnangud. Need ettevõtted, keda ei saa seostada ühegi tegevusalade grupiga, jäävad elujõulisuse hindamisest kõrvale. Klastrit K1 iseloomustavad finantsteenused, kindlustus, infoalane tegevus, peakontorid, juhtimine, reklaamindus, teadus ja arendus. Klastri K2 alla koonduvad erisorti kaubanduse ja tootmisega tegelevad ettevõtted millele on omased pigem madalamad tööjõukulud, aga suured põhivarad ja müügitulud. Klastri K3 alla koondub ka kaubandus- ja tootmisettevõtteid, aga millele on iseloomulikud suured tööjõukulud, väiksemad mahud põhivarasid ning madalam tulusus. Klastri K4 alla koonduvad erisorti organisatsioonid ja asutused, millele on omane suur laenumaht.'
    },
    {
      name: 'Hoiatused',
      content: 'Juhul, kui analüüsitava ettevõtte majandusolukord on süsteemi hinnangul probleemne (see tähendab üldistatult eelkõige seda, et on vähenemas ettevõtte võimekus majanduslikult toime tulla, oma kohustusi täita jne.), siis väljastab süsteem ettevõttele hoiatuse. Hoiatuse eesmärgiks on juhtida tähelepanu võimalikule probleemile ja võrdlusbaasi olemasolul ka (näiteks) olukorra halvenemisele. Hoiatus on ainult informatiivset tähendust omav ja see väljastatakse ainult ettevõtte vastutavale isikule. Hoiatusel puudub igasugune õiguslik tagajärg, seda ei salvestata üheski riiklikus registris või mõnes võrreldavas andmekogus, selle pinnalt ei käivitata ühtegi avalik-õiguslikku menetlust. Õiguslikus mõttes on hoiatus informatiivne ja selle põhjal ei kohustata ettevõtet ette võtma mingisuguseid majanduslikke ega õiguslikke tegevusi, nagu ka hoiatusele mittereageerimine ei ole mingil määral sanktsioneeritav. Arvestades käesolevas materjalis toodud asjaolusid, millel põhineb ettevõttele hinnangu andmine, võivad hoiatused olla ekslikud nii oma hoiatuse taseme (hoiatusel on kolm võimalikku taset)  kui ka sisu poolest. Hoiatuse saanud ettevõtte juhtkonna (juhatuse) seisukohalt on oluline hoiatus enda ettevõtte kontekstis läbi mõtestada ning iseseisvalt selle adekvaatsust ja reaalsusele vastavust hinnata, vajadusel on soovitav kaasata ekspertteadmistega isiku abi.'
    },
    {
      name: 'Tulemuste selgitatavus',
      content: 'Masinõppe mudelite analüütilised tulemid on selgitatavad üksnes teatud määral, mitte alati ja täielikult. See tuleneb asjaolust, et mudelid kasutavad tulemite saamisel keerukaid matemaatilisi algoritme ja nende algoritmide tulemid ei pruugi olla reaalmajanduse kontekstis üheselt mõistetavad nagu ka reaalmajanduse oludega üheselt haakuvad. Mudelite algoritmide olemusest tulenevalt ei ole alati võimalik lahti mõtestada miks üks või teine mudel on teinud mõne konkreetse järelduse. Kohati võivad mudelid jõuda järeldustele, mis ei ole majandusanalüütiliselt selgitatavad või kooskõlas majandusanalüütilise ekspertarvamusega, mis sellistes oludes sellisele konkreetsele analüüsitavale ettevõttele võib hinnanguna anda. Ühtlasi ei pruugi järeldused olla kooskõlas faktilise majandusreaalsusega, sest mudelid põhinevad matemaatilisel loogikal, mis võib reaalmajanduse kontekstis jääda liiga üldteoreetiliseks.'
    }

  ];
  showComponent1: boolean = false;
  showComponent2: boolean = false;
  showComponent3: boolean = false;
  
  expand(index) {
    if(this.currentIndex === index) {
      this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
    //alert(this.currentIndex);
    
    if ( this.currentIndex === 0) {
      this.showComponent1 = true;
      this.showComponent2 = false;
      this.showComponent3 = false;
    }
    else if ( this.currentIndex === 1) {
      this.showComponent1 = false;
      this.showComponent2 = true;
      this.showComponent3 = false;
    }
    else if ( this.currentIndex === 2) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = true;
    }
  }

}