const RegisterForm = () =>{
    return (
        <section className="mt-6">
            <h1 className="text-center text-red-600 text-4xl mb-4 font-semibold ">Register</h1>
            <form className="block max-w-xs mx-auto">
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="submit">Register</button>
                <div className="my-4 text-center text-gray-500">or Login with provider</div>

                <button className="flex gap-4 items-center justify-center mb-7  w-full rounded-xl text-gray-700 font-semibold border border-gray-300 bg-gray-100 py-2">
                    <img src="/goog.png" alt="google" className="w-7 h-7" />
                    Login with google</button>
            </form>

        </section>
    )

}
RegisterForm.displayName = 'RegisterForm';
export default RegisterForm;
