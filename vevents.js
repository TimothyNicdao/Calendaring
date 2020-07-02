class Vevents {
  constructor(summary, classification, description, start, end, location, created) {
    this.summary = 'SUMMARY:' + summary;
    this.classification = 'CLASS:' + (classification || 'PUBLIC');
    this.description = description;
    this.start = 'DTSTART:' + start;
    this.end = 'DTEND:' + end;
    this.location = location;
    this.modified = new Date();
    this.created = created;
  }

  set modified(modified) {
    if (modified instanceof Date) {
      this.modified = modified;
    }
  }

  build() {
    let output = '';
    const objectKeys = Object.keys(this);
    objectKeys.forEach(() => {
      output += 'V';
    });
  }
}