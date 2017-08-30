'use strict';

function IfDirective($, data, options, angularTemplate) {
  /**
   * ht-if expression
   */
  var htIfs = $("*[" + options.prefix + "-if]");
  htIfs.each(function (i, elem) {
    var expr = $(this).attr(options.prefix + '-if').trim();

    const isWrapped = $(this).parent() && ($(this)[0].prev.type !== 'text' || $(this)[0].prev.data.indexOf('{') > 0);

    if(!isWrapped) {
      $(this).before("{ " + expr + " ? ");
      $(this).after(" : null }");
    } else {
      $(this).before(expr + " ? ");
      $(this).after(" : null");
    }
    $(this).removeAttr(options.prefix + '-if');
  });
}

module.exports = IfDirective
