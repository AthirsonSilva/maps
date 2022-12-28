import { faker } from '@faker-js/faker'
import { Mappable } from './Mappable'

export class Company implements Mappable {
	public name: string
	public catchPhrase: string
	public location: {
		lat: number
		lng: number
	}

	constructor() {
		this.name = String(faker.company.name())
		this.catchPhrase = String(faker.company.catchPhrase())
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		}
	}

	public markerContent(): string {
		return `
			<div>
				<h1>Company Name: ${this.getName()}</h1>
				<h3>Catchphrase: ${this.getCatchPhrase()}</h3>
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

	public getCatchPhrase(): string {
		return this.catchPhrase
	}
	public setCatchPhrase(value: string) {
		this.catchPhrase = value
	}

	public getLocation(): { lat: number; lng: number } {
		return this.location
	}
	public setLocation(value: { lat: number; lng: number }) {
		this.location = value
	}
}
