const zlib=require('zlib');
// compressed
const gzip=zlib.createGzip();
// uncompressed
const gunzip=zlib.createGunzip();
readStream.pipe(gunzip).pipe(WritableStream);