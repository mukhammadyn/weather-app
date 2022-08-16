const hoc = (hook, Component) => {
  const HocResult = props => {
    const hookProps = hook(props)
    
    return <Component {...hookProps} {...props} />
  }

  return HocResult
}

export default hoc
