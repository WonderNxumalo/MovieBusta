Movie Busta Web Application, created by Wonder Nxumalo (https://www.linkedin.com/in/wonder-nxumalo-415b6289/) as part of ALX FE-C2 Capstone Project.

The application is built using React Javascript and Tailwind CSS. It leverages Javascript and Tailwind to create a responsive application across devices with varying screen sizes.

Movie Busta enable users to search for movie information through The Movie Database (TMDB, https://www.themoviedb.org ) using the TMDB API. The data request is made using axios. Thereafter, the movie data which contains, among other things, the mocie poster, title, year of release, is displayed upon successful data fatch. Error messages are catched and displayed if there are errors with the search request.

The user can then choose to view more movie information which includes rating and movie plot. Otherwise, the user can add the movie to the favourite movie list. In the favourite movie list, the user can remove the saved favourite movies. The favourite movie list is saved on local storage for persistence in the local environment.