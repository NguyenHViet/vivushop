export const BundleIcon = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={5}
        y={5}
        width={14}
        height={14}
        rx={2}
        stroke="currentColor"
        strokeWidth={2}
      />
      <path stroke="currentColor" strokeWidth={2} d="M12 6v12m-7-6h7" />
    </svg>
  )
}