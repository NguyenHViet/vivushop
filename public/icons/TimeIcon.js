export const  TimeIcon = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} />
      <path
        d="M16.5 12h-4.25a.25.25 0 01-.25-.25V8.5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}