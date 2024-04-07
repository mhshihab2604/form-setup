
import { useForm } from "react-hook-form";
import useAuth from "./useAuth";
import SocialLogin from "./SocialLogin";


const Login = () => {
    const {signInUser} = useAuth()

    const {register,handleSubmit,formState: { errors },} = useForm();
    const onSubmit = data => {
    const {email, password} = data
        signInUser(email, password)
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div>
            <div
                className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 mx-auto mt-10">
                <h1 className="text-2xl font-bold text-center">Login Now</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="username"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("email", { required: true })}/>
                            {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("password", { required: true })}/>
                            {errors.password && <span className="text-red-500">This field is required</span>}
                        <div className="flex justify-end text-xs dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button
                        className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Login</button>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;