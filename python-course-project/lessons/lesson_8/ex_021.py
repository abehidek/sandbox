#
from os import path
from pathlib import Path
from pygame import mixer
from tkinter import *
from tkinter import filedialog


def openfile():
    filepath = filedialog.askopenfilename(filetypes=[("audio files", "*.mp3")])
    mixer.init()
    mixer.music.load(filepath)
    mixer.music.play()
    # input('Listening to {}'.format(path.basename(filepath)))
    # input('Listening to {}'.format(path.splitext(filepath)[0]))
    input('Listening to {}'.format(Path(filepath).stem))


window = Tk()
button = Button(text="Open", command=openfile)
button.pack()
window.mainloop()
