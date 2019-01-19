
### Unsip the recent-backup.tar.gz

    cd backup
    tar -xvzf recent-backup.tar.gz .

### Restore the data to mongo

    mongorestore ./shop_cms_db -u shop_cms_worker -p worker_pass -h localhost:27017 -d shop_cms_db --drop



### P.S.   Help from     https://blog.studiointeract.com/mongodump-and-mongorestore-for-mongodb-in-a-docker-container-8ad0eb747c62
