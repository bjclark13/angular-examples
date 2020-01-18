import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swearWordFilter'
})
export class SwearWordFilterPipe implements PipeTransform {

  transform(words: any, replace): any {
    const swearWords = [
      'crap',
      'frick',
      'heck',
      'gosh',
      'darn'
    ];

    const replaceWords = {
      'shit': 'crap',
      'ass': 'butt',
      'fuck': 'frick',
      'hell': 'heck',
      'god': 'gosh',
      'damn': 'darn',
      'cock': 'male body part',
      'dick': 'male body part',
      'bitch': 'b'
    };

    if ( replace ) {
      for ( const word in replaceWords ) {
        const re = new RegExp(word, 'gi');

        words = words.replace(re, replaceWords[word]); 
      }
    } else {
      swearWords.forEach( word => {
        const re = new RegExp(word, 'gi');

        words = words.replace(re, 'bleep');
      })
    }


    return words;
  }

}
