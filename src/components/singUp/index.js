import { Link } from "react-router-dom"
import { useState } from "react"
import { signUp } from "../../services/firebase"
import { SignForm } from "../signForm"

export const SignUp = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const handleSingUp = async (email, pass) => {
        setLoading(true)
        try {
            await signUp(email, pass)
        } catch (err) {
            console.log(err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <SignForm onSubmit={handleSingUp} error={error} loading={loading} />
            <Link to="/">Sign In</Link>
        </>
    )
}