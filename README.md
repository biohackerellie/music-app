# React Music App in Docker
# [Live Site](https://music.epklabs.com)
![site](./Site.png)
## Front end made with React, Redux Toolkit, Vite, and Tailwind CSS.

## Backend made with Express and SQLite. 

# React Music App in Docker 1.5 Release Notes

I'm excited to announce the first official release of React Music App in Docker. This version includes a wide range of features designed to provide an immersive and easy-to-use music streaming experience. Here's what you can expect:

## Music Streaming Experience
Currently, you can listen to all of my released music. Select a track from the list list and enjoy continuous playback with minimal latency.

## Audio Player
The custom built audio player gives you full control over your listening experience. Play, pause, control the volume, and even see your progress through the song with our interactive progress bar.

## Stunning User Interface
Easy to browse my current selection and links to my music on other streaming platforms. Enjoy high-quality album artwork, song details, and smooth navigation.

## Responsive Design
Whether you're on a desktop or mobile device, my music player is designed to provide a seamless experience.

## Docker Integration
With Docker setup for both the front-end and the back-end, we ensure a consistent environment, making the app easy to launch and maintain, regardless of your operating system.


## Version 1.5 - Dockerize and Customize Your Music App
### New Features:

  - Docker Support: I've added Docker files to both the front-end and server directories to enable easier deployment of the application. This includes a Docker Compose file at the root of the repository, which allows the containers to be spun up together with a single command.

  - Customization with Environment Variables: I've introduced the ability to customize various aspects of the application through environment variables. This includes the homepage title and various music streaming links (e.g., Spotify, Apple Music), as well as API URLs. This allows you to personalize the application without modifying the code.

  - Single .env File: The front-end and server now pull from a single .env file at the root of the repository. This consolidates all environment variables into one place, simplifying configuration.

  - Improved Documentation: I've updated the README with instructions on how to use the new Docker and environment variable features, making it easier for new users to get started with the app.

Go to the Custom-Template Folder to get started! 

Bug Fixes:

  - Various minor bug fixes and performance improvements.

Thanks for checking this out! I'm excited to bring you this version and look forward to your feedback.

*Live version of the app has stricter License due to copyright music, Template licensed under MIT* 
