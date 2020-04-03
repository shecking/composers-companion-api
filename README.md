# Composer's Companion: Application Description

This application, Composer's Companion, is intended for musicians, composers, songwriters, and performers of all kinds. It provides a quick, lightweight way for users to log and access printed music ideas from a browser, and without the need for complex software. Composer's Companion was created using React and JavaScript (front-end) and Express (back-end).

## Important Links:

Link to the back-end server: <https://aqueous-earth-22729.herokuapp.com/>
(note: this application's server is hosted by Heroku; HTTP 404 is expected at this link)
Link to the back-end repo:<https://github.com/shecking/composers-companion-api>
Link to the front-end application: <https://shecking.github.io/composers-companion-client/#/>
Link to the front-end repo: <https://github.com/shecking/composers-companion-client>

## Setup and Installation

- Fork and clone this repository and its front-end counterpart using Git/GitHub
- Navigate to this client repository using command line
- Run `npm install` to install dependencies
- Run `npm run server` to start up a local server

## Planning Story:

As a musician and composer, I've had plenty of experience with music notation software through my academic career and beyond, but these programs required, at the very least, a personal computer with this complex software installed to store, edit, and playback my pieces. This app seeks to solve a major part of this issue: mobility. As far as my own experience, I always carried around a pencil and paper in the hopes of capturing ideas, but this always seemed to be forgotten. With modern mobile technology on the rise, it became obvious that a hole existed that I might be able to fill.

This application represents my first major project combining the React and Express libraries. Using pre-constructed 'boilerplates' of both, I was able to establish a simple program to store basic text input, which would serve as the basis for building the notation capabilities. Having previously used Express for another project, much of my effort was the integration of a music notation code library into a text-based language. Overall, I followed a more general workflow structure, and became more comfortable with the larger picture of software development rather than being bogged down by minute-to-minute details.

### ERD:

<https://imgur.com/1hKHU3D>

### Route Catalogue

| Verb   | URI Pattern            |
|--------|------------------------|
| GET    | `/sketches`            |
| GET    | `/sketches/:id`        |
| POST   | `/sketches`            |
| POST   | `/sign-up`             |
| POST   | `/sign-in`             |
| PATCH  | `/sketches/:id`        |
| PATCH  | `/change-password`     |
| DELETE | `/sketches/:id`        |
| DELETE | `/sign-out`            |

#### Unsolved Problems/Future Development:

At the time of this README's initial upload, this application can store user inputs which are rendered into basic musical notation, and allows a signed in user to view, edit, and delete their own creations. It is not a substitute for more complex music software. In theory, using the exhaustive ABC notation guide, much more complex renderings can be created, but this application currently provides input fields and formatting guides for a select few vital musical elements.

While this initial version is fully functional, the style of user input is not ideal. The ABC notation style for display with JavaScript is extensive, and the input style can be confusing for those unfamiliar with its style or, more broadly, standard music notation and its nuances. This is the most prominent issue impacting the user experience, and will be addressed in part in future updates.

Additionally, this application makes an effort to support visual notation rather than audio playback; an audio component will likely be addressed in the future. This addition would enhance the overall user experience, and potentially widen its reach to those with less musical training.
