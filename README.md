### Installation

- Requires Kerberos (Maybe not compatable with node 10):
    - sudo apt-get install libkrb5-dev
    
    
- Requires some Mongo stuff.  Also, the base docker image of Mongo that we use has to be around 3.7 because the current Mint19/Ubuntu mongo-tools:3.7.  I'll upgrade everything when mongo-tools:4.0 is more common to Mint19/Ubuntu:
    - sudo apt-get install mongodb-clients
    - sudo apt-get install mongo-tools
    
### Node install the server 

- [project root]/  npm install


### Start the site
- Start the mongodb server
    - [project root]/  docker-compose up
    
- Start the key-stone server and serve the next code
    - [project root]/  npm run start
    
### Keystone

- Keystone CMS login is at http://localhost:3000/keystone/
- Default logging is admin@admin.com : admin
- Once you login as admin you can
    - Change the admin password
    - Add Images and ArtWork once you login as admin
- There is an db updates feature in keystone and the updates are in ./updates
    - There is a starter update there that adds the keystone user to keystone

### Database Management

- The MongoDb related setup is located in ./mongo
    - The db data is in ./mongo/db
    - Backups are stored in ./mongo/backups
    - docker-compose mounts ./mongo/docker-entrypoint-initdb.d to create the db user upon 'up' if no db data exists
        - You can see this mount in the docker-compose file.  It's a nice feature of the docker image.
    - Here also are some maintenance scripts
        - backup-mongo.sh:  Makes db backup to both a dated zip file and a recent zip in ./mongos/backups  (first: docker-compose up)
        - drop-mongo.sh:  Clears out the db folder  (first: docker-compose down)
        - restore-mongo.sh:  Unzips the current recent backup and loads it into the MongoDb  (first: docker-compose up)
