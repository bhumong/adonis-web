import { Head } from '@inertiajs/react'
import { useState } from 'react'

export default function Home(props: any) {
  const [age, setAge] = useState(0)

  return (
    <>
      <Head title="User/index" />

      <div className="container">
        <div className="title">user index</div>
        <div>
          age: {age}
        </div>

        <span>
          Learn more about AdonisJS and Inertia.js by visiting the{' '}
          <a href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</a>.
        </span>
        <button onClick={() => setAge(age+1)}>Add +1</button>
      </div>
    </>
  )
}
