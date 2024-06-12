from decouple import config
import os
from unipath import Path

SECRET_KEY = config('SECRET_KEY')
DB_PASSWORD = config('DB_PASSWORD')
DEBUG = config('DEBUG')
BASE_DIR = Path(__file__).parent