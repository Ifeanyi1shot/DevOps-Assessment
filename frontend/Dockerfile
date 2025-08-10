FROM node:18-alpine as build
WORKDIR /app

# Copy only package.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your source code
COPY . .

# Ensure react-scripts is executable
RUN chmod +x node_modules/.bin/react-scripts

# Build
RUN npm run build

# Serve using nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
