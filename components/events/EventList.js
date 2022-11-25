import EventItem from './EventItem'
import styles from './event-list.module.scss'

function EventList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        return <EventItem item={item} key={item.id} />
      })}
    </ul>
  )
}

export default EventList
