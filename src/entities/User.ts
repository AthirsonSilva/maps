import { faker } from '@faker-js/faker'

export class User {
	public userName: string
	public userLocation: {
		lat: number
		lng: number
	}

	constructor() {
		this.userName = String(faker.name.firstName())
		this.userLocation = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		}
	}
}
