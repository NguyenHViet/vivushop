import * as React from "react"
import PropTypes from 'prop-types'

export const ViewMoreIcon = (props) => {
  return <svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}  
    >
      <circle cx={18} cy={18} r={18} fill="currentColor" />
      <path
        d="M27 18l1.039-1.082L29.166 18l-1.127 1.082L27 18zM9 19.5a1.5 1.5 0 010-3v3zm12.789-8.582l6.25 6-2.078 2.164-6.25-6 2.078-2.164zm6.25 8.164l-6.25 6-2.078-2.164 6.25-6 2.078 2.164zM27 19.5H9v-3h18v3z"
        fill="#C1BEC1"
      />
  </svg>
  
}

ViewMoreicon.propTypes = {
  props: PropTypes.object
}

