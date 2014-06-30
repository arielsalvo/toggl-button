/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('.title', {}, function (elem) {
  var link, description, titleElem = $('.title');

  description = titleElem.innerText;

  link = togglbutton.createTimerLink({
    className: 'rthelpdesk',
    description: description
  });

  $('.title').appendChild(link);
});
