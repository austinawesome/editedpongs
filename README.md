{Ping Pong}

https://github.com/austinawesome/pingpong.git

{MathMatical Ping-Pong game}, {8/19/2017}

By {Austin Cummings}

Description

{This appplication will allow user to input a number and will evaluate that number in summation of the runing total of previous submissions. Once a total has been reached the program will evaluate whther the number is divisible by 15 3 or 5 and if so give a ping pong or ping-pong result if not it will simply output the total}

Setup/Installation Requirements

_Clone This repository
_open simple http server in top level of cloned directory
_open with atom or similiar tool
open web Browser of choice to local host 8000 * change scripts to scripts-2 for a more interactive game. {please feel free to read https://help.github.com/articles/cloning-a-repository/ for further cloning directions }
Known Bugs

{None known as of this time, program seems to accept n*10^23 or greater total}

Support and contact details

{Feel free to update this as seen fit. Send emails to Anonymous@stealth.net}

Technologies Used

{HTML, CSS, JS, regex bootstrap}

--Specifications--

output can countup to provided number                        || 2  || [1,2]

output can replace numbers divisible by 3 with "ping"       || 3  || [1,2,ping]

output can replace  numbers divisible by 5 with "pong"       || 5  || [1, 2, ping, 4, pong]

output can replace numbers divisible by 15 with "ping-pong" || 15 || [1, 2, ping, 4, pong, ping, 7, 8, 9, pong, 11, ping, 13, 14, ping-pong]

Copyright (c) 2016 {Austin Cummings}
