sprint_editor.registerBlock('text', function ($, $el, data, settings) {

        settings = settings || {};

        data = $.extend({
            value: ''
        }, data);

        this.getData = function () {
            return data;
        };

        this.collectData = function () {
            if (!$.fn.trumbowyg) {
                return data;
            }

            data.value = $el.find('.sp-text').val();

            return data;
        };

        this.afterRender = function () {

            if (!$.fn.trumbowyg) {
                return false;
            }
            let plugins = {};
            let btns = [
                ['viewHTML'],
                ['formatting', 'link', 'specialChars'],
                ['strong', 'em', 'underline', 'del'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                ['unorderedList', 'orderedList'],
                ['removeformat']
            ];

            if (settings.toolbar && settings.toolbar.value) {
                btns = settings.toolbar.value.slice();
            }

            if (settings.csslist && settings.csslist.value) {
                btns.push(['mycss']);
                plugins['mycss'] = {csslist: settings.csslist.value}
            }

            $el.find('.sp-text').trumbowyg({
                svgPath: '/bitrix/admin/sprint.editor/assets/trumbowyg/ui/icons.svg',
                lang: 'ru',
                resetCss: false,
                removeformatPasted: true,
                autogrow: true,
                btns: btns,
                plugins: plugins
            });

        };
    }
);
