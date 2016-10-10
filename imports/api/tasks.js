import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks'); // Store on server and in client cache
