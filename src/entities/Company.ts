import { faker } from '@faker-js/faker'

export class Company {
	public companyName: string
	public catchPhrase: string
	public companyLocation: {
		lat: number
		lng: number
	}

	constructor() {
		this.companyName = String(faker.company.name())
		this.catchPhrase = String(faker.company.catchPhrase())
		this.companyLocation = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		}
	}
}
