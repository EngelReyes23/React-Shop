import clsx from 'clsx'
import { Link, useRoute } from 'wouter'

export const ActiveLink = ({ name, href }) => {
  const [isActive] = useRoute(href)

  return (
    <Link
      to={href}
      className={clsx(
        'my-2 transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0',
        isActive && 'text-blue-500 dark:text-blue-400'
      )}
    >
      {name}
    </Link>
  )
}
