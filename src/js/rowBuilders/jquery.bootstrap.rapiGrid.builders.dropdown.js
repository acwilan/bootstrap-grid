$.fn.rapiGrid.rowBuilder._build_dropdown = function(col, td, fldAttr, settings) {
    fldAttr.type = null;
    var opts = '';
    $.each(col.options, function() {
        opts += ' <option value="' + this.value + '">' + this.text + '</option> ';
    });
    td.append($('<select/>').attr(fldAttr).append(opts));
};