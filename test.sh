#!/bin/bash

node tests/schema.test.js schemas/alum-info-list.schema.json src/_data/alum-info-list.json
node tests/schema.test.js schemas/faq-list.schema.json src/_data/faq-list.json
