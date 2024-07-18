This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Perfecto

## Available Scripts

In the project directory, you can run:

### USING NPM

### `npm i`

### `npm run dev`

### Create distribution

`npm run build`

### docker files ###

docker build . -t shopizerecomm/shopizer-shop:latest

docker run \
-e "APP_MERCHANT=DEFAULT" \
-e "APP_BASE_URL=http://localhost:8080" \
-it --rm -p 80:80 shopizerecomm/shopizer-shop-reactjs

http://localhost

## Change theme color

change env file
APP_THEME_COLOR=#7c515d


default language is in rootReducer



ewogICJidWNrZXQiOiAicGVyZmVjdG9nYXoiLAogICJrZXkiOiAicHJvZHVjdHMvREVGQVVMVC8yMkRWSUUyMkxOMS9MQVJHRS8yMi1EVklFMjJMTi0xX05vX1BhbmVsc19TbWFsbF9TdXJyb3VuZDMuanBnIiwKICAiZWRpdHMiOiB7CiAgICAicmVzaXplIjogewogICAgICAid2lkdGgiOiAzMjgsCiAgICAgICJoZWlnaHQiOiAzMjgsCiAgICAgICJmaXQiOiAiY292ZXIiCiAgICB9CiAgfQp9

eyJidWNrZXQiOiJwZXJmZWN0b2dheiIsImtleSI6InByb2R1Y3RzL0RFRkFVTFQvMjJEVklFMjJMTjEvTEFSR0UvMjItRFZJRTIyTE4tMV9Ob19QYW5lbHNfU21hbGxfU3Vycm91bmQzLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzI4LCJoZWlnaHQiOjMyOCwiZml0IjoiY292ZXIifX19