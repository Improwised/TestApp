# TestApp

## Common

- This directory contain the common utils.js file which is used in vue3 web & express api application


## Docker

- For run api using docker run below command

```
docker build -t api -f ./api/Dockerfile .
```

```
docker run -p 3000:3000 api:latest
```

- For run web using docker run below command

```
docker build -t web -f ./web/Dockerfile .
```

```
docker run -p 8080:8080 web:latest
```

You can test Api on http://localhost:3000/sum?num1=5&num2=5
and web is accesible on http://localhost:8080/


##  Web

- This directory contain the React and webpack

- Node js  : Required Node.js version 18.0 or higher

- Simple Application includes sum and subtract math functions

### for run web

```bash
cd web
npm install
npm run dev
```
it will redirect to http://localhost:8080

### for build web


```npm run build```

```npm run start```

it will redirect to http://localhost:8080

### for fix lint

```
npm run lint
```

##  Api

- This directory contain the Express js

- Includes sum and substraction api

for run web

```bash
cd api
npm install
node index.js
```

it will redirect to http://localhost:3000

### for fix lint

```
npm run lint
```
#### Route for sum

```
http://localhost:3000/sum?num1=10&num2=5
```


#### Route for Subtraction

```
http://localhost:3000/sub?num1=10&num2=5
```

