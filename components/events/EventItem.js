import styles from './event-item.module.scss'
import Button from '../ui/button'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

function EventItem({ item }) {
  const { title, image, date, location, id } = item
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    dat: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const formattedAddress = location.replace(',', '\n')
  const explireLink = `/events/${id}`

  return (
    <li className={styles.item}>
      <img src={'/' + image} alt={title}></img>
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={explireLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem
