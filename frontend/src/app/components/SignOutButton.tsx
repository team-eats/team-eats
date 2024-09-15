import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
export function SignOutButton() {
    const router = useRouter();
    const handleSignOut = async () => {
        try {
            const response = await fetch('/api/sign-out', {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error('Sign out failed');
            }
            // Redirect to the home page or login page after sign out
            router.push('/');
        } catch (error) {
            console.error('Sign out error:', error);
        }
    };
    return (
        <Button onClick={handleSignOut} color="failure">
            Sign Out
        </Button>
    );
}




