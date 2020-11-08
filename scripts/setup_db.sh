#!/usr/bin/env bash
mysql -u root -e "create database dotvotedb;"
mysql -u root -e "create user 'dotvote'@'localhost';"
mysql -u root -e "GRANT ALL PRIVILEGES ON dotvotedb.* TO 'dotvote'@'localhost';"
