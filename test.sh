#!/bin/bash

node tests/schema.test.js schemas/alum-info-list.schema.json src/_data/alum-info-list.json
node tests/schema.test.js schemas/faq-list.schema.json src/_data/faq-list.json
node tests/schema.test.js schemas/gallery-video-list.schema.json src/_data/gallery-video-list.json
node tests/schema.test.js schemas/member-info-list.schema.json src/_data/member-info-list.json
