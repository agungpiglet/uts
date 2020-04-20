'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuadata);

    app.route('/tampilsparepart')
        .get(jsonku.tampildatasparepart);
    
    app.route('/tampilmontir')
        .get(jsonku.tampildatamontir);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambahmontir')
        .post(jsonku.tambahdatamontir);

    app.route('/ubahmontir')
        .put(jsonku.ubahdatamontir)

    app.route('/hapusmontir')
        .delete(jsonku.hapusdatamontir);

    app.route('/tampildataadmin')
        .get(jsonku.tampildataadmin);
    }