$.fn.rapiGrid.rowBuilder.tableData = {};

$.fn.rapiGrid.rowBuilder._build_related = function(col, td, fldAttr, settings) {
    fldAttr.type = null;
    var data = this.tableData[col.relation.table];
    if (!data) {
        $.post(settings.crudUrl + '/table_data', {table: col.relation.table, display: col.relation.display, displayfnc: col.relation.displayfnc}, function(rows) {
            data = rows;
            this.tableData[col.relation.table] = rows;
            var dd = $('<select/>');
            for (var prop in fldAttr) {
                dd.attr(prop, fldAttr[prop]);
            }
            for (var j = 0; j < data.length; j++) {
                var opt = $('<option/>').attr('value', data[j].id).html(data[j].value);
                if (data[j].id === null) {
                    opt.attr('selected', 'selected');
                }
                opt.appendTo(dd);
            }
            dd.appendTo(td);
        }, 'json');
    } else {
        var dd = $('<select/>');
        for (var prop in fldAttr) {
            dd.attr(prop, fldAttr[prop]);
        }
        for (var j = 0; j < data.length; j++) {
            var opt = $('<option/>').attr('value', data[j].id).html(data[j].value);
            if (data[j].id === null) {
                opt.attr('selected', 'selected');
            }
            opt.appendTo(dd);
        }
        dd.appendTo(td);
    }
};