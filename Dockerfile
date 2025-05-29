# Stage 1: Build the application
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
# Using --legacy-peer-deps for potential compatibility issues, common in complex JS projects
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
# Ensure .dockerignore is set up to exclude node_modules if not already
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default Nginx page
RUN rm -rf ./*

# Copy built assets from the builder stage
# Vite typically builds to a 'dist' folder.
COPY --from=builder /app/dist .

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx and serve files
# The default Nginx command serves files from /usr/share/nginx/html
# Adding 'daemon off;' keeps Nginx in the foreground, which is standard for containers.
CMD ["nginx", "-g", "daemon off;"]