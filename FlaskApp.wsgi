#! /usr/bin/python
import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/FlaskApp/")

print >> sys.stderr, sys.version
from FlaskApp import app as application
application.secret_key = 'kschepis'
