/**
 * 获取公私钥 for NodeJs
 * date:2019-10-14
 * version:v2.0
 */
const sm2 = require('sm-crypto').sm2;

//签名
function sign(private_key, data){
    var sig = sm2.doSignature(data,private_key,{der:true,hash:true});
    return Buffer.from(sig, 'utf8').toString('base64');
}

//验签
function verify(public_key, sig, data){
    sig = Buffer.from(sig,'base64').toString();
    return sm2.doVerifySignature(data,sig,public_key,{der:true,hash:true});
}

//验证公私钥可用
function veryKeys(keys){
    var public_key = keys.publicKey;
    var private_key = keys.privateKey;
    var data = "I Love You";
    var signed = sign(private_key, data);
    return verify(public_key, signed, data);
}

/**
 * 获取公私钥
*/
function getKeyPairHex(){
    var keyPairHex = sm2.generateKeyPairHex();
    if(veryKeys(keyPairHex)){
        console.log("私钥：" + keyPairHex.privateKey);
        console.log("公钥：" + keyPairHex.publicKey);
    }else{
        getKeyPairHex();
    }
}

getKeyPairHex();

