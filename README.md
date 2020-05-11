# Rick and Morty App

You may view it on the deployment page: [Rick and Morty App](https://shanwong29.github.io/rick-and-morty-app/)

## Run Locally for Development

1. Make sure you have [`Docker`](https://www.docker.com/) and [`Docker Compose`](https://docs.docker.com/compose/) installed.

2. Clone the repository:

```
git clone https://github.com/shanwong29/rick-and-morty-app.git
```

3. Build Docker image and run the Docker container:

```
cd ./rick-and-morty-app
docker-compose up --build
```

The conatiner can be accessed at [http://localhost:3000](http://localhost:3000).

Every edit in the public or src folder will automatically be reflected in the app running in the container.

## Things that I would like to improve

1. **Date Filtering Feature**

   Binary Search would be an efficient way to find out the character(s) that fits the created date query, and present 10 characters per page to achieve good UI/UX.

   I didn't have enough time to impletment that, so I just did that in an easy way.

2. **Testing**

   More testing should be included. Reducer logic should better be included in testing.

3. **File Struture**

   The data fetching logic (useEffect Hooks) should better be seperated from `GlobalStateProvider` component.

4. **UX/UI**

   particularlly for page buttons and profile detail.

## Built with

1. React.js
2. React Hooks
3. styled-components
4. Jest
5. React Testing Library
6. [The Rick and Morty API](https://rickandmortyapi.com/)
