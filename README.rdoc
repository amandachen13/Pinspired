= Pinspired

[Pinspired](https://pinspired.herokuapp.com/#/)

Pinspired is a full-stack web application inspired by Pinterest that allows users to discover and share ideas from around the web.
Users can save links and corresponding images as a "pin" and categorize the pins with "boards".

https://github.com/amandachen13/Pinspired/blob/master/app/assets/images/Screen%20Shot%202017-06-30%20at%2011.55.46%20AM.png

The application uses Ruby on Rails with a PostgreSQL database on the back-end and React with a Redux framework on the front-end

== Features & Implementation

=== User Authentication

https://github.com/amandachen13/Pinspired/blob/master/app/assets/images/Screen%20Shot%202017-06-30%20at%2011.54.57%20AM.png

Users cannot view the content of Pinspired until they either create an account or log in with valid credentials. When a user signs up, backend validations ensure that a unique username is chosen and that the password is long enough. BCrypt hashes the passwords and also verifies username and password combinations.

=== Modals

https://github.com/amandachen13/Pinspired/blob/master/app/assets/images/Screen%20Shot%202017-06-30%20at%2012.13.51%20PM.png

Many of the site's forms are displayed in an overlay on the current page rather than on a new page. Users can easily click outside of the modal window to return to the page they were on.

=== Pins & Boards

https://github.com/amandachen13/Pinspired/blob/master/app/assets/images/Screen%20Shot%202017-06-30%20at%2012.09.09%20PM.png

Users can create, view, update, and delete pins. Pins belong to the user's boards, which the user can also create, view, update and delete.

== Future Directions for the Project

Pinspired was designed and built in two weeks. In the future, I will be implementing the following features:

=== User Following

Users will be able to follow other users.

=== Infinite Scroll

The discover feed will gradually show more pins as the user scrolls down the page.

=== Search

Users will be able to search for the pins and boards that they are interested in.
