import os, re
	from os.path import abspath
	
	IMPORT_REGEXP = re.compile(r"@import url\(\'(.+)\'\);")
	MINIMIZE_REGEXP = re.compile(r"(\n\t*)|(/\*(.|\n)+?\*/)")
	HOME_DIR = os.getcwd()
	
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
		os.chdir(HOME_DIR + '/src')
		print('PROCESS: ' + path)
		filedir = '/'.join( path.split('/')[0:-1] );
		text = read(path)
		os.chdir( filedir )
		text = re.sub(IMPORT_REGEXP, lambda x: process(x.group(1)), text)
		return text
		
	def build(src, result):
		print('BUILD: ' + src)
		processed = process(src)
		os.chdir(HOME_DIR)
		write(result, processed)
	
	def minimize(src, result):
		print('MINIMIZE: ' + src)
		text = read(src)
		text = re.sub(MINIMIZE_REGEXP, '', text)
		write(result, text)
	
	if __name__ == "__main__":
		build("./main.css", "./build.css")
		minimize('./build.css', './build.min.css')