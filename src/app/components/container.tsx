interface IContainerProps {
  children?: React.ReactNode,
  className: string
}

export default function Container({ children, className }: IContainerProps) {
  return <div className={className}>{children}</div>
}
