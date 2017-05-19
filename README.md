# Coding Challenge - User List


[Live Link](https://kestralttr.github.io/coding-challenge051817/)

## Challenge Details

The goal of this coding challenge was to make a React application that requested data from an external API, sorted the results into selectable list items, and allowed the display of the selected items.

## Covering The Basics

This app was initially bootstrapped using the create-react-app CLI command to ensure that all essential React node modules and starting components were ready to go.  The CLI command does not include jQuery, so that was installed as well.

When the page loads, React mounts the App component, which contains the UserList component.  Upon mounting, the UserList component makes a GET request to jsonplaceholder.typicode.com via AJAX.  The incoming data is then sorted within the success property of the AJAX call to ensure sorting only happens when new data is imported.  After being sorted, the now-alphabetical user list is stored within the component's state.

UserList's render method checks to confirm whether the component's state is holding valid user data.  React's update protocol registers this and triggers an update, which translates the user data out of the component's state and into HTML that the user can view.

After the appropriate user data has been displayed, the viewer can check boxes next to each user and then click the Confirm button to see all the names of the checked items aggregated in a modal.  jQuery is used when the Confirm button is clicked to identify each relative user name, and display them in a simple modal, which can be exited by clicking on the background behind it.

The app is styled to exactly match the sample given in the instructions.

## Extra Features

There are a couple of extra features added that were not requested in the instructions.

First off, the style in the example was designed to ensure developers know the desired length and width of each div and list item.  However, it would likely never be used in an actual user-facing application.  For this reason, I included a Toggle Style button in the top right corner of my application, which replaces the harsh colors with whites and greys, applying specific styles to every other list item which aids readability.  The styles can be toggled back and forth indefinitely.

Also, I noticed it was time-consuming to have to uncheck all list items after selecting multiple, so I included a Uncheck All button that uses jQuery to seek out and uncheck all checkboxes instantly.

Finally, a modal was not requested, but seemed to be the best way to display selected data.  The modal is responsive and scrollable, scaling down to mobile sizes, and has a maximum width which prevents too much empty white space.  The modal also employs jQuery's fadeTo command to fade in and out when needed.
