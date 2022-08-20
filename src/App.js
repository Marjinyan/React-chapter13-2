import {useInput} from './hooks/useInput';

const App = () => {
  const Login = useInput('text')
  const Password = useInput('password')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(Login.value, Password.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input {...Login} />
      <input {...Password} />
      <button>Save</button>
    </form>
  )
}
export default App