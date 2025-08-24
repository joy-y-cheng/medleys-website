module.exports = (function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/CNAME");
    eleventyConfig.addPassthroughCopy("src/robots.txt");

    return {
        dir: {
            input: "src",
        },
        templateFormats: ["html","png","svg","jpg","css","js","pdf","woff","woff2","mp4","mov","webm"]
    };

});