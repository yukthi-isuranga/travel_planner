import Image from 'next/image';
import { Button } from '../ui/button';

export default function SignIn() {
  return (
    <div className="flex items-center justify-center ">
      <Button
        variant="outline"
        size="lg"
        className="cursor-pointer bg-gray-800 text-white hover:bg-gray-700 hover:text-white"
      >
        Sign In
        <Image
          src="/github-svgrepo-com.svg"
          alt="Google Icon"
          width={20}
          height={20}
          className="ml-2 invert"
        />
      </Button>
    </div>
  );
}
