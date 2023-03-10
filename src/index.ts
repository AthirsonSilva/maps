import { Company } from './entities/Company'
import { CustomMap } from './entities/CustomMap'
import { User } from './entities/User'

const user = new User()
const company = new Company()
const map = new CustomMap('map', {
	lat: user.location.lat,
	lng: user.location.lng,
})

map.addMarker(user)
map.addMarker(company)
