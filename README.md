Requires Kerberos (Maybe not compatable with node 10):
    
    sudo apt-get install libkrb5-dev
    
    
    
    
Requires some Mongo stuff.  Also, the base docker image of Mongo that we use has to be around 3.7 because the current Mint19/Ubuntu mongo-tools:3.7.  I'll upgrade everything when mongo-tools:4.0 is more common to Mint19/Ubuntu:

    sudo apt-get install mongodb-clients
    sudo apt-get install mongo-tools
    
    
    