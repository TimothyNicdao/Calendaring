// Pass in components to build the ICS file
module.exports = class Ics {
  constructor(vevents = [], prodID, version, timezone) {
    this.prodID = `PRODID:${prodID || '-//Google Inc//Google Calendar 70.9054//EN'}`;
    this.version = `VERSION:${version || '2.0'}`;
    this.timezone = `TZID:${timezone || 'Pacific/Honolulu'}`;
    this.vevents = vevents;
  }

  build() {
    const output = `${'BEGIN:VCALENDAR'}${'\n'}${this.prodID}${'\n'}${this.version}${'\n'}`
    + `${this.vevents.reduce((accumulator, currentVal) => accumulator + currentVal.build() + '\n', '')}`;

    return output.trim() + '\nEND:VCALENDAR';
  }
};
