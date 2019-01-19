
### Back up the Mongo

    mongodump  -u shop_cms_worker -p worker_pass -h localhost:27017 -d shop_cms_db -o backup

### Zip it with a date

    cd backup
    NAME=$(date '+%y-%m-%d')
    tar -zcvf "$NAME-backup.tar.gz"  ./shop_cms_db

### ZIP to recent

    rm recent_backup.tar.gz
    tar -zcvf "recent-backup.tar.gz"  ./shop_cms_db








### P.S.   Help from     https://blog.studiointeract.com/mongodump-and-mongorestore-for-mongodb-in-a-docker-container-8ad0eb747c62
