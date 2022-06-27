import Link from 'next/link';
import { useRouter } from 'next/router';

const CoffeeStoreWithId = () => {
  const router = useRouter();
  return (
    <div>
      Coffee store with id {router.query.storeId}
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default CoffeeStoreWithId;
