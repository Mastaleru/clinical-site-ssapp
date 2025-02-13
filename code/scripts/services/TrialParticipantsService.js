const commonServices = require("common-services");
const DSUService = commonServices.DSUService;

export default class TrialParticipantsService extends DSUService {

    constructor() {
        super('/tps');
    }

    getTrialParticipants = (trialSSI, callback) => this.getEntities(this._getTrialParticipantsPath(trialSSI), callback)

    saveTrialParticipant = (trialSSI, trialParticipant, callback) => this.saveEntity(trialParticipant, this._getTrialParticipantsPath(trialSSI), callback);

    _getTrialParticipantsPath = (keySSI) => this.PATH + '/' + keySSI;
}