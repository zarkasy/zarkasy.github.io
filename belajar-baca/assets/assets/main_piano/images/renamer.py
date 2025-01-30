import os
from pathlib import Path

prefixes = ['notes_', ]
# prefixes = ['notes_clicked_', 'highlight_']
doremi = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si', 'do2']
def rename_files():
    folder = 'flute'
    files_path = Path.cwd() / 'assets' / 'main_piano' / 'images' / folder
    files = os.listdir(str(files_path))
    results = {}
    for prefix in prefixes:
        filtered_files = [fl for fl in files if prefix in fl]
        results[prefix] =  filtered_files

    for prefix in prefixes:
        files = results[prefix]
        for i, file in enumerate(files):
            currname = str(Path.cwd() / 'assets' / 'main_piano' / 'images' / folder / file)
            destname = str(Path.cwd() / 'assets' / 'main_piano' / 'images' / folder / "{}{}.png".format(prefix, doremi[i]))
            os.rename(currname, destname)


if __name__ == '__main__':
    rename_files()

        