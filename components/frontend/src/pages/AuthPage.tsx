import { FC, useState } from 'react'
import { AuthService } from '../services/auth.service'
import { toast } from 'react-toastify'
import { setTokenToLocalStorage } from '../helpers/localstorage.helper'
import { useAppDispatch } from '../store/hooks'
import { login } from '../store/user/userSlice'
import { useNavigate } from 'react-router-dom'

const AuthPage: FC = () => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [role, setRole] = useState<string>('')
    const [group, setGroup] = useState<string>('')
    const [gitHandle, setGitHandle] = useState<string>('')
    const [department, setDepartment] = useState<string>('')
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const data = await AuthService.registration({ firstName, lastName, password, email, role, group, gitHandle, department })
            if (data) {
                toast.success('Account has been created.')
                setIsLogin(!isLogin)
            }
        } catch (err: any) {
            const error = err.response?.data.message
            toast.error(error.toString())
        }
    }

    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const data = await AuthService.login({ email, password, role, })

            if (data) {
                setTokenToLocalStorage('token', data.token)
                dispatch(login(data))
                toast.success('You logged in.')
                navigate('/')
            }
        } catch (err: any) {
            const error = err.response?.data.message
            toast.error(error.toString())
        }
    }

    return (
        <div className="mt-40 flex flex-col items-center justify-center bg-slate-900 text-white">
            {isLogin ?
                <>
                    <h1 className="mb-10 text-center text-xl">Login</h1>

                    <form
                        onSubmit={loginHandler}
                        className='mx-auto flex w-1/3 flex-col gap-5 py-5'
                    >
                        <input type="text" className='input' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className='input' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <input type="text" className='input' placeholder='Role' onChange={(e) => setRole(e.target.value)} />

                        <button className='btn btn-green mx-auto'>Submit</button>
                    </form>

                    <div className='mt-5 flex justify-center'>
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className='text-slate-300 hover:text-white'
                        >
                            You don`t have an account?
                        </button>
                    </div>
                </>
                :
                <>
                    <h1 className="mb-10 text-center text-xl">Sign up</h1>

                    <form
                        onSubmit={registrationHandler}
                        className='mx-auto flex w-1/3 flex-col gap-5 py-5'
                    >
                        <input type="text" className='input' placeholder='FirstName' onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" className='input' placeholder='LastName' onChange={(e) => setLastName(e.target.value)} />
                        <input type="text" className='input' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className='input' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <input type="text" className='input' placeholder='Role' onChange={(e) => setRole(e.target.value)} />
                        <input type="text" className='input' placeholder='Group' onChange={(e) => setGroup(e.target.value)} />
                        <input type="text" className='input' placeholder='GitHandle' onChange={(e) => setGitHandle(e.target.value)} />
                        <input type="text" className='input' placeholder='Department' onChange={(e) => setDepartment(e.target.value)} />

                        <button className='btn btn-green mx-auto' >Submit</button>
                    </form>

                    <div className='mt-5 flex justify-center'>
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className='text-slate-300 hover:text-white'
                        >
                            Already have an account?
                        </button>
                    </div>
                </>
            }
        </div>
    )
}

export default AuthPage