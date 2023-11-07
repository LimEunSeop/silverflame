'use client'

import moment from 'moment-timezone'
import { useEffect, useState } from 'react'

type Props = {
  date: Date
  format?: string | undefined
}

const UTCToLocal = ({ date, format = 'YYYY-MM-DD HH:mm:ss' }: Props) => {
  const [dateString, setDateString] = useState(moment.utc(date).format(format))

  useEffect(() => {
    setDateString(moment.utc(date).tz(moment.tz.guess()).format(format))
  }, [date, format])

  return <>{dateString}</>
}
export default UTCToLocal
