export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 32 32" className="size-9 shrink-0">
        <rect width="32" height="32" rx="9" fill="#B89A4E" />
        <path d="M8 25V15a8 8 0 0 1 16 0v10" fill="none" stroke="#08142A" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="16" cy="16" r="2.6" fill="#08142A" />
      </svg>
      <span className="text-lg font-extrabold leading-none tracking-tight">AV1<span className="font-medium opacity-70"> Academy</span></span>
    </span>
  )
}
