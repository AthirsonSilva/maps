import { Mappable } from './Mappable'

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

	addMarker(entity: Mappable): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: entity.location.lat,
				lng: entity.location.lng,
			},
		})

		const infoWindow = new google.maps.InfoWindow({
			content: entity.markerContent() as string,
		})

		marker.setLabel(entity.name)

		marker.addListener('click', () => {
			infoWindow.close()
			infoWindow.open(this.googleMap, marker)
		})
	}
}
