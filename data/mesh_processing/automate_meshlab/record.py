from pynput import mouse, keyboard
from pyautogui import prompt

last_click = None

def on_click(x, y, button, pressed):
    global last_click
    last_click = (x, y)

mouse_listener = mouse.Listener(on_click=on_click)
mouse_listener.start()

def on_release(key):
    if key == keyboard.Key.space:
        description = prompt()
        print('(click, {}, "{}"),'.format(last_click, description))

    elif key == keyboard.Key.esc:
        # Stop listeners
        mouse_listener.stop()
        return False

with keyboard.Listener(on_release=on_release) as kb_listener:
    kb_listener.join()
