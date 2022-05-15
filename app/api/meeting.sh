#!/bin/bash

API_KEY="exhibitit_default_secret"
# Change this after deployment
EXHIBITIT_URL=https://exhibitit.up.railway.app/api/v1/meeting

curl $EXHIBITIT_URL \
    --header "authorization: $API_KEY" \
    --header "Content-Type: application/json" \
    --request POST