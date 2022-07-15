import { useState } from "react"

export const SignForm = ({ onSubmit, error, loading }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSetEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSetPass = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(email, pass)
        setEmail("")
        setPass("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type={"text"} value={email} onChange={handleSetEmail} />
                <input type={"password"} value={pass} onChange={handleSetPass} />
                <input type={"submit"} disabled={loading} />
            </form>
            {error && <h4>{error}</h4>}
        </>
    )
}