#Task

It is required to create a single page application,
which lists the repositories and organizations by search term.
Use api.github.com to get data.
Use React or React Native. Hooks and functional components.


##Optional but bonus requirements:
Use any State management. 
Use any Types checking.
UI - reproduce the most similar layout. Web developers should use scss/sass and responsive styles.
Search should have debounce input
Previous requests are shown in the history module, the maximum number of  displayed requests is 5. History should be available after reloading the page or mobile application.


# Notes on solution

1. Search is performed when the input value is changed.

2. Archive of previous requests is stored in localStorage. The search term is added to archive when search input is on blur.

3. List of previous requests are shown when search input is on focus.
