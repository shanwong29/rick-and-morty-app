# Rick and Morty App

![Rick and Morty App demo](/demo.jpg)

An app to display information about characters from Rick and Morty.

User can search characters by querying the characters' name, species and status. Responsive on phone, tablet, and desktop.

You may view it on the deployment page: [Rick and Morty App](https://shanwong29.github.io/rick-and-morty-app/)

## What I have achieved...

1. practice the use of **React hooks** -- **custom hook**, **useReducer** and **useContext**;
2. practice the use of **styled-components**;
3. implement **pagination**;
4. practice **testing** in react.

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

1. **Testing**

More testing should be included. Reducer logic should better be included in testing.

2. **File Struture**

The data fetching logic should better be seperated from `GlobalStateProvider` component.

## Built with

1. React.js
2. React Hooks
3. styled-components
4. Jest
5. React Testing Library
6. [The Rick and Morty API](https://rickandmortyapi.com/)
