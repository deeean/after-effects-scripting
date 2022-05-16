import '~/polyfill/object.define-property';
import '~/polyfill/object.create';
import '~/polyfill/object.keys';
import '~/polyfill/object.define-properties';
import Utils from '~/utils/utils';
import Console from '~/utils/console';

// Console;

// for (let i = 0; i < 100; i++) {
//   Console.println(`${i}_`);
// }

// alert(setTimeout);
// alert($.setTimeout(1000));

// function a() {
//   alert('asdf');
// }
//
// app.scheduleTask('a()', 1000, false);

Console.println('asdf');

Utils.setTimeout(() => {
  Console.println('asdf');
}, 1000);
