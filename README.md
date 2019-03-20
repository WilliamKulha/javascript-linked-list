# _Javascript Linked List_

#### _An implementation of a linked list in javascript. 3/20/2018_

#### By _**William Kulha**_

## Description

_Getting ready for my first super serious coding interview 😎, I realized that I didn't know what half the data structures you're supposed to know are. So I'm going to implement them all as javascript object with useful methods, but also with some methods that're just the algorithms that CTCI asks you to come up with for those data structures as interview questions. This is the implementation of a linked list._

### Use

Import the linked list into the whatever other file you wanna use it in.\
`import {LinkedList} from 'wherever/you/saved/this/file.js'`

When you want to make a new LinkedList just use a good ol' new statement:\
`const myCoolLinkedList = new LinkedList`;

## Methods

So you've made a new linked list. That's awesome! But you know what would be even more awesome? If you add some stuff to it.

You can add to the end using the `.append()` method.\
`myCoolLinkedList.append(WhatIWannaAppend);`

Or to the beginning using the `.prepend()` method.\ 
`myCoolLinkedList.prepend(WhatIWannaPrepend);`

If you wanna see if it worked, or if your list is still empty use the `.isEmpty()` method.\
`myCoolLinkedList.isEmpty();` >>> Returns true if there's nothing there.

If you wanna know how long your list is, just use the `.size()` method.\
`myCoolLinkedList.size();`

If you wanna see if your list is holding a certain value, use the `.contains()` method.\
`myCoolLinkedList.contains(thingThatMightBeInHere);`

If you wanna take something out of the list, just use the `.remove()` method.\
`myCoolLinkedList.remove(thingToRemove);`

Maybe you want to spin your list around. You can reverse your linked list with the `.reverse()` method.\
`myCoolLinkedList.reverse();`

Everybody hates it when duplicates start sneaking up on them. Remove all of 'em from your linked list with the `.removeDuplicates()` method!\
`myCoolLinkedList.removeDuplicates();` >>> Duplicates removed 😎

Maybe you want to see which element is Kth from the end of the list. Well don't worry about that! Just use the `.findKToLast()` method.\
`myCoolLinkedList.findKToLast(howManyFromTheEndWereTalkingHere);`


## Setup/Installation Requirements

* _Download or clone this repo <code>$git clone https://github.com/WilliamKulha/javascript-linked-list.git/code>_
* _Add it (good ol' copyin' and pastin' is fine) or an import reference to your own project._
* _Have fun noodling with the code and learning more about linked lists!_


## 🐛Known Bugs🐛

_There are no known bugs at this time._\

## Support and contact details

_If you have any questions or advice, or if you find a bug, drop me a line at kulha.william@gmail.com_

## Technologies Used

_javascript_

### License

*This Javascript linked list is licensed under the MIT License*

Copyright (c) 2019 **_William Kulha_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.