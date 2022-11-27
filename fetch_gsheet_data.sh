#!/bin/bash
gsheet_base_url="https://sheets.googleapis.com/v4/spreadsheets/1m1MZ8M5Klu1JEtz0izLJXnIdBpzYFPBaV0QdMu7ag70/values/"
tk5="TK5_Panel"
tfh="TFH_Panel"
tfv="TFV_Panel"
access_key="?key=${1}"

echo $access_key

curl "${gsheet_base_url}${tk5}${access_key}" > ./src/lib/prefatched/tk5.json
curl "${gsheet_base_url}${tfh}${access_key}" > ./src/lib/prefatched/tfh.json
curl "${gsheet_base_url}${tfv}${access_key}" > ./src/lib/prefatched/tfv.json