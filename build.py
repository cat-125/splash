import os, re

IMPORT_REGEXP = re.compile(r"@import url\(\'(.+)\'\);")

def read(path):
	file = open(path, "r")
	text = file.read()
	file.close()
	return text

def write(path, text):
	file = open(path, "w")
	file.write(text)
	file.close()

def process(path):
	text = read(path)
	os.chdir( '/'.join( path.split('/')[0:-2] ) )
	text = re.sub(IMPORT_REGEXP, lambda x: read(x))
	return text
	
def build(src, result):
	write(result, process(src))

if __name__ == "__main__":
	build("./src/main.css", "./build.css")