import useScrollReveal from '../hooks/useScrollReveal'

const presets = {
  'fade-up': { from: 'translate-y-8 opacity-0', to: 'translate-y-0 opacity-100' },
  'fade-in': { from: 'opacity-0', to: 'opacity-100' },
  'fade-left': { from: '-translate-x-8 opacity-0', to: 'translate-x-0 opacity-100' },
  'fade-right': { from: 'translate-x-8 opacity-0', to: 'translate-x-0 opacity-100' },
  'scale-up': { from: 'scale-95 opacity-0', to: 'scale-100 opacity-100' },
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  className = '',
  as: Tag = 'div',
  ...props
}) {
  const { ref, isVisible } = useScrollReveal()
  const preset = presets[animation] || presets['fade-up']

  return (
    <Tag
      ref={ref}
      className={`transform transition-all ease-out ${isVisible ? preset.to : preset.from} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}
