import { faker } from '@faker-js/faker'

export class User {
	public name: string
	public location: {
		lat: number
		lng: number
	}

	constructor() {
		this.name = String(faker.name.firstName())
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		}
	}

	public markerContent(): string {
		return `
			<div>
				<h1>User Name: ${this.getName()}</h1>
				lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
				quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				<br>
				<img width=100 height=100 src="https://picsum.photos/200/300" alt="random image">
				<br>
				<i>All rights reserved</i>
			</div>
		`
	}

	public getName(): string {
		return this.name
	}
	public setName(value: string) {
		this.name = value
	}

	public getLocation(): { lat: number; lng: number } {
		return this.location
	}
	public setLocation(value: { lat: number; lng: number }) {
		this.location = value
	}
}
