(function ($) {
    'use strict';

    let defaultOptions = {
        csslist: {'my-text-1': 'MyCss1'}
    };

    // Add all colors in two dropdowns
    $.extend(true, $.trumbowyg, {
        langs: {
            ru: {
                mycss: 'Стиль'
            },
            en: {
                mycss: 'Style'
            }
        },
        plugins: {
            mycss: {
                init: function (trumbowyg) {

                    trumbowyg.o.plugins.mycss = trumbowyg.o.plugins.mycss || defaultOptions;
                    let btnDef = {
                        dropdown: buildDropdown(trumbowyg),
                        text: trumbowyg.lang.mycss,
                        hasIcon: false
                    };

                    trumbowyg.addBtnDef('mycss', btnDef);

                },
                tagHandler: function (element, trumbowyg) {
                    let tags = [];
                    let $el = $(element);

                    $.each(trumbowyg.o.plugins.mycss.csslist, function (cssName, cssTitle) {
                        if ($el.hasClass(cssName)) {
                            tags.push('mycss-' + cssName);
                        }
                    });

                    return tags;
                }
            }
        }
    });

    function buildDropdown(trumbowyg) {
        let dropdown = [];

        $.each(trumbowyg.o.plugins.mycss.csslist, function (cssName, cssTitle) {
            let btn = 'mycss-' + cssName;

            trumbowyg.addBtnDef(btn, {
                text: cssTitle,
                hasIcon: false,
                fn: function () {
                    trumbowyg.saveRange();
                    trumbowyg.execCmd(
                        'insertHTML',
                        '<span class="' + cssName + '">' + trumbowyg.getRangeText() + '</span>'
                    );
                }
            });

            dropdown.push(btn);
        });

        return dropdown;
    }
})(jQuery);
