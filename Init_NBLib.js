  const nblib = require('nblib');
async function test(){
////
var rest = await nblib.init({
    API:"https://api.nbdomain.com/v1/", //resolver endpoint
    minerAPI:"https://merchantapi.taal.com", //endpoint of miner API
    token:"cftcftcft", //api token required by resolver
    debug:true, //enable debug or not.
    enable_write:true  //enable functions that can update and write value to NBdomain
  });

  console.log(rest);
}

test();
