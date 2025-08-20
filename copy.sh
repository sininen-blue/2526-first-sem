#!/bin/bash

rsync -av --exclude='*.pdf' --exclude='node_modules/' $1 $2
