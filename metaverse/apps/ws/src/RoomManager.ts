import { User } from "./User";

export class RoomManager {
    rooms: Map<string, User[]> = new Map();
    static instance: RoomManager;

    private constructor() {
        this.rooms = new Map()
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new RoomManager();
        }
        return this.instance;
    }

    public addUser(spaceId, userId: User) {
        if (!this.rooms.has(spaceId)) {
            this.rooms.get(spaceId, [userId]);
            return
        }
        this.rooms.set(spaceId, [...this.rooms.get(spaceId), userId])
    }
}