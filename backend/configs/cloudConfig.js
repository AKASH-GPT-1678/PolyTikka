import { Storage } from "@google-cloud/storage";
import path from "path";
import fs from "fs";


function initializeStorage() {
    let storage;
    console.log(process.env.NODE_ENV);

    if (process.env.NODE_ENV === "production1") {
        storage = new Storage({
            projectId: process.env.PROJECT_ID,
            keyFilename: "fleetops-464008-721115ecef79.json"
        });
    } else if (process.env.NODE_ENV === "production2") {
        storage = new Storage({
            projectId: process.env.PROJECT_ID,
            keyFilename: '/etc/secrets/GCP_FILE'



        });
    }

    return storage;
}

const storage = initializeStorage();

 export default storage