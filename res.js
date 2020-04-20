'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };

    res.json(data);
    res.end();
};


exports.oknested = function(values, res){
    const hasil = values.reduce((akumulasikan, item)=>{
        if(akumulasikan[item.nama]){
            const group = akumulasikan[item.nama];
            if(Array.isArray(group.t_sparepart)){
                group.t_sparepart.push(item.t_sparepart);
            }else {
                group.t_sparepart = [group.t_sparepart, item.t_sparepart];
            }
        }else {
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    };

     res.json(data);
     res.end();
}