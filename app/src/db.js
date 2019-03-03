import * as R from "ramda";
import * as Future from "fluture";
import * as MongoDb from "mongodb";

function getVersion(version) {
    return Future.Future((reject, resolve) => {
        const client = new MongoDb.MongoClient(`mongodb://mongodb:27017/${version}`);
        client.connect(err => {
            if (!R.isNil(err)) {
                reject(err);
            } else {
                resolve(client.db(version));
            }
        });
    });
}

export {
    getVersion
}