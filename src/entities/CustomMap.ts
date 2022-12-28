import { Company } from './Company'
import { User } from './User'

export class CustomMap {
	private googleMap: google.maps.Map

	constructor(elementID: string, location: { lat: number; lng: number }) {
		this.googleMap = new google.maps.Map(
			document.getElementById(elementID) as HTMLElement,
			{
				zoom: 1,
				center: {
					lat: location.lat,
					lng: location.lng,
				},
			},
		)
	}

	addUserMarker(user: User): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: user.userLocation.lat,
				lng: user.userLocation.lng,
			},
		})

		marker.setLabel(user.userName)

		marker.addListener('click', () => {
			const infoWindow = new google.maps.InfoWindow({
				content: user.userName,
			})

			infoWindow.open(this.googleMap, marker)
		})
	}

	addCompanyMarker(company: Company): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: company.companyLocation.lat,
				lng: company.companyLocation.lng,
			},
		})

		marker.setLabel(company.companyName)

		marker.addListener('click', () => {
			const infoWindow = new google.maps.InfoWindow({
				content: company.companyName + ' - ' + company.catchPhrase,
			})

			infoWindow.open(this.googleMap, marker)
		})
	}
}
