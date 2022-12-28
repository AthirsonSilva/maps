export interface Mappable {
	name: string
	location: {
		lat: number
		lng: number
	}
	catchPhrase?: string
	markerContent(): string

	getName(): string
	getLocation(): { lat: number; lng: number }
	getCatchPhrase?(): string
}
