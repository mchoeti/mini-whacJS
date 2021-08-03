var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('body', '{"18280554_15": "Protokoll"}');

var config = {
    method: 'put',
    url: 'https://ecm.graz.at/OTCS/cs.exe/api/v1/nodes/neuVarHier/categories/18280554',
    headers: {
        'otcsticket': 'sampleToken',
        ...data.getHeaders()
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

const meineVariable = [1, 2, 3, 4, 56678, 9990, ];
console.log(meineVariable);