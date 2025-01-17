import NotificationMapper from "../utils/NotificationMapper.js";
const commonServices = require("common-services");
const DSUService = commonServices.DSUService;

export default class NotificationsService extends DSUService {

    constructor() {
        super('/notifications');
    }

    getNotifications = (callback) => this.getEntities(callback);

    saveNotification(notification, callback) {
        notification = NotificationMapper.map(notification);
        this.saveEntity(notification, callback);
    }
}