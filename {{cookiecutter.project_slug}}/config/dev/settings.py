from config.base import *

MODULE_APPS += ["debug_toolbar"]

MIDDLEWARE += ["debug_toolbar.middleware.DebugToolbarMiddleware"]

INSTALLED_APPS = DJANGO_APPS + MODULE_APPS + MY_APPS
