const preprocess = require('svelte-preprocess');

module.exports = {
    vitePlugin: {
        disableDependencyReinclusion: ['@roxi/routify'],

    },
    preprocess: [
        preprocess(),
    ],
};
