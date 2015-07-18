#!/usr/bin/python

from splinter import Browser
import sys
import json

data = []

with open(sys.argv[1]) as f:
    for line in f:
        data.append(json.loads(line))

print data

browser = Browser('chrome')

url = "http://faucet.haskoin.com/"
browser.visit(url)
browser.fill('address', sys.argv[1]	)
button = browser.find_by_id('bitcoin-symbol')
button.click()
