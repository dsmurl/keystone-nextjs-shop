
// Creates a user for the application to only talk to the shop_cms_db and no others
// So the application can't act as root on the mongodb

db.createUser(
    {
        user: "shop_cms_worker",
        pwd: "worker_pass",
        roles: [
            { role: "readWrite", db: "shop_cms_db" }
        ]
    }
);