# prime-multiplication

> Prime multiplication table app

## Build Setup

``` bash
# install dependencies
npm install

# run tests
npm run test   # run all tests
npm run test:unit  #run quicker unit tests
npm run test:spec  #run longer vue/spec tests

# serve with hot reload at localhost:9000
npm run dev

# build for production with minification
npm run build

```

# Learned/enjoyed

> I have enjoyed working through the unit testing workflow and learning jest on a problem from scratch. Working with Docker and segmenting unit and component tests with automated testing.  

# If more time

> If more time, I'd like to rework the frontend quite a bit to possibly use Vuetify or more vue components rather than bootstrap css.   I'd also look into async functions and promises for the core generation method, as this would allow a smoother UX when generating larger tables of numbers.


# Docker
``` bash
docker build . prime-multiply
docker run -p 9000:9000 prime-multiply
```
