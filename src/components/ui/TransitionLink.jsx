import { useApp } from '../../context/AppContext'

/** Anchor that runs the GSAP page transition. Modified clicks (new tab etc.) behave normally. */
export default function TransitionLink({ to, children, onClick, ...rest }) {
  const { go } = useApp()
  const handle = (e) => {
    onClick && onClick(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    go(to)
  }
  return <a href={to} onClick={handle} {...rest}>{children}</a>
}
