Basic Installation Instructions:

1. Clone this folder: You can download just this folder from the repo by going to [https://download-directory.github.io/](https://download-directory.github.io/) and pasting in the url of this directory: https://github.com/biohackerellie/music-app/tree/main/Custom-Template

2. Create an .env File: At the root of the repository, create a new .env file. This file will store all of your environment variables to customize the app like the Title and the sidebar links. Use the provided .env.example file as a guide.

3. Place all of your music files in the /server/public/audio directory, and your album covers in the images directory. Alternatively, you can have these folders elsewhere like on a shared directory and link them with the docker compose file, check step 5 for details.

4. Create a songs.json File: In the server/ directory, create a new songs.json file. This file will contain the metadata for all of your songs. For the coded mapping to work correctly, each song must have all of the following fields

```json
[
	{
		"id": 1,
		"title": "title",
		"artist": "Ellie Kerns",
		"album": "album name",
		"image": "images/albumArt1.jpg",
		"audioFile": "audio/audioFile1.mp3",
		"releaseDate": "releaseDate"
	}, // comma after each object in the array
	{
		"id": 2,
		"title": "title",
		"artist": "Ellie Kerns",
		"album": "Single",
		"image": "images/albumArt2.jpg",
		"audioFile": "audio/audioFile2.mp3",
		"releaseDate": "releaseDate"
	} // no comma after the last object in the array
]

// if you copied and pasted the above code, you'll need to delete the comments (//) or it will break your code

```


5. Build and Run with Docker Compose: Edit the docker-compose.yml file if necessary, be sure to delete the comments (#) on the `volumes` section if you are mapping your music and images files outside of the containers. Run `docker-compose up --build` from the root of the repository. This will build your Docker images and start your containers. If everything is set up correctly, you should be able to access your app at localhost:3030 (or whatever port you specified in your .env file). 
```yaml
version: '3.9'

services:
  frontend:
    build:
      context: ./front-end
      dockerfile: Dockerfile
    image: epklabs/music-app-frontend
    container_name: music-app-frontend
    restart: unless-stopped
    ports:
      - '3030:80' # change to your desired port on the left side of the colon. Do not touch the right side, and make sure to update the port in your .env file
    depends_on:
      - server
    networks:
      - mynetwork
    environment:
      - VITE_API_URL
      - VITE_HOME_TITLE
      - VITE_SPOTIFY_LINK
      - VITE_APPLE_LINK
      - VITE_AMAZON_LINK
      - VITE_YOUTUBE_LINK
      - VITE_SOUNDCLOUD_LINK

  server:
    build:
      context: ./server
      dockerfile: Dockerfile
    image: epklabs/music-app-server
    container_name: music-app-server
    restart: unless-stopped
    ports:
      - '3001:3001' # change to your desired port on the left side of the colon. Do not touch the right side and make sure to update the port in your .env file
    #volumes:
      #- /path/to/images:/app/public # change to your desired path, if not using the default, on the left side of the colon. It must be in a folder called Images. Do not touch the right side
      #- /path/to/music:/app/public # change to your desired path, if not using the default, on the left side of the colon. It must be in a folder called Music. Do not touch the right side
    networks:
      - mynetwork
    environment:
      - SITE_URL

networks:
  mynetwork:
```