FROM mongo:latest 
# Lets assume the directory is correct
WORKDIR /usr/src/app/
COPY db-setup.js . 
EXPOSE 27017:27017   
ENV MONGO_INITDB_ROOT_USERNAME=REDACTED
ENV MONGO_INITDB_ROOT_PASSWORD=REDACTED
