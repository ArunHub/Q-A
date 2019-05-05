var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

var context_url = '/OCR/service/api/';

var loginRes = {
  userId: "123456",
  firstName: "Soms",
  middleName: "Ayya",
  lastName: "Udhayakumar",
  email: "somaiya@gmail.com",
  addressLine1: "Test Address 1",
  addressLine2: " Test Address 2",
  addressLine3: "Test Address 3",
  addressCity: "Aranthangi",
  addressPostalCode: "614616",
  addressCountry: "DEU",
  deviceId: "123456",
  alternateEmail1: "testmail@gmail.com",
  alternateEmail2: "testmail2@gmail.com",
  dateOfBirth: "1985-02-02",
  gender: "M",
  language: "eng",
  mainCurrency: "EUR",
  referedBy: "1442025104",
  licenseExpiryDate:"02.02.2018"
};
var logoutRes = {};
var forgotPwdRes = {};
var updatePwdRes = {
  userId: "123456",
  firstName: "Soms",
  middleName: "Ayya Samy",
  lastName: "Udhayakumar",
  email: "somaiya@gmail.com",
  addressLine1: "Test Address 1",
  addressLine2: " Test Address 2",
  addressLine3: "Test Address 3",
  addressCity: "Aranthangi",
  addressPostalCode: "614616",
  addressCountry: "DEU",
  deviceId: "123456",
  alternateEmail1: "testmail@gmail.com",
  alternateEmail2: "testmail2@gmail.com",
  dateOfBirth: "1985-02-02",
  gender: "M",
  language: "eng",
  mainCurrency: "EUR",
  referedBy: "1442025104",
  licenseExpiryDate:"02.02.2018"
};
var loggedinUsrRes = {
  userId: "123456",
  firstName: "Soms",
  middleName: "Ayya Samy",
  lastName: "Udhayakumar",
  email: "somaiya@gmail.com",
  addressLine1: "Test Address 1",
  addressLine2: " Test Address 2",
  addressLine3: "Test Address 3",
  addressCity: "Aranthangi",
  addressPostalCode: "614616",
  addressCountry: "DEU",
  deviceId: "123456",
  alternateEmail1: "testmail@gmail.com",
  alternateEmail2: "testmail2@gmail.com",
  dateOfBirth: "1985-02-02",
  gender: "M",
  language: "eng",
  mainCurrency: "EUR",
  referedBy: "1442025104",
  licenseExpiryDate:"02.02.2018"
};
var emailcomposeresponse = {
	Subject : "Btr App Subjcet",
	Body: "Test body content"
}
var userregRes = {};
var updateUserRes = {
	userId: "123456"
};
var checkOnlineRes = {};
/*var fileUploadRes = "id": new Date().toISOString(), // Doc server id
        "text": "ï»¿.502 galeria-kaufhof.de galeria-kaufhof.de â€¢ Postfach 410 104 â–  44271 Dortmund Herr Palanisami Periyasami Auf den Ellern 4 61184 Karben Rechnung Sehr geehrter Herr Palanisami Periyasami, vielen Dank fOr Ihre Bestellung bei galeria-kaufhof.de. Wir wOnschen Ihnen viel Freude mit Ihrer Lieferung. Bitte bei Ruckfragen angeben: Kunden-Nr.:\tAuftrags-Nr.:\tRechnungs-Nr.:\tRechnungsdatum: 6000732692\t3500160984\t8117614666\t14.02.2016 Menge\tArtikelnummer\tArtikelbezeichnung, Farbe\tGrofie\tEinzelpreis in EUR\tMwSt in %\tGesamtpreis in EUR 1\t8056536492507\tGEOX Sneaker, aus Glattleder schwarz Rabatt\t43\t69,99\t19,00 19,00\t69,99 -21,00 Summe Teilauftrags-Nr. 9729205261 laut Lieferung vom 12.02.2016\t48,99 Aus Lagerstandort 302 \tMwSt in %\tNettobetrag in EUR\tzzgl. MwSt in EUR\tBruttobetrag in EUR \t19,00\t41,17\t7,82\t48,99 FOr Ihren Einkauf auf PAYBACK Konto gesammelte PAYBACK Punkte: 0\tGesamtbetrag inkl. MwSt\tEUR\t48,99 abzOglich GALERIA Geschenkkarte\tEUR\t0,00 Restbetrag\tEUR\t48,99\t\t\t Kundenservice 0800 - 2666111 (gebuhrenfrei) service@galeria-kaufhof.de Unseren Kundenservice erreichen Sie: Montag bis Samstag von 8:00 Uhr - 22:00 Uhr und Sonntag von 9:00 Uhr - 20:00 Uhr Lieferadresse Filiale Offenbach Frankfurter Str. 12-16 63065 Offenbach Ihre Zahlart fOr den Restbetrag: Rechnungskauf Bitte zahlen Sie den Restbetrag innerhalb von 14 Tagen unter Angabe der Rechnungs- und Kundennummer auf unten angegebene Bankverbindung. Empfanger: IBAN: BIC: Bank: Verwendungszweck: GALERIA Kaufhof GmbH DE97 3708 0040 0978 2680 33 DRES DE FF 370 Commerzbank K6ln Rechnung 8117614666 Kunde 6000732692 ",
        "categories": [
            {
                "Category": "Account",
                "Label": "Account",
                "Value": "Tom's Business Account#Wells Fargo 0023 45677 00000 2344",
                "DataType": "String",
                "ConfidencePercentage": 100.00
            }
        ],
        "rawInfos": {
            "Amount": [
                "-21,0"
            ],
            "Currency": [
                "EUR"
            ],
            "KeyField": [
                "Gesamtbetrag"
            ],
            "Date": [
                "12.02.2016"
            ]
        }
    };*/
var fileUploadRes = {};
var mergeTxtRes = {};

var apiUrlResMap = [
  {
    url: context_url+'login',
    method: 'post',
    status: 200,
    response: loginRes
  },
  {
    url: context_url+'loggedinuserdetails',
    method: 'get',
    status: 200,
    response: loggedinUsrRes
  },
  {
    url: context_url+'referralmailinfo',
    method: 'get',
    status: 200,
    response: emailcomposeresponse
  },
  {
    url: context_url+'logout',
    method: 'post',    
    status: 200,
    response: logoutRes
  },
  {
    url: context_url+'forgotpassword',
    method: 'post',
    status: 200,
    response: forgotPwdRes
  },
  {
    url: context_url+'updatepassword',
    method: 'post',
    status: 200,
    response: updatePwdRes
  },
  {
    url: context_url+'userregistration',
    method: 'post',
    status: 200,
    response: userregRes
  },
  {
    url: context_url+'updateuser',
    method: 'post',
    status: 200,
    response: updateUserRes
  },
  {
    url: context_url+'checkonline',
    method: 'get',
    status: 200,
    response: checkOnlineRes
  },
  {
    url: context_url+'fileupload',
    method: 'post',
    status: 200,
    response: fileUploadRes
  },
  {
    url: context_url+'mergeText',
    method: 'post',
    status: 200,
    response: mergeTxtRes
  }
];

apiUrlResMap.forEach(o=>{
  app[o.method](o.url,function(req, res, next){
    res.status(o.status);
    res.send(o.response);
  });
});

/* app.get(context_url+'login', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
}); */

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
})




  {
    "name": "test-server",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "start":"node index.js",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "cors": "^2.8.4",
      "express": "^4.16.3"
    }
  }
