import { useForm, SubmitHandler } from "react-hook-form"
import {useAuth} from '../../../redux/auth'

type Inputs = {
  username: string
  email: string
  password: string
}

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      username:"alextest",
      email:"alex@gmail.com",
      password: "passtest"
    }
  })
  const auth = useAuth()

  const onSubmit: SubmitHandler<Inputs> = (input) => void auth.register(input)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username", { required: true })} />

      {errors.username && <span>Username is required</span>}

      <input {...register("email", { required: true })} />

      {errors.password && <span>E-mail is required</span>}

      <input {...register("password", { required: true })} />

      {errors.password && <span>Password is required</span>}

      <input type="submit" />
    </form>
  )
}
