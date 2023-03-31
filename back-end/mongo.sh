#!/bin/bash

docker run --rm --name mongodb -p 27017:27017 \
	-e MONGO_INITDB_ROOT_USERNAME=mongo \
	-e MONGO_INITDB_ROOT_PASSWORD=passwd \
	-v mongo_volume:/data/db -d mongo
