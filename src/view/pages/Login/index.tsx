import { useForm, SubmitHandler } from "react-hook-form"
import {useAuth} from '../../../redux/auth'

type Inputs = {
  username: string
  password: string
}

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      username:"alextest",
      password: "passtest"
    }
  })
  const { authentication } = useAuth()

  const onSubmit: SubmitHandler<Inputs> = (input) => void authentication(input)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="user1" {...register("username", { required: true })} />

      {errors.username && <span>Username is required</span>}

      <input {...register("password", { required: true })} />

      {errors.password && <span>Password is required</span>}

      <input type="submit" />
    </form>
  )
}
