---
title: Eliminating Blocker from a Worship Service Team
description: the Development of Text Based ProPresenter Slide Simulator
date: 2026-01-18T00:00:00.000Z
author: Elgratio
type: Web Dev.
id: propresenter-sim
blogPath: /blog/propresenter-sim
pinnedImgPath: /blog-img/PJ04/PJ04-screenshot.png
# coverImgPath: null
pinned: true
# imgColPath: null
---

# Introduction (18 January 2026)
I developed this App to improve the workflow of my Team for our Worship Services.

We only have single device installed with ProPresenter, a Presentation App developed by Renewed Vision.
Therefore when we have several services needed to be prepared, we are essentially waiting on a queue to use the ProPresenter.

Since we also used a text based method in our workflow to import the Slide data, it will be easier if we could forsee the results of said texts before we import it in ProPresenter. This way we could reduce time needed to be on the Device installed with ProPresenter.

This is currently in development. Will update this on weekly basis.

# Development Journey

## v0.5.3 (18 May 2026)

I finally got the time to update the Post. As for the recent update on v0.5.3 I added an Improvement to the Preview Page. You might be wondering, what the h3ll is a Preview Page??

Well, let me walk throught the updates I've added since 18th of January 2026.

## v0.1.4 (20 January 2026)

I added basic and fundamental features to the App. Such as simple Text Area parser into a Slide Object and toggleable Option Menu where I can adjust the Slide Text Size and Alignment.

The first problem I faced here was when I wanted to add Quick Navigation feature, where the user could simply click the slide and the text area will highlight the text corresponding to that slide.

To solve this issue, I split the Text Area string data into objects using "\n\n" as a delimiter. Mimicing how ProPresenter parse my Multimedia Team's Service Slide.
After splitting them into objects, I mapped them into a new Object. 

Inside this new object I kept the Object index, it's content (text data), and it's char Index within the Text Data
On each new object, I added the content length with the recent/previous char Index + 2. This way I am able to also get current Char Index for the new object.

Each of this objects are mapped again as a Slide, keeping all of their data for later use.

Now to highlight the text area, once the user pressed the Slide corresponding to the specific string in the Text Area. It will first do a substring from the Text Area string and the charIndex of the corresponding Slide Object and using the substring as the main string for searching the Highlighted string. This way we can prevent highlighting duplicate string, since we jump further ahead to the correct string index. //Now that I take another good look on this code, the code was quite redundant since we already jump ahead using the Char Index

Now after managed to get the substring, we then move on to focusing and set selection range the string in the Text Area based on the Index we got from adding both the substring and the Char Index!

[To Be Added - Latest 18 May 2026]
