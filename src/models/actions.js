import mongoose from 'mongoose'
import { dbCFDrello } from './index'

const ActionsSchema = mongoose.Schema({
    id: String,
    idMemberCreator: String,
    memberCreator: Object,
    data: Object,
    type: String,
    date: Date,
    dateString: String
});

export const Actions = mongoose.model('Actions', ActionsSchema);


