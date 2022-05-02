<!-- Explanation of Template Folder -->

IMPORTANT!
DELETE ALL NOTES NOT CRUCIAL TO PROJECT!

# CSS

<!-- Holds the style files -->

## general.css

This starts with the notes to the project. Font size etc. Learned to use this from Jonas Schmedtmann during my fullstack course 1. I like his method of having everything in one area while working on the project. These notes in my opinon will most likey be removed but until I know better I'll leave them in the file. While I do like Jonas' method of the notes I grew and started using the context :root {} where things such as colors and fonts stayed. Ill still use :root for colors and shades as I would prefere the quick switch of color on projects over hunting it all down.

Delete unneeded notes as you fill out and especialy before finalizing projects

After the Notes of the project comes general styles. These will be reused through out the project

We start off with :root full of color choices. To use this in another CSS you must @import ./CSS/general.css

We may not always use :root such as cases where colors may never change.

Then the general reset of padding and margin and box size.

html starts the standard. fontsize mostly use precentage to maintain a responsive site. Default will always be 16px

body will hold font famliy height and general font settings for the entire webpage

At this point General Reused Componenets start

this is where things that are used constantly through the project will be put,

After the GRC you have Helper Classes

This is where !important will be These take priority and overide other settings. Used best for margin, text, padding setting that need overrode.

## style.css
