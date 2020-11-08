// @ts-ignore
import faker from 'faker'
import {Mappable} from './customMap'

// @ts-ignore
export class User implements Mappable{
    name:string;
    location: {
        lat: number;
        lng: number
    }
    markerContent(): string {
        return `User name: ${this.name}`
    }
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}