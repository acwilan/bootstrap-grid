$.fn.rapiGrid.rowBuilder._build_money = function(col, td, fldAttr, settings) {
    td.addClass('money');
    if (col.defaultValue !== undefined) {
        fldAttr.value = parseFloat(col.defaultValue).toFixed(2);
    } else {
        fldAttr.value = '1.00';
    }
    fldAttr.role = col.role;
    if (col.disabled) {
        fldAttr.disabled = 'disabled';
    }
    var fld = $('<input/>').attr(fldAttr).addClass('input-mini');
    if (col.onchange_callback) {
        fld.bind('change', col.onchange_callback);
    }
    $('<div/>').addClass('input-prepend').append(
        $('<span/>').addClass('add-on').html(col.currencySymbol ? col.currencySymbol : settings.currencySymbol),
        fld
    ).appendTo(td);
};