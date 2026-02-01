// Link Handler - Secure URL handling
(function() {
  'use strict';

  // Obfuscated function to open links
  var _0x4a8c = function(_0x2d3f, _0x5e1a) {
    var _0x1b9e = window['\x6f\x70\x65\x6e'];
    _0x1b9e(_0x2d3f, _0x5e1a || '\x5f\x62\x6c\x61\x6e\x6b');
  };

  // Handler for elements with data-link-url
  var handleClick = function(e) {
    var target = e.currentTarget;
    var url = target.getAttribute('data-link-url');

    if (url) {
      e.preventDefault();
      e.stopPropagation();
      _0x4a8c(url, '_blank');
    }
  };

  // Keyboard handler (accessibility)
  var handleKeydown = function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  };

  // Initialize when DOM is ready
  var init = function() {
    var elements = document.querySelectorAll('[data-link-url]');

    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', handleClick);
      elements[i].addEventListener('keydown', handleKeydown);
    }
  };

  // Execute when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
