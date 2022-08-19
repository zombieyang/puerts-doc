const sx = require('shelljs');
const iconv = require('iconv-lite')
const sxExecAsync = async function(command) {
    return new Promise((resolve, reject)=> {  
        let child = sx.exec(command, {
            async: true,
            silent: true,
            encoding: 'binary'
        }, code=> {
            code ? reject(code) : resolve(code);
        });
        child.stdout.on('data', function(data) {
            console.log(iconv.decode(Buffer.from(data, 'binary'), process.platform == 'win32' ? "gb2312" : 'utf-8'));
        })
        child.stderr.on('data', function(data) {
            console.error(iconv.decode(Buffer.from(data, 'binary'), process.platform == 'win32' ? "gb2312" : 'utf-8'));
        })
    })
}

;(async function() {
    sx.mkdir('-p', 'temp');
    sx.cd('temp');
    await sxExecAsync('git clone -b master https://github.com/tencent/puerts.git');
    sx.mv('../public/pic', '../public/doc/');
    sx.mv('../public/doc', '../public/doc-back')
    sx.cp('-r', 'puerts/doc', '../public/')
    sx.mv('../public/doc/pic', '../public/')
    sx.cd('..')
    sx.rm('-rf', 'temp');
    sx.rm('-rf', 'public/doc-back');

})().catch(console.error)