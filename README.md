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

### Symbols & Functions
Define variables below `[symbols]`. If this section is omitted, you will not be able to evaluate mathematical expressions.
```
x + 1 => 3

[symbols]
x = 2
``` 
<br>

You can also define functions:
```
f(3) => 9

[symbols]
f(x) = x^2
```
#### Built-in Functions
You can use built-in functions like `sin`, `cos`, `tan`, `log`, etc.
##### format(x<Number\>)
This function formats numbers to a locale-specific string, which is useful for displaying results in a more readable format.
```
format(1234567.89) => 1,234,567.89
```
##### for(init<String\>, eq<String\>, n<Number\>, index<Number\>)
This function allows you to iterate over a range of numbers. It is useful for creating loops in your calculations.
```
init = initial value
eq = equation to evaluate
n = times to iterate
index = if undefined, returns all indexes, otherwise returns the value at that index. Starts at 1.

for("x=1", "x^2", 10) => 1,4,9,16,25,36,49,64,81,100
for("x=1", "x^2", 10, 5) => 25
```
##### timeformat(time<String\>)
This function formats a time string into a more readable format.
```
timeformat("375 minutes") => 6 hours, 15 minutes
timeformat("2 hours 90 minutes") => 3 hours, 30 minutes
timeformat("76 hours") => 3 days, 4 hours
```
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
# Other Menu
This describes the features of the "other" menu:
* `Current Theme` cycles between available themes
* `Recover Edits` will download a .json file containing that session's undo history. It will be tedious to restore everything, but this is your punishment for accidentally deleting everything.
* `Close` closes this menu
## Danger Zone!
* `Reset All Tab Text` resets all text inside of each pad
* `Clear Saved Tab Data` clears all saved tab data, including the current tab text
* `Clear All Save Data` starts a 5 second countdown on click. If clicked again within this countdown, clears all saved data, including the current tab text, all saved tabs, and themes.