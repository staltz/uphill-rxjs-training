const {interval} = require('rxjs');
const {take, filter, map} = require('rxjs/operators')

/**
 * Exercise: from interval(1000), make an Observable with 10 EVEN numbers
 * multiplied by 100. Then, subscribe to it and show the values
 * in console.log.
 */

const obs = interval(1000).pipe(
  filter(x => x % 2 === 0),
  take(10),
  map(x => x * 100)
)

obs.subscribe(x => console.log(x));
