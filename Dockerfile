# 1. Use the version that matches your local machine
FROM node:20-alpine AS build-stage

WORKDIR /app

# 2. Copy package files
COPY package*.json ./

# 3. Install dependencies 
# We add the specific linux binary here so Docker knows to grab it
RUN npm install
RUN npm install @rollup/rollup-linux-x64-musl

# 4. Copy the rest of your code
COPY . .

# 5. Now run the build
RUN npm run build

# 6. Production stage
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]