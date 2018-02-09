"use strict";
var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');

if (year < 33) {
    alert( 'Это слишком рано..' );
} else if (year > 33) {
    alert( 'Это поздновато..' );
} else {
    alert( 'Да, точно в этом году!' );
}