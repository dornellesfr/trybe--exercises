type selectFilter = 'recipient' | 'subject' | 'sender';

class Email {
  sendAddres: string;
  receivedAddress: string;
  subjectMessage: string;
  contentMessage: string;

  constructor(sendAddres: string, receivedAddress: string, contentMessage: string, subjectMessage: string) {
    this.sendAddres = sendAddres;
    this.receivedAddress = receivedAddress;
    this.subjectMessage = subjectMessage;
    this.contentMessage = contentMessage;
  }

  visualRepresent(): string {
    return this.sendAddres + this.receivedAddress + this.subjectMessage + this.contentMessage;
  }

  // filteringFor(typeFilter: selectFilter, by: string): string {
    
  // }
}