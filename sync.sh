#!/bin/bash
git commit -m "Pending changes" .
git pull origin master
git pull github master
git push origin master
git push github master
