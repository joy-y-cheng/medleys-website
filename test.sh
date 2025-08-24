#!/bin/bash

set -uo pipefail

STATUS=0

# Run single schema test case
run_single_schema_test() {
    node tests/schema.test.js "$1" "$2"
    local rc=$?
    if (( rc < 0 )); then
        exit $rc
    elif (( rc > 0 )); then
        STATUS=$((STATUS + rc))
    fi
}

# Run all test cases
run_tests() {
    # Run all schema test cases
    for data in src/_data/*.json; do
        local base=$(basename "$data" .json)
        local schema="schemas/$base.schema.json"
        echo -e "\033[34mINFO:\033[0m Testing $base schema."
        run_single_schema_test "$schema" "$data"
    done
}

# Main driver code
run_tests
if (( STATUS == 0 )); then
    echo -e "\033[32mSUCCESS\033[0m"
else
    echo -e "\033[31mFAIL: $STATUS errors. See error log.\033[0m"
fi
