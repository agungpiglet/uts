'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuadata);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambahmontir')
        .post(jsonku.tambahdatamontir);

    app.route('/ubahmontir')
        .put(jsonku.ubahdatamontir)

    }