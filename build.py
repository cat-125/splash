import os, re, time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler, EVENT_TYPE_OPENED

IMPORT_REGEXP = re.compile(r"@import url\(\'(.+)\'\);")
MINIMIZE_REGEXP = re.compile(r"(\n\s*)|(/\*(.|\n)+?\*/)")
MINIMIZE_REGEXP2 = re.compile(r"(\W)\s|\s(\{)")
HOME_DIR = os.getcwd()

def read(path:str) -> str:
	f = open(path, "r")
	text = f.read()
	f.close()
	return text

def write(path:str, text:str):
	# print('WRITE: ' + path)
	f = open(path, "w")
	f.write(text)
	f.close()

def process(path: str) -> str:
	os.chdir(HOME_DIR + '/src')
	# print('PROCESS: ' + path)
	filedir = '/'.join( path.split('/')[0:-1] );
	if not os.path.exists(path):
		return ''
	text = read(path)
	if filedir:
		os.chdir( filedir )
	text = re.sub(IMPORT_REGEXP, lambda x: process(x.group(1)), text)
	text = f'/* SOURCE: {path} */\n' + text
	return text
	
def build(src:str, destination:str):
	print('BUILD: ' + destination)
	processed = process(src)
	os.chdir(HOME_DIR)
	write(destination, processed)

def minify(src, destination):
	print('MINIFY: ' + src)
	text = read(src)
	text = re.sub(MINIMIZE_REGEXP, '', text)
	text = re.sub(MINIMIZE_REGEXP2, lambda x: x.group(1) or x.group(2), text)
	write(destination, text)

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