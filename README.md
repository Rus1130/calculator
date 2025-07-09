# Keybinds
* `Tab` to evaluate a line
    ```
    1 + 1 [Tab]
    turns into:
    1 + 1 => 2
    ```
    * You can chain tabs together on the same line
        ```
        1 + 1 => 2 * 6 => 12
        ```
    * Type a semicolon to allow math to be evaluated on the same line as text
        ```
        hello! this is text. ; 1 + 1 => 2
        ```
* `Shift + Tab` to highlight a line
    * Highlighting this way is blocked by semicolons, if the cursor is to the right of it
        ```
        Hello! this is text. ; 1 + 1 => 2
        [Shift + Tab]
        Hello! this is text. ;[Highlight begin] 1 + 1 => 2[Highlight end]
        ```
* `Left Click` a tab to select it
* `Right Click` a tab to rename it
* `Ctrl + E` to export tabs to a file
* `Ctrl + I` to import tabs from a file
* `Ctrl + Tab` to create a new tab (does not work in browser, app only)
* `Ctrl + Delete` to delete the current tab
* `Ctrl + Left/Right Arrow` to cycle tabs
* Define variables below `[symbols]`
    ```
    x + 1 => 3
    [symbols]
    x=2
    ```