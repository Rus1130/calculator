# Keybinds
## Evaluation and Highlighting
`Tab` to evaluate a line:
```
1 + 1 [Tab]
turns into:
1 + 1 => 2
```
<br>

You can chain tabs together on the same line:
```
1 + 1 => 2 * 6 => 12
```
<br>

You can also convert units:
```
1 m to cm [Tab]
1 m to cm => 100 cm
```
<br>

Type a semicolon to allow math to be evaluated on the same line as text:
```
hello! this is text. ; 1 + 1 => 2
```
<br>

`Shift + Tab` to highlight a line. Highlighting this way is blocked by semicolons, if the cursor is to the right of it.
```
Hello! this is text. ; 1 + 1 => 2
[Shift + Tab]
Hello! this is text. ;[Highlight begin] 1 + 1 => 2[Highlight end]
```
<br>

`Shift + Ctrl + Tab` to highlight an entire line, regardless of semicolons:
```
Hello! this is text. ; 1 + 1 => 2
[Shift + Ctrl + Tab]
[Highlight begin]Hello! this is text. ; 1 + 1 => 2[Highlight end]
```
<br>

Define variables below `[symbols]`:
```
x + 1 => 3
[symbols]
x=2
``` 
If the `[symbols]` section is omitted, you will not be able to evaluate mathmatical expressions.

## Navigation
* `Left Click` a tab to select it
* `Ctrl + Left/Right Arrow` to cycle tabs
* `Ctrl + S` to jump to the `[Symbols]` section, then `Ctrl + S` again to jump back to where you were

## Modification
* `Ctrl + Delete` to delete the current selected tab
* `Right Click` a tab to rename it, and then `Enter` to confirm the new name
* `Ctrl + Tab` to create a new tab

## Other
* `Ctrl + E` to export tabs to a file
* `Ctrl + I` to import tabs from a file
* `Ctrl + Z` to undo
# Other
This describes the features of the "other" menu:
* `Current Theme` cycles between available themes
* `Recover Edits` will download a .json file containing that session's undo history. It will be tedious to restore everything, but this is your punishment for accidentally deleting everything.
* `Close` closes this menu
## Danger Zone!
* `Reset All Tab Text` resets all text inside of each pad
* `Clear Saved Tab Data` clears all saved tab data, including the current tab text
* `Clear All Save Data` starts a 5 second countdown on click. If clicked again within this countdown, clears all saved data, including the current tab text, all saved tabs, and themes.