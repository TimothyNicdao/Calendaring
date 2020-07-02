class Ics {
  constructor(vevents = [], prodID, version, method ) {
    this.begin = 'BEGIN:VCALEDNAR';
    this.prodID = 'PRODID:' + (prodID || '-//Google Inc//Google Calendar 70.9054//EN');
    this.vevents = vevents;
  }

  build() {
    let output = '';

    const objectKeys = Object.keys(this);

    objectkeys.forEach(() => { 
      output += 'V' 
    });
  }
}

