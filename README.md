# Keybinds
## Evaluation and Highlighting
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
* `Shift + Ctrl + Tab` to highlight an entire line, regardless of semicolons
    ```
    Hello! this is text. ; 1 + 1 => 2
    [Shift + Ctrl + Tab]
    [Highlight begin]Hello! this is text. ; 1 + 1 => 2[Highlight end]
    ```

* Define variables below `[symbols]`
    ```
    x + 1 => 3
    [symbols]
    x=2
    ```

## Navigation
* `Left Click` a tab to select it
* `Ctrl + Left/Right Arrow` to cycle tabs
* `Ctrl + S` to jump to the `[Symbols]` section, then `Ctrl + S` again to jump back to where you were

## Modification
* `Ctrl + Delete` to delete the current selected tab
* `Right Click` a tab to rename it
* `Ctrl + Tab` to create a new tab (does not work in browser, app only)

## Other
* `Ctrl + E` to export tabs to a file
* `Ctrl + I` to import tabs from a file
* `Ctrl + Z` to undo