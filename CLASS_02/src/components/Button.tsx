
const Button = ({title, handlerFunction}:{title: string, handlerFunction: Function}) => {
  return (
    <div>
      <button onClick={handlerFunction}>
        {title}
      </button>
    </div>
  )
}

export default Button
