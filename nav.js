(function () {
    'use strict';

    var desktop = window.matchMedia('(min-width: 1081px)');
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-nav-menu]'));
    if (!items.length) return;

    var hoverOpen = null;
    var hoverClose = null;

    function getToggle(item) {
        return item.querySelector('.nav-menu-toggle');
    }

    function getLinks(item) {
        return Array.prototype.slice.call(item.querySelectorAll('.nav-menu a'));
    }

    function isOpen(item) {
        return item.classList.contains('is-open');
    }

    function close(item) {
        item.classList.remove('is-open');
        var toggle = getToggle(item);
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }

    function closeAll(except) {
        items.forEach(function (item) {
            if (item !== except) close(item);
        });
    }

    function open(item, focusFirst) {
        closeAll(item);
        item.classList.add('is-open');
        var toggle = getToggle(item);
        if (toggle) toggle.setAttribute('aria-expanded', 'true');
        if (focusFirst) {
            var links = getLinks(item);
            if (links.length) links[0].focus();
        }
    }

    items.forEach(function (item) {
        var toggle = getToggle(item);
        if (!toggle) return;

        toggle.addEventListener('click', function () {
            if (isOpen(item)) {
                close(item);
            } else {
                open(item, false);
            }
        });

        toggle.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                e.stopPropagation();
                open(item, true);
            }
        });

        item.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                if (isOpen(item)) {
                    e.stopPropagation();
                    close(item);
                    toggle.focus();
                }
                return;
            }

            if (!isOpen(item)) return;
            var links = getLinks(item);
            if (!links.length) return;
            var index = links.indexOf(document.activeElement);

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                links[(index + 1) % links.length].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                links[index <= 0 ? links.length - 1 : index - 1].focus();
            } else if (e.key === 'Home') {
                e.preventDefault();
                links[0].focus();
            } else if (e.key === 'End') {
                e.preventDefault();
                links[links.length - 1].focus();
            }
        });

        item.addEventListener('pointerenter', function (e) {
            if (e.pointerType !== 'mouse' || !desktop.matches) return;
            window.clearTimeout(hoverClose);
            window.clearTimeout(hoverOpen);
            hoverOpen = window.setTimeout(function () {
                open(item, false);
            }, 120);
        });

        item.addEventListener('pointerleave', function (e) {
            if (e.pointerType !== 'mouse' || !desktop.matches) return;
            window.clearTimeout(hoverOpen);
            hoverClose = window.setTimeout(function () {
                close(item);
            }, 150);
        });

        item.addEventListener('focusout', function (e) {
            if (!item.contains(e.relatedTarget)) close(item);
        });

        getLinks(item).forEach(function (link) {
            link.addEventListener('click', function () {
                close(item);
            });
        });
    });

    document.addEventListener('pointerdown', function (e) {
        if (!e.target.closest || !e.target.closest('[data-nav-menu]')) closeAll();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeAll();
    });

    desktop.addEventListener('change', function (e) {
        if (!e.matches) closeAll();
    });
})();
