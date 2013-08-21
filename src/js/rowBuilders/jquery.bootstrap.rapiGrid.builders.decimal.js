$.fn.rapiGrid.rowBuilder._build_decimal = function(col, td, fldAttr, settings) {
    fldAttr.value = '1.00';
    fldAttr['class'] = 'input-mini';
    this._build_default(col, td, fldAttr, settings);
};