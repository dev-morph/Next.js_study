import Link from 'next/link'
import styles from './button.module.scss'

function Button(props) {
  return (
    <Link href={props.link}>
      {/* //href 추가할 필요가 없다. Link 컴포넌트가 아라서 렌더링 해준다. */}
      <a className={styles.btn}>{props.children}</a>
    </Link>
  )
}

export default Button
