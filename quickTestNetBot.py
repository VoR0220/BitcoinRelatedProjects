from splinter import Browser
#import wallet's address here...there is also the option of reading in the address
#for now let's just call it wallAddr
browser = Browser('chrome')
browser.visit('tpfaucet.appspot.com')
browser.fill('address', wallAddr)

#fill out captcha, and your bitcoins are on their way. 
