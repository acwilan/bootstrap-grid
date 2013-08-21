$.fn.rapiGrid.rowBuilder._build_date = function(col, td, fldAttr, settings) {
    fldAttr['class'] = 'datepicker input-small';
    this._build_default(col, td, fldAttr, settings);
    var opts = {};
    if (col.jsFormat) {
        opts.dateFormat = col.jsFormat;
    }
    if (col.minDate) {
        opts.minDate = col.minDate;
    }
    if (col.maxDate) {
        opts.maxDate = col.maxDate;
    }
    td.children('.datepicker').datepicker(opts);
};