import os, re, time
from os.path import abspath
import sys
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler, EVENT_TYPE_OPENED

IMPORT_REGEXP = re.compile(r"@import url\(\'(.+)\'\);")
MINIMIZE_REGEXP = re.compile(r"(\n\s*)|(/\*(.|\n)+?\*/)")
MINIMIZE_REGEXP2 = re.compile(r"(\W)\s|\s(\{)")
HOME_DIR = os.getcwd()

def read(path):
	file = open(path, "r")
	text = file.read()
	file.close()
	return text

def write(path, text):
	# print('WRITE: ' + path)
	file = open(path, "w")
	file.write(text)
	file.close()

def process(path):
	os.chdir(HOME_DIR + '/src')
	# print('PROCESS: ' + path)
	filedir = '/'.join( path.split('/')[0:-1] );
	text = read(path)
	os.chdir( filedir )
	text = re.sub(IMPORT_REGEXP, lambda x: process(x.group(1)), text)
	text = f'/* SOURCE: {path} */\n' + text
	return text
	
def build(src, result):
	print('BUILD: ' + result)
	processed = process(src)
	os.chdir(HOME_DIR)
	write(result, processed)

def minify(src, result):
	print('MINIFY: ' + src)
	text = read(src)
	text = re.sub(MINIMIZE_REGEXP, '', text)
	text = re.sub(MINIMIZE_REGEXP2, lambda x: x.group(1) or x.group(2), text)
	write(result, text)

if __name__ == "__main__":
	build("./main.css", "./build.css")
	minify('./build.css', './build.min.css')
	class BuildHandler(FileSystemEventHandler):
		def on_any_event(self, event):
			if event.event_type == EVENT_TYPE_OPENED:
				return
			print(f'Detected changes in {event.src_path}, rebuilding...')
			build("./main.css", "./build.css")
			minify('./build.css', './build.min.css')
	observer = Observer()
	observer.schedule(BuildHandler(), 'src')
	observer.start()
	try:
		while True:
			time.sleep(1)
	except KeyboardInterrupt:
		observer.stop()
	observer.join()