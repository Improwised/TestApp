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
docker run -p 4173:4173 web:latest
```

You can test Api on http://localhost:3000/sum?num1=5&num2=5  
and web is accesible on http://localhost:4173/


##  Web 
 
- This directory contain the Vue 3

- Node js  : Required Node.js version 18.0 or higher

- Simple Application includes sum and substraction functionality

### for run web

```
cd web
npm install
npm run dev
```
it will redirect to http://localhost:5173

### for build web


```npm run start```

```npm run preview```

it will redirect to http://localhost:4173


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

#### Route for sum

```
http://localhost:3000/sum?num1=10&num2=5
```


#### Route for Subtraction 

```
http://localhost:3000/sub?num1=10&num2=5
```

