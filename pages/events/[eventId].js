import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { getEventById } from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'

function EventDetailPage() {
  const { eventId } = useRouter().query
  const event = getEventById(eventId)
  if (!event) {
    return <p>No Event Found!</p>
  }
  console.log(event)
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </Fragment>
  )
}

export default EventDetailPage
