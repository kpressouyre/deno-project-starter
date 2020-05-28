import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const client = new MongoClient();
const url = 'mongodb://'+Deno.env.get('MONGO_USERNAME')+':'+Deno.env.get('MONGO_PASSWORD')+'@'+Deno.env.get('MONGO_HOSTNAME')+':'+Deno.env.get('MONGO_PORT')+'/'+Deno.env.get('MONGO_DB')+'?authSource=admin';
client.connectWithUri(url);

const db = client.database("test");

export default db;
