$.fn.rapiGrid.rowBuilder = {
    buildRow: function(grid, settings) {
        var newRowCount = grid.find('tbody tr.new-row').length,
            newRow = $('<tr/>').attr('id', 'new-row-' + (++newRowCount)).addClass('new-row');

        $('<td/>').addClass('key').append(
            $('<a/>').attr('href', '#').attr('title', 'Quitar detalle').append(
                $('<i/>').addClass('icon-minus')
            ).addClass('btn btn-mini'),
                $('<input/>').attr({
                    type: 'hidden',
                    name: 'data[' + settings.detailsIndex + '][' + (-newRowCount) + '][is_new]',
                    value: 1
                })
            ).appendTo(newRow);

        for (var i = 0; i < settings.colModel.length; i++) {

            var col = settings.colModel[i];

            if (col.hidden || col.key) {
                continue;
            }

            var td = $('<td/>');

            td.addClass('regular');

            var fldAttr = {
                id: 'data_details_nuevo_' + newRowCount + '_' + col.name,
                name: 'data[' + settings.detailsIndex + '][' + (-newRowCount) + '][' + col.name + ']',
                type: 'text',
                placeholder: col.title,
                title: col.title
            };
            if (col['class']) {
                fldAttr['class'] = col['class'];
            }
            if (col['disabled']) {
                fldAttr['disabled'] = 'disabled';
            }
            if (col['onchange_callback']) {
                fldAttr['onchange'] = 'return ' + col['onchange_callback'] + '(this);';
            }
            
            if (typeof this['_build_'+col.type] === 'function') {
                this['_build_'+col.type](col, td, fldAttr, settings);
            } else {
                this._build_default(col, td, fldAttr, settings);
            }
            td.appendTo(newRow);

        }

        newRow.appendTo(grid.find('tbody'));
        return newRow;

    },
    _build_default: function(col, td, fldAttr, settings) {
        if (col.role) {
            fldAttr.role = col.role;
        }
        if (!fldAttr.value && col.defaultValue !== undefined) {
            fldAttr.value = col.defaultValue;
        }
        var fld = $('<input/>').attr(fldAttr);
        if (col.onchange_callback) {
            fld.bind('change', col.onchange_callback);
        }
        if (col.disabled) {
            fld.attr('disabled', 'disabled');
        }
        if (col.tooltip) {
            fld.attr('rel', 'tooltip');
            if (typeof col.tooltip !== 'string') {
                fld.attr('data-title', col.title);
            } else {
                fld.attr('data-title', col.tooltip);
            }
            fld.removeAttr('title');
            fld.tooltip();
        }
        td.append(fld);
    }
};