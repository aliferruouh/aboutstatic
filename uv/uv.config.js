self.__uv$config = {
    prefix: '/service/',
    bare: 'https://bare.benrogo.net','https://uv.holyubofficial.net/bare1/','https://uv.holyubofficial.net/bare3/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js'
};
