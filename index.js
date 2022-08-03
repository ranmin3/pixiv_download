
// deno run --allow-all fuck-bitch.ts https://i.pximg.net/img-original/img/2020/08/08/14/10/31/83525337_p0.jpg 16

const { args, writeFileSync, cwd } = Deno;
const [ urlTemplate, number ] = args;
import config from './config.js';

const { headers } = config;
const [ urlHeader = '', urlFooter = ''] = urlTemplate?.split('_p0.');

if (urlFooter === '' || urlHeader === '') {
    console.log('图片连接不对');
}
for (let i = 0; i < number; i++) {

    /*const res = await fetch(urlTemplate, {headers});
    const img = await res.arrayBuffer();
    const uint8Array = await new Uint8Array(img);
    writeFileSync(`${cwd()}/images/222.png`, uint8Array,);*/
}



