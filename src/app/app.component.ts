import { Component } from '@angular/core';

let getElm: any = (id: string) => document.querySelector(id);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public wordHere: string = 'word here...';
  public writeAWord: string = 'Please write a word!';
  public isWord: boolean = true;

  public textHere: string = 'text here...';
  public writeAText: string = 'Please write a text!';
  public isText: boolean = true;

  public ifWClr: boolean = true;
  public ifTClr: boolean = true;
  public gClr: string = 'b-gray';
  public rClr: string = 'b-red';

  public bWord!: any;
  public badWord!: any;
  public spc = ' ';

  ifWord(): void {
    if (getElm('#inp-field').value === '') {
      this.isWord = !this.isWord;
      this.ifWClr = false;
    } else if (getElm('#inp-field').value !== '') {
      this.isText = true;
      this.ifWClr = true;
      this.bWord = getElm('#inp-field').value;

      if (this.badWord === undefined) {
        this.badWord = this.bWord.toLowerCase();
      } else {
        this.badWord = this.badWord + this.spc + this.bWord.toLowerCase();
      }
      getElm('#inp-field').value = '';
    }
  }
  ifText(): any {
    if (getElm('#text-area').value === '') {
      this.isText = !this.isText;
      this.ifTClr = false;
    } else if (getElm('#text-area').value !== '') {
      let str1: any;

      this.ifTClr = true;

      let wordToLook: string = getElm('#text-area').value;
      let str2: string = `${wordToLook}`;
      let words2: any = str2.split(' ');

      let str: string = `${this.badWord}`;
      let words: any = str.split(' ');

      words2.forEach(function (item: any, index: any): any {
        for (let i = 0; i < words2.length; i++) {
          if (item.includes(words[i])) {
            let wordSplit: any = item.split('');

            for (let j = 0; j < item.length; j++) {
              wordSplit[j] = '*';
            }
            words2[index] = wordSplit.join('');
            str1 = words2.toString().replaceAll(',', ' ');
            return (getElm('#text-area').value = str1);
          }
        }
      });
    }
  }

  reset() {
    this.badWord = '';
    getElm('#text-area').value = '';
    this.isWord = true;
    this.isText = true;
    this.ifWClr = true;
    this.ifTClr = true;
  }
}
