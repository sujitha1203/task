import { GoogleSpreadsheet } from "google-spreadsheet";

// Config variables
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

const doc = new GoogleSpreadsheet("1Z7j8sTVQ3MqHaXX0kZPHYjUUKrE9dSLYm0evz3bqjl0");

export const appendSpreadsheet = async (row) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: "form312@carbon-trilogy-358910.iam.gserviceaccount.com",
      private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCoqQ1hZ8KfyqdR\nmRULElPr53erpnO43rQISkRRKazYxCDrthzfc8IJYZ5yuzru/GFgMFAE+I+RBwwb\nANlC/4HOfTeDcAZ5W9O3Ok9zsMXmHCxecQrr7zCOSSnuTCtNecPPOsGEewQST38u\n6dDLj+6vV4gOWa+gSFH5Se3tFb8ggYsrLNCoWCAVax4s2yeXTrKUUqeSuHNT3ojT\nJb7IpUNz+tb7n6Q9M8PdFGiFYAhUjd4h0FW+nqxoPcJoLH3YA2vK1sNWsX9KaZaB\n1A49y21kR9RzosSolI8LEPIBs79bHAZ2iYACzoiWAkVRY9Wghom8uvVqgSxivpnm\nX/6aWKk1AgMBAAECggEADDyvxthza4qVlzsHJtV+l0glC6Q5Ezm9UDirOkRO0S9x\nwAhnkeLhOjMF/wcMoJhZLFR1CddK+1fKjg8CtHS7Y1L8eyHepmF+O/YUG63AvhBf\nO77x7upc2IYAb9TA848ZIOj/b3BJfFaeQLYgOxTHWZt9OKVTM8rrf63YgHIqet4t\nJqHZZd3udnSj7+gjv5E1brPWqi7a63ZcdIBb5FHrNArRbSVCyeepkbYmeBkN9oti\nSw0iZtohJiXNNg+ev1c33DUPhLvwol5Sswns5NlRWQdD1/DiJL99vicu/hr+8ywD\n/2ggPn+UVAXhOaO8WRDt2YIgtY2QqdoGOYe+cqoDgQKBgQDQZ8yq8DtaLz5S7MBu\nHOFfzwXaLUMsiiQ1MtJUSe2GGv9LPepygcx6K9TV/go1sRHrzd21UyV6sAmdCV6Q\nWeeQPt82IC3sqnk/sYaYhclhuFN5FlazVHB5RSbaSVHIpZS7zR6WTZuJOSCMF86b\nhqjOLfcbrPToKTFebnBEwd2vIQKBgQDPLZkbPG26TZekMDfQzk8exJXlB7KzQS3r\n40Gung/KYOVJF2s5bAWZnyyBBJaWMzaO3ZazXx2rYO9SVR9lH3aeJgCA5SPULtPN\nIVlclqu7isHdGmQg9ijL32JAWjhzmrgPTztyULFrKwQ4apPhtaiZWNINVaAsyGag\nVMgn+fFblQKBgQC62gX30RH15tvDL7/MOhqbcxr1JZXPrj+ObvWDWxEaJsR0Kpw0\ndEnn07qs7msq/opp2BcLBvRYjtLfuFHPrLvgaW5psepbAfFZ+QoLYBBRjBlTPIMZ\noACDyktudURdWJAE3YCqFAT6wHx8/q9gZBifWzjt2GFwcdZwqyX/j6354QKBgHos\n8bVWFX9gcqSoqsHAaHhEhgDiYUfEkEgjZICNRdKbAZvw65KZWVQWwi/zfLpmyS3H\nDzAIT37ZU0jCWhlQTKtGzdU1S8O9ObomiIRJdkzKrzisb4/gmn5f5Zj9m3zRKOoe\nV3g6jeYdIAgFEeBxOFP2RSkH7cV7CMpUNRUeGG9hAoGBAKojXGSuFN83ZuukewVI\n13RK4Lj/D1esU6WYWDPtM+xWoxikTflIyy/fLtPaEIVrSxK0MVS2tTzpLZhmCYPa\n+A0maSTY/SljxhbnOBij9fkgrdARK0hUlzig4Cv7O+tob3dYYJpN2m792TYaYarq\nJw34wr7iq/FBUYCkWf3dEBCi\n-----END PRIVATE KEY-----\n",
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    

    const sheet = doc.sheetsById[0];
    const result = await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
  }
};


//  const newRow = { Name: {name} , Email: {email} , Subject: {subject} , Reason:  {reason} };

// appendSpreadsheet(newRow);

