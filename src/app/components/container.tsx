import classnames from "classnames"

interface IContainerProps {
  children?: React.ReactNode,
  className?: string
}

export default function Container({ children, className }: IContainerProps) {
  return <div className={classnames('container', className)}>{children}</div>
}
