import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/EventList'

function HomePages() {
  const featuredEvents = getFeaturedEvents()
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default HomePages
