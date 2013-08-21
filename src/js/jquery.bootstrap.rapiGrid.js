$.fn.rapiGrid = function(options) {

    var settings = $.extend({
        colModel: [],
        moduleUrl: '',
        currencySymbol: '$',
        defaultCurrencyId: null,
        beforeRemoveDetailCallback: function(obj, grid, e) {
            return true;
        },
        afterRemoveDetailCallback: function(grid, e) {
        },
        beforeAddDetailCallback: function(grid, e) {
            return true;
        },
        afterAddDetailCallback: function(grid, row, e) {
        },
        rowFocusInCallback: function(grid, row) {
        },
        rowFocusOutCallback: function(grid, row) {
        },
        getAutocompleteData: function() {
            return null;
        },
        detailsIndex: 'details'
    }, options);

    return this.each(function() {
        var grid = $(this);

        grid.on('click', 'tbody tr.new-row .key a', function(e) {
            e.preventDefault();
            if ((typeof settings.beforeRemoveDetailCallback !== 'function' || settings.beforeRemoveDetailCallback(this, grid, e)) && confirm('Descartar cambios?')) {
                $(this).parents('tr').remove();
                if (typeof settings.afterRemoveDetailCallback === 'function') {
                    settings.afterRemoveDetailCallback(grid, e);
                }
            }
        });

        grid.on('keydown', 'tbody tr:last :input:enabled:not([readonly]):last', function(e) {
            var key = e.charCode || e.keyCode;
            if (!e.shiftKey && key === 9) {
                $('#btn-add').trigger('click');
            }
        });

        grid.on('focusin', 'tbody tr td', function() {
            $(this).parent().addClass('info');
            $(this).children('.regular').first().children().first().focus();
            if (typeof settings.rowFocusInCallback === 'function') {
                settings.rowFocusInCallback(grid, $(this));
            }
        });

        grid.on('focusout', 'tbody tr td', function() {
            $(this).parent().removeClass('info');
            if (typeof settings.rowFocusOutCallback === 'function') {
                settings.rowFocusOutCallback(grid, $(this));
            }
        });

        grid.on('keydown', 'tbody tr.new-row td', function(e) {
            var key = e.charCode || e.keyCode;
            if (key === 27) {
                e.preventDefault();
                if ((typeof settings.beforeRemoveDetailCallback !== 'function' || settings.beforeRemoveDetailCallback(this, grid, e)) && confirm('Descartar cambios?')) {
                    $(e.target).parent().remove();
                    if (typeof settings.afterRemoveDetailCallback === 'function') {
                        settings.afterRemoveDetailCallback(grid, e);
                    }
                }
            }
        });

        $('#btn-add').on('click',function(e) {
            e.preventDefault();

            if (typeof settings.beforeAddDetailCallback !== 'function' || settings.beforeAddDetailCallback(grid, e)) {
                var newRow = $.fn.rapiGrid.rowBuilder.buildRow(grid, settings);

                newRow.children('td.regular').first().children(':input[type!=hidden]').first().focus().select();
                settings.afterAddDetailCallback(grid, newRow, e);
                window.scrollTo(0, document.body.scrollHeight);
            }
        });

        var deleting = false;
        $('#btn-del').on('click',function(e) {
            e.preventDefault();
            if (deleting) {
                return;
            }
            deleting = true;
            var anchor = $(this);
            var checks = grid.find('input:checked'), processed = 0;
            if (checks.length > 0) {
                //$(this).unbind('click');
                $(this).html('<i class=\"icon-i\"></i> Eliminando...').addClass('disabled');
                checks.each(function() {
                    var id = $(this).attr('id').split('_')[2];
                    var check = $(this);
                    $.post(settings.moduleUrl + '/delete_detail_ajax/' + id, function(data) {
                        processed++;
                        if (data.success) {
                            check.parent().parent().remove();
                        }
                        if (processed >= checks.length) {
                            anchor.html('<i class=\"icon-trash\"></i> Eliminar seleccionados').removeClass('disabled');
                            //anchor.bind('click', deleteDetailFunc);
                            if (grid.find('input[type=checkbox]').length === 0) {
                                $('#btn-del').hide();
                            }
                            deleting = false;
                        }
                    });
                });
            }
            else {
                alert('Seleccione al menos un detalle de orden a eliminar');
            }
        });

        if (grid.find('input[type=checkbox]').length === 0) {
            $('#btn-del').hide();
        }

    });

};
