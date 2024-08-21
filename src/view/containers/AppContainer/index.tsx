import { FC, Suspense, useEffect } from 'react'
import { useAuth } from '../../../redux/auth'
import { useTogglesRedux } from '../../../redux/client/toggles'

type PropTypes = {
    children: React.ReactElement
}

export const AppContainer: FC<PropTypes> = ({ children }) => {
    const { togglesRedux: {isInitialized} } = useTogglesRedux()
    const { authorization } = useAuth()

    useEffect(() => {
        authorization()
    }, [])
    
    return (
        <Suspense fallback={<p>Loading</p>}>
            {isInitialized && children}
        </Suspense>
    )
}