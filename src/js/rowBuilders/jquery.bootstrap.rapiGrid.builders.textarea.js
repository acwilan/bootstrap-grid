$.fn.rapiGrid.rowBuilder._build_text = function(col, td, fldAttr, settings) {
    td.append($('<textarea/>').attr(fldAttr).attr({rows: 1, cols: 20}));
};