/** Heading whose words sit in masks, so they can rise into place. intro=true uses the page-intro timeline. */
export default function Words({ as: Tag = 'h2', text, className = '', intro = false }) {
  const attr = intro ? { 'data-intro-words': '' } : { 'data-words': '' }
  return (
    <Tag className={className} {...attr}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(' ').map((w, i) => (
          <span key={i}>
            <span className="inline-block overflow-hidden pb-[0.14em] align-top -mb-[0.14em]">
              <span className="wi inline-block will-change-transform">{w}</span>
            </span>{' '}
          </span>
        ))}
      </span>
    </Tag>
  )
}
