Instructions for the person receiving your project

Step 1: Extract your project ZIP

Extract the ZIP file you shared. The folder should look something like this:
Pharma_Website_Ajay/
├── frontend/
├── backend/
└── database/
└── pharmaWebsite.archive.gz

The pharmaWebsite.archive.gz file is the database backup.

Step 2: Install MongoDB

If MongoDB is not already installed on their computer:

1. Download and install MongoDB Community Server.
2. During installation, enable Install MongoD as a Service if that option is available.
3. Start the MongoDB service using Windows Services (services.msc) if it is not already running.
4. Install MongoDB Database Tools as well.

They need both the database server and the tools to restore your backup.

Step 3: Open PowerShell in the project folder

Open the extracted Forwell-Pharmaceuticals folder in File Explorer.
Open the database folder, click the address bar, type powershell, and press Enter.
They should now be in the folder containing pharmaWebsite.archive.gz.

Step 4: Restore the database

They should run this command in PowerShell:
mongorestore --uri="mongodb://127.0.0.1:27017" --archive="pharmaWebsite.archive.gz" --gzip

This restores the database and its collections to their local MongoDB server.

The resulting database name will be pharmaWebsite, because that name is stored in your backup.

Important: If they already have a database with the same name and collections, the restore may encounter duplicate-key errors. They should back up their existing data first and avoid using --drop unless they intentionally want to replace existing collections.
