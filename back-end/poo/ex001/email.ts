type selectFilter = 'recipient' | 'subject' | 'sender';

class Email {
  private _from: string;
  private _to: string;
  private _subjectMessage: string;
  private _contentMessage: string;

  constructor(from: string, to: string, subjectMessage: string, contentMessage: string) {
    this._from = from;
    this._to = to;
    this._subjectMessage = subjectMessage;
    this._contentMessage = contentMessage;
  }

  set subjectMessage(newSubject: string) {
    if(newSubject.length < 40) this._subjectMessage = newSubject;
  }

  get subjectMessage() {
    return this._subjectMessage;
  }

  get from() {
    return this._from;
  }

  get to() {
    return this._to;
  }

  get content() {
    return `
    ${this._from} to ${this._to}
    ${this._subjectMessage}

    ${this._contentMessage}
    `;
  }
}

const email1 = new Email('fe@test', 'test@test', 'Stuffs to do', 'Hi, dare Ava, how is it going? I would like to know if you have some time free to help me with stuffs to do in my garden?');
console.log(email1.content);