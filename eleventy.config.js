const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = (function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        formats: ["webp"],
        widths: ["auto", 320, 480, 600, 768, 1024, 1440, 1920],
		htmlOptions: {
			imgAttributes: {
                sizes: "100vw",
				loading: "lazy",
				decoding: "async",
			}
		}}
    );
    eleventyConfig.addPassthroughCopy("src/CNAME");
    eleventyConfig.addPassthroughCopy("src/robots.txt");

    return {
        dir: {
            input: "src",
        },
        templateFormats: ["html","png","svg","jpg","css","js","pdf","woff","woff2","mp4","mov","webm"]
    };

});