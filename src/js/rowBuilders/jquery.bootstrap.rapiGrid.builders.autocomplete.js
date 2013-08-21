$.fn.rapiGrid.rowBuilder._build_autocomplete = function(col, td, fldAttr, settings) {
    fldAttr.type = 'hidden';
    $('<input/>').attr(fldAttr).appendTo(td);

    fldAttr.name = fldAttr.name.replace(col.name, col.autocomplete.text_field);
    fldAttr['data-id'] = '#' + fldAttr.id;
    fldAttr.id = null;
    fldAttr.role = col.autocomplete.role;
    fldAttr.type = 'text';
    var fld = $('<input/>').attr(fldAttr);
    if (col.autocomplete.onchange_callback) {
        fld.bootstrap.autoComplete({
            data: settings.getAutocompleteData(),
            changeCallback: col.autocomplete.onchange_callback
        });
    }
    else {
        fld.bootstrap.autoComplete({
            data: settings.getAutocompleteData()
        });
    }
    fld.appendTo(td);
};