from pyautogui import click, pixel
from time import sleep

toggle_meshlab = (
    (click, (1859, 1796), "Click Meshlab icon in taskbar"),
)

filter_upper_mesh = (
    (click, (2111, 243), "Click eye of upper layer"),
    (click, (189, 72), "Filters"),
    (click, (217, 170), "Show current filter script"),
    (click, (953, 843), "Select action 'delete'"),
    (click, (1838, 888), "Remove"),
    (click, (1461, 1070), "Apply script"),
)

save_selected_mesh = (
    (click, (60, 64), "File"),
    (click, (230, 430), "Export mesh as"),
    (click, (1562, 701), "Dir up"),
    (click, (1312, 849, 2), "Double click on dir 'meshes'"),
    (click, (1297, 1136), "File type dropdown"),
    (click, (1400, 1258), "STL"),
    (click, (1646, 1074), "Save"),
    (click, (494, 674), "OK"),
)

delete_upper_mesh = (
    (click, (2222, 247, 1, 0, 'right'), "Right-click upper mesh"),
    (click, (2259, 422), "Delete current mesh"),
    (sleep, (2,), "Wait for completion")
)

def execute(actions):
    for (f, args, description) in actions:
        f(*args)
        sleep(1.3)

def progress_bar_complete():
    color_at_start = pixel(1220, 1708)
    grey = (230, 230, 230)
    return color_at_start == grey

def wait_for_filter_completion():
    sleep(3)
    while(not progress_bar_complete()):
        sleep(1)
    sleep(3)

if __name__ == '__main__':
    execute(toggle_meshlab)
    for i in range(4):
        execute(filter_upper_mesh)
        wait_for_filter_completion()
        execute(save_selected_mesh)
        execute(delete_upper_mesh)
