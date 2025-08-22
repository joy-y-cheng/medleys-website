const fs = require("fs");
const { Validator } = require("jsonschema");


if (process.argv.length < 4) {
    console.error("Usage: node validate.js <schema.json> <data.json>");
    process.exit(1);
}

const schemaPath = process.argv[2];
const dataPath = process.argv[3];

let schema, data;

try {
    schema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
} catch (err) {
    console.error("❌ Failed to read schema:", err.message);
    process.exit(1);
}

try {
    data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
} catch (err) {
    console.error("❌ Failed to read data:", err.message);
    process.exit(1);
}

const v = new Validator();
const result = v.validate(data, schema);

if (result.valid) {
    console.log("✅ JSON is valid against the schema.");
    process.exit(0);
} else {
    console.error("❌ JSON is invalid. Errors:");
    result.errors.forEach((err) => {
        console.error(`- ${err.stack}`);
    });
    process.exit(1);
}
