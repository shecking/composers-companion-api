#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sketches"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "sketch": {
      "composer": "'"${COMPOSER}"'"
      "music": "'"${MUSIC}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
