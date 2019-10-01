# Tic Tac Toe Project

Revisit the old study hall favorite, tic-tac-toe, in a convenient browser format!
This game is a single page application, created by **Alex Davidenko** for a project assignment in General Assembly's Software Engineering Immersive course.

## To Play
You can play the game here: [https://alexgdav.github.io/tic-tac-toe-project-client/](https://alexgdav.github.io/tic-tac-toe-project-client/).
Sign-up and sign-in are required to play (I would recommend that you use a placeholder e-mail, and a simple password you don't use anywhere else).

## Technologies Used

 - Javascript
 - JQuery
 - HTML
 - CSS
 - Bootstrap
 - AJAX
 - GitHub

## Development Process

1.  Look over [Project Requirements](https://git.generalassemb.ly/ga-wdi-boston/game-project/blob/master/requirements.md)  and [Suggested Schedule](https://gist.git.generalassemb.ly/eron-salling/54bad2d68e07fcc5a2ffbec8dd2be4b5)
2. Get into a user-focused mindset by creating a set of [user stories](https://github.com/alexgdav/tic-tac-toe-project-client/blob/master/userstories.md) to brainstorm app functions
3. Translate the user stories and initial brainstorming into a [wireframe](https://raw.githubusercontent.com/alexgdav/tic-tac-toe-project-client/master/wireframe.jpg). This design ended up changing significantly between wireframe stage and final product, as the wireframe was too focused on style, and didn't take the necessary JS  code or project requirements into account enough
4. Create HTML template initially based on the wireframe, and add some basic CSS to place the game board and in-game messaging
5. Write cUrl scripts and use those to help write and troubleshoot the authentication processes for the sign-up & sign-in (POST), sign-out (DELETE), and change password (PATCH) forms using AJAX
6.  Add feedback messages to most of the authentication actions, and tie hiding parts of the page to the authentication actions, plan how to tie remaining messaging and show/hide features to game process actions
7. Test creating a new game (POST) via cUrl, and write the AJAX call for the same
8. Create simple, local only functionality for the game board, starting with having the user being able to add Xs to the board
9. Integrate creating new game call into the game board functionality
10. Add update move (PATCH) functionality and switch player functionality together, as those work well to develop as one logic structure
11. Set up functionality to stop player from clicking on board once game is over, to be deployed after winner is picked
12. Add win, tie, and loss conditions, and implement functionality from the previous step
13. Add feature to see the number of games that have been played by a user (GET)
14. Add some minor styling, while keeping it largely barebones due to time constraints

## Problem Solving Process

 - Console logging everything potentially affected by an error after
   seeing the initial error message was the tool I relied on the most.
   Logging the expected result of the erroring line of code, the result
   of anything being passed into a function, the return of a function,
   any calculations being made in between, what was held in which
   variables at what point

-  Commenting all the code I wasn't sure about, or code that could be repurposed,
sometimes with something simple like "this sets the current user", other times
something more detailed. I also left myself TO DO notes, if I half-finished
something, or wanted to add something to it later. For example, the "start new
game" function needed to also clear the board of the previous game; I left a
TO DO comment in the working create game function with that instruction and then
searched the entire project for these whenever I started work again
(a note: I've deleted all my comments and notes from the working code on the master
branch. Please look at the development branch or the 71a8193 branch for comment examples)

 - Figuring out the exact deploy order of asynchronous actions was a
   challenge, and this one needed a lot of refactoring of code to
   combine multiple functions into larger ones

- I expected the API calls to be challenging, and writing out the cURL scripts first really helped me see what to expect -- and what I would need to do with the returned information (if any)


## To be solved & added in future updates

#### top priority
 - mobile device functionality: phone, tablet
	 - there is no explicit mobile functionality currently
	 - the game can be played on a mobile device as is, but it's inconvenient
 -  additional styling features
	 - a better thought-out, consistent color scheme
	 - better "boxes"
	 - a more interesting landing page
	 - test and implement cross-browser functionality

#### secondary priority
 - a win count feature
 - win streak functionality for a given user
 - the ability to go back to unfinished games and complete them
 - the ability to rewatch a completed game's set of moves be played out
 - playing against AI or multiplayer


### Acknowledgements and Credits

The API backend was provided by GA.

Everyone in SEI-05 who has helped debug or let me bounce some ideas off you: thank you! An additional huge thanks to all the GA instructors for the individual support, the issues queue, and encouraging us through the process
